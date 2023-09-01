'use client';
import useBasketData from "@/dataMangment/basketData"
import {useState, useRef} from "react";
import {v4 as uuidv4} from 'uuid';

const Form = ({submitting, handleSubmit, items}) => {
    const {removeItem, decreaseQuantity} = useBasketData();
    // const [post, setPost] = useState({name: "", email: "", phone: "", message:
    // ""});
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();

    const handleChange = (event) => {
        const id = event.target.id;

        switch (id) {
            case 'name':
                nameRef.current = event.target.value;
                // setPost(prev => ({     ...prev,     name: event.target.value, }));
                break;
            case 'email':
                emailRef.current = event.target.value;
                // setPost(prev => ({     ...prev,     email: event.target.value, }));
                break;
            case 'phone':
                phoneRef.current = event.target.value;
                // setPost(prev => ({     ...prev,     phone: event.target.value, }));
                break;
            case 'message':
                messageRef.current = event.target.value;
                // setPost(prev => ({     ...prev,     message: event.target.value, }));
                break;

            default:
                break;
        }

    };
    // console.log('form rerendered');
    return (
        <div
            className="lg:w-96 w-screen lg:mt-20 felx items-center justify-start "
            key={uuidv4()}>
            <form
                className="flex flex-col gap-2  mx-auto"
                onSubmit={e => handleSubmit(e, {
                    name: nameRef.current,
                    email: emailRef.current,
                    phone: phoneRef.current,
                    message: messageRef.current
                })}>
                <label
                    htmlFor="name"
                    className="text-xl ml-2 capitalize
            after:content-['*'] after:ml-0.5 after:text-red-500">
                    Name
                </label>
                <input
                    key={uuidv4()}
                    type="text"
                    name='name'
                    className="border-2
                border-gray-300 rounded-md p-2"
                    value={nameRef.current}
                    onChange={e => handleChange(e)}
                    id="name"
                    placeholder='John Doe'
                    required="required"/>

                <label
                    className="text-xl ml-2 capitalize
            after:content-['*'] after:ml-0.5 after:text-red-500"
                    htmlFor="email">
                    Email
                </label>
                <input
                    key={uuidv4()}
                    id="email"
                    type="email"
                    name='email'
                    className="border-2
                border-gray-300 rounded-md p-2"
                    value={emailRef.current}
                    onChange={e => handleChange(e)}
                    placeholder='example@provider.com'
                    required="required"/>

                <label className="text-xl ml-2 capitalize" htmlFor="phone">
                    Phone
                </label>
                <input
                    key={uuidv4()}
                    id="phone"
                    type="tel"
                    name='phone'
                    className="border-2
                    border-gray-300 rounded-md p-2"
                    value={phoneRef.current}
                    onChange={e => handleChange(e)}
                    placeholder='+966-555-555-12-34'
                    required="required"/>

                <label className="text-xl ml-2 capitalize" htmlFor="items">
                    Items
                </label>
                <div  key={uuidv4()}
                    className={`bg-white  h-fit border-2 solid rounded-lg p-5 ${items
                        ? ''
                        : 'w-90'}`}
                    id="items">
                    {
                        items
                            ? items.map((item) => {
                                return (
                                    <div
                                        className='flex flex-row justify-between items-center border-1 solid border rounded-lg p-2'
                                        key={uuidv4()}>
                                        <p className='w-64 text-gray-700 capitalize'>{item.name}</p>
                                        <p className="min-w-fit mr-2">Part No: {item.partNumber}</p>
                                        <button
                                            className=' w-fit cursor-pointer rounded-full '
                                            onClick={() => {
                                                decreaseQuantity()
                                                removeItem(item.partNumber || '', item.name)
                                            }}>
                                            <img src='/assets/icons/close.png' alt='delete product' className='w-4 h-4'/>
                                        </button>
                                    </div>
                                )
                            })
                            : null
                    }
                </div>

                <label className="text-xl ml-2 capitalize" htmlFor="message">
                    Message
                </label>
                <textarea
                    key={uuidv4()}
                    id="message"
                    name="message"
                    className="border-2
                border-gray-300 rounded-md p-2"
                    value={messageRef.current}
                    onChange={e => handleChange(e)}
                    placeholder='How can we help you?'
                    required="required"/>

                <button
                    className="bg-green-500
                text-white font-bold uppercase p-2
                rounded-md "
                    type="submit"
                    disabled={submitting}>
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Form