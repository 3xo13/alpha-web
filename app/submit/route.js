import Quote from '@/utils/models/quote.js';
import {connectToDB} from '@/utils/database.js';
import nodemailer from "nodemailer";
import createTemplate from '@/functions/template';

// async..await is not allowed in global scope, must use a wrapper
async function mail(name, email, phone, items, message) {

    const plainTextMsg = `Name: ${name}\nEmail: ${email}\nPhone: ${phone} \nItems: ${items}\nMessage: ${message}`;
    const htmlMsg = createTemplate(name, email, phone, items, message);
    // Generate test SMTP service account from ethereal.email Only needed if you
    // don't have a real mail account for testing let testAccount = await
    // nodemailer.createTestAccount();
    let testAccount = {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
    }

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "mail.alpha-limit.com", port: 465, secure: true, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"${name}" <new-quote@alpha-limit.com>`, // sender address
        to: "alkarim1310@gmail.com", // list of receivers
        subject: "New Request Inquiry ✔", // Subject line
        text: plainTextMsg, // plain text body
        html: htmlMsg, // html body
    });

}

export const POST = async (request) => {

    try {
        const {name, email, items, message, phone} = await request.json();
        await connectToDB();
        const newQuote = new Quote({name, email, items, message, phone});

        await newQuote.save();

        mail(name, email, phone, items, message).catch(err => console.error(err));

        return new Response(JSON.stringify(newQuote), {status: 201})
    } catch (error) {
        return new Response(
            `Failed to create a new Quote, error: ${error}`,
            {status: 500}
        );
    }
}