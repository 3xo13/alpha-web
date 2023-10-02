"use client";
import {useState, useEffect} from "react"; 
import {useRouter} from "next/navigation";
import Form from '@/components/pagesComponents/quotation/Form'
import useBasketData from "@/dataMangment/basketData";
import {v4 as uuidv4} from 'uuid'; 

const Contact = () => {
    const router = useRouter();
    const [submitting, setIsSubmitting] = useState(false);
    const {
        Basket,
        removeItem,
        decreaseQuantity,
        clearQuantity,
        clearBasket,
        setPruductQuantity
    } = useBasketData();



    const createQuote = async (e,post) => {
        e.preventDefault();
        setIsSubmitting(true);

        const items = Basket.map((item) => {
            return {name: item.name, partNumber: item.partNumber, quantity: item.quantity, options: item.options, headers: item.headers}
        });

        try {
            const response = await fetch("/submit", {
                method: "POST",
                body: JSON.stringify(
                    {name: post.name, email: post.email, phone: post.phone, items: JSON.stringify(items), message: post.message}
                )
            });
            if (response.ok) {
                clearBasket();
                clearQuantity();
                router.push("/success");
            }
        } catch (error) {
        } finally {
            setIsSubmitting(false);

        }
    };
    return (
        <div className='w-screen lg:h-[160dvh] mb-10 mt-16'>
            <div className='flex flex-col lg:flex-row items-center lg:h-3/5 h-fit w-full'>
                <div className='form-wrapper lg:w-1/2 w-full lg:h-full flex-col-center p-5 pt-20 lg:p-0'>
                <Form
                    submitting={submitting}
                    handleSubmit={createQuote}
                    items={Basket}/>
                </div>
                <div className='map-wrapper lg:w-1/2 lg:h-full flex items-center my-10 lg:my-0'>
                    <div className=''>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5272.713915843004!2d46.72102986499491!3d24.78750356524735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efdba2f27054f%3A0xfdff0748a64bc0d6!2zUkhaQTgyMDAsIDgyMDAgRWFzdGVybiBSaW5nIEJyYW5jaCBSZCwgMzg5MdiMINit2Yog2KfZhNin2LLYr9mH2KfYsdiMIFJpeWFkaCAxMjQ4OCwgU2F1ZGkgQXJhYmlh!5e0!3m2!1sen!2str!4v1690717396549!5m2!1sen!2str"
                            style={{
                                border: 0
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="lg:w-[600px] lg:h-[450px] "
                            ></iframe>
                    </div>
                </div>

            </div>
            <div className='h-fit w-full p-5 pl-10'>
                <div className=' h-full '>
                    <h4 className='title text-2xl'>
                        Get in Touch - We're Here to Help!
                    </h4>
                    <p className='mt-2 text-lg'>Thank you for reaching out to us! Your inquiries are important to us, and we
                        are committed to providing you with the best possible assistance. Rest assured
                        that we value your time and we'll make every effort to respond to your message
                        within 24 hours.</p>
                    <p className='mt-2 text-lg'>Whether you have a question, need support, or simply want to share your
                        thoughts with us, we're eager to hear from you. Our dedicated team is standing
                        by, ready to address your concerns and provide the information you seek</p>
                    <p className='mt-2 text-lg'>Feel free to drop us a line using the contact form above or send us an email
                        directly..</p>
                    <p className='mt-2 text-lg'>We genuinely appreciate your interest in our services, and we look forward to
                        connect with you soon.</p>
                    <p className='mt-2 text-lg'>Best regards, <br />
                    <span className='uppercase text-yellow-500 text-xl'>alpha limit </span> Team</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
