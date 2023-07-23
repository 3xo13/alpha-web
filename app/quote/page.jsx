"use client";
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import Form from '@/components/pagesComponents/quotation/Form'
import useBasketData from "@/dataMangment/basketData";
import {v4 as uuidv4} from 'uuid';
import ProductReviwe from "@/components/pagesComponents/quotation/ProductReviwe";

const quote = () => {
    const router = useRouter();
    const [submitting, setIsSubmitting] = useState(false);
    const [cart, setCart] = useState([]);
    const {
        Basket,
        removeItem,
        decreaseQuantity,
        clearQuantity,
        clearBasket,
        setPruductQuantity
    } = useBasketData();

    useEffect(() => {
        setCart(Basket);
    }, [Basket]);

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
            // console.log(response);
            if (response.ok) {
                clearBasket();
                clearQuantity();
                router.push("/success");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);

        }
    };

    const cartItems = Basket.map((item) => ProductReviwe({item, removeItem, decreaseQuantity, setPruductQuantity}));
    console.log('page rerendered');
    return (
        <div className="w-screen h-fit flex lg:flex-row flex-col items-center justify-center" key={uuidv4()}>
            <div // cart content
                className={`${cart?.length > 0
                    ? 'lg:w-2/3 w-screen flex flex-col items-center justify-center'
                    : 'hidden'} h-fit flex flex-col p-10`}>
                {cartItems}
            </div>
            <div key={uuidv4()} // form content
                className={`${cart
                    ? 'lg:w-1/3 w-screen p-5 mb-10 lg:mb-0'
                    : 'w-screen'}  flex items-start justify-center`}>
                <Form
                    submitting={submitting}
                    handleSubmit={createQuote}
                    items={Basket}/>

            </div>

        </div>

    );
};

export default quote;
