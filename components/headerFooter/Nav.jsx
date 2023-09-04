'use client';
import Link from "next/link";
import {useEffect, useState} from "react";
import Cart from "@/components/headerFooter/Cart";
import useBasketData from "/dataMangment/basketData.js";
import SearchBar from "./SearchBar";
import {v4 as uuidv4} from 'uuid';
import AnouncmentBar from "./AnouncmentBar";
import MegaMenu from "../navigation/MegaMenu";

const  Nav = () => {
    const [showMenuBtn, setShowMenu] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const {itemsQuantity} = useBasketData();
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        setQuantity(itemsQuantity)
    }, [itemsQuantity])

    const toggleMenu = () => {
        setShowMenu(!showMenuBtn)
    }

    return (
        <div className="cinzel flex-col-center w-screen absolute z-40 bg-white/80">
            <div>
                <AnouncmentBar />
            </div>
            <div className="" key={uuidv4()}>
                <Cart show={showCart} set={setShowCart}/>

                <header className=" h-[110px]">
                    <div key={uuidv4()} className="flex h-[110px] w-screen justify-between ">
                        <div className="w-1/4 h-full flex flex-row items-center justify-between">
                            {/* this is the cart btn */}
                            <button
                                onClick={() => setShowCart(!showCart)}
                                className='lg:ml-14 ml-5 mr-5 mt-8 lg:mt-3'>
                                <img
                                    src="/assets/icons/shopping-cart.png"
                                    alt="Cart Icon"
                                    className="w-8 h-8 object-contain cursor-pointer"/> {
                                    quantity > 0
                                        ? (
                                            <span
                                                className="ml-2 inline-block bg-red-600 rounded-full h-6 w-6  flex items-center justify-center font-bold leading-none text-white">
                                                {quantity}
                                            </span>
                                        )
                                        : null
                                }
                            </button>
                            <SearchBar/>
                        </div>
                        <div key={uuidv4()} className="flex flex-row items-center pl-20 w-2/4">
                            {/* this is the logo */}
                            <Link
                                href="/"
                                className="flex gap-2 flex-col lg:flex-row items-center justify-end mr-7">
                                <img
                                    className="w-56 h-24"
                                    src="/assets/images/logo_wide_noBg.png"
                                    alt="Alpha limit Logo"/>
                                {/* <p className="text-2xl lg:h-0.5 mb-7 font-bold uppercase  ">Alpha Limit</p> */}
                            </Link>
                            <img src="/assets/images/roia2030.png" alt="" className="w-18 h-16"/>
                        </div>
                        <div key={uuidv4()} className="w-1/4 h-full  flex justify-end h-[110px]">

                            <nav
                                // this is the menu on desktop screens
                                className={` flex-row-evenly mr-5 h-[110px]
                             gap-4 pr-4  
                             hidden lg:flex lg-flex`}>
                                <Link href="/" key={uuidv4()}>
                                    <p className="menu_link_text">home</p>
                                </Link>
                                <Link href="/about" key={uuidv4()}>
                                    <p className="menu_link_text">About</p>
                                </Link>
                                <Link href="/categories" key={uuidv4()}>
                                    <p className="menu_link_text">products</p>
                                </Link>
                                <Link href="/articles" key={uuidv4()}>
                                    <p className="menu_link_text">Articles</p>
                                </Link>
                                <Link href="/contact" key={uuidv4()}>
                                    <p className="menu_link_text w-max">Contact US</p>
                                </Link>

                            </nav>

                            <img
                                src="/assets/icons/menu.svg"
                                alt="open menu"
                                className={`h-8 w-8 object-contain mr-8 cursor-pointer lg:hidden ${showMenuBtn
                                    ? 'hidden'
                                    : 'flex'}`}
                                onClick={toggleMenu}/>

                            <img
                                src="/assets/icons/close.png"
                                alt="close menu"
                                className={`h-6 w-6 object-contain mr-8 cursor-pointer lg:hidden ${showMenuBtn
                                    ? 'flex'
                                    : 'hidden'}`}
                                onClick={toggleMenu}/>
                        </div>

                        <nav
                            // this is the menu on mobile and tablet screens
                            className={`absolute right-0 top-24 p-5 z-50  w-fit flex-col gap-2 
                            items-start pr-5 justify-end bg-slate-200 rounded-md mr-5 black
                            ${showMenuBtn
                                ? 'flex'
                                : 'hidden'}`} onClick={toggleMenu}>
                            <Link href="/" key={uuidv4()}>
                                <p className="text-xl font-bold uppercase after-underline">home</p>
                            </Link>
                            <Link href="/about" key={uuidv4()}>
                                <p className="text-xl font-bold uppercase after-underline ">About</p>
                            </Link>
                            <Link href="/products" key={uuidv4()}>
                                <p className="text-xl font-bold uppercase after-underline ">products</p>
                            </Link>
                            <Link href="/articles" key={uuidv4()}>
                                <p className="text-xl font-bold uppercase after-underline ">Articles</p>
                            </Link>
                            <Link href="/contact" key={uuidv4()}>
                                <p className="text-xl font-bold uppercase after-underline ">Contact</p>
                            </Link>

                        </nav>
                    </div>

                </header>

            </div>
            <div>
                
            </div>
        </div>

    )
}

export default Nav