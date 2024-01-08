import Quote from '@/utils/models/quote.js';
import {connectToDB} from '@/utils/database.js';
import nodemailer from "nodemailer";
import createTemplate from '@/functions/template';

// async..await is not allowed in global scope, must use a wrapper
async function mail(name, email, phone, items, message) {
    try {
        const plainTextMsg = `Name: ${name}\nEmail: ${email}\nPhone: ${phone} \nItems: ${items}\nMessage: ${message}`;
        const htmlMsg = createTemplate(name, email, phone, items, message);
        // Generate test SMTP service account from ethereal.email Only needed if you
        // don't have a real mail account for testing let senderAccount = await
        // nodemailer.createTestAccount();
        let senderAccount = {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD
        }
    
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "mail.alpha-limit.com", port: 465, secure: true, // true for 465, false for other ports
            auth: {
                user: senderAccount.user, // generated ethereal user
                pass: senderAccount.pass, // generated ethereal password
            }
        });
        
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"${name}" <new-quote@alpha-limit.com>`, // sender address
            to: "sales@alpha-limit.com, support@alpha-limit.com", // list of receivers
            subject: "New Request Inquiry ✔", // Subject line
            text: plainTextMsg, // plain text body
            html: htmlMsg, // html body
        });
        return true
    } catch (error) {
        console.log("🚀 ~ file: route.js:38 ~ mail ~ error:", error)
        return error
    }



}

export async function POST(request){

    try {
        const {name, email, items, message, phone} = await request.json();
        await connectToDB();
        const newQuote = new Quote({name, email, items, message, phone});

        await newQuote.save();

        await mail(name, email, phone, items, message).catch(err => console.error(`Error occured while sending your email, Error:${err}`));

        return new Response(JSON.stringify(newQuote), {status: 201})
    } catch (error) {
        console.log("🚀 ~ file: route.js:52 ~ POST ~ error:", error)
        return new Response(
            `Failed to create a new Quote, error: ${error}`,
            {status: 500}
        );
    }
}