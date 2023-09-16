'use client'
import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import useBasketData from '@/dataMangment/basketData';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

const Cart = ({show, set}) => {
    const router = useRouter();
    const [activeCart, setActiveCart] = useState(false);

    useEffect(() => {
        setActiveCart(show)
    }, [show])

    const {Basket, decreaseQuantity, removeItem} = useBasketData();

    const switchCart = () => setActiveCart(prev => !prev)
    // // console.log(Basket);
    const cart = Basket.map(item => {
        return (
            <div
                key={uuidv4()}
                className={`flex items-center justify-between lg:w-110 w-fit border-2 border-solid m-2 ml-5 rounded-md `}>
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 mr-3 border-4 border-solid box-border "/>
                <p className='w-64 text-gray-700 capitalize' key={uuidv4()}>{item.name}</p>
                <p key={uuidv4()}>{item.partNumber}</p>
                <p className='m-2 border p-1 border-solid box-border bg-white'>{item.quantity}</p>
                <div
                    className='flex w-fit h-14 flex-col items-end justify-evenly mr-1'
                    key={uuidv4()}>
                    <button
                        key={uuidv4()}
                        className=' w-fit hover:bg-gray-300 cursor-pointer rounded-full '
                        onClick={() => {
                            decreaseQuantity()
                            removeItem(item.partNumber || '', item.name)
                        }}>
                        <img src='/assets/icons/close.png' alt='add icon' className='w-4 h-4'/>
                    </button>

                </div>
            </div>
        )
    })

    return (
        <div key={uuidv4()}
            // cart container
            className={`lg:w-120 w-96 h-fit absolute z-50 flex justify-center bg-white/90 flex-col z-10 ${ !activeCart
                ? '-translate-x-120'
                : null} duration-500`}>
            <div key={uuidv4()} className='lg:w-120 h-30 flex justify-end '>
                <img
                    src="/assets/icons/close.png"
                    alt="close"
                    className='w-7 h-7 cursor-pointer mt-2 mb-2 mr-3'
                    onClick={() => set(false)}/>

            </div>

            {cart}

            <div className='w-full h-fit flex-center'>
                <button
                    className='lg:w-120 w-64 h-14 bg-yellow-600/90 hover:bg-yellow-600/80 flex items-center justify-center text-white text-xl font-bold capitalize rounded-lg'
                    onClick={() => {
                        set(false);
                        router.push("/quote");
                    }}>check out</button>

            </div>

        </div>
    )
}

export default Cart
