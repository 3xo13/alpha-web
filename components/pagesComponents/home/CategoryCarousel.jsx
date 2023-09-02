'use client';
import {useState} from "react";
import categorriesObjects from "@/public/links/categoriesCarouselObjects";
import {v4 as uuidv4} from 'uuid';
import Link from "next/link";

const CategoryCarousel = () => {
    const [count, setCount] = useState(0)
    const [objectsArray, setObjectsArray] = useState()
    const ponits = categorriesObjects.map((link, index) => {
        return (
            <div
                key={uuidv4()}
                className={`w-3 h-3 border-2 m-2 rounded-full ${index === count
                    ? 'bg-yellow-600 border-yellow-600'
                    : ''}`}></div>
        )
    });

    const handleClick = (e) => {
        let name;
        if (e.target.tagName.toLowerCase() === 'img') {
            name = e.target.parentNode.id;
        } else {
            name = e.target.id;
        };

        if (name === 'left' && count === 0) 
            return;
        if (name === 'right' && count === categorriesObjects.length - 1) 
            return;
        if (name === 'left') {
            setCount(prevCount => prevCount - 1)

        } else {
            setCount(prevCount => prevCount + 1)

        };
    };

    return (
        <section
            style={{
                backgroundImage: `url(${categorriesObjects[count].image})` 
            }}
            className='group w-screen h-90% bg-cover bg-no-repeat bg-center flex justify-between'>
            <div className="flex-row-center w-14 h-full">
                <button
                    id="left"
                    className="left cursor-pointer group-hover:opacity-100  
                    opacity-0 bg-black/50 backdrop-lg h-[65px] rounded-xl 
                    ml-5 flex-center"
                    onClick={e => handleClick(e)}><img src="/assets/icons/arrows/left_white.svg" 
                    alt="left arrow" className="w-8 h-8"/>
                </button>
            </div>
            <div className="w-90% h-full flex flex-col items-center justify-between">
                <div className="w-full h-full flex-center">
                    <div className="w-fit h-max my-10 bg-black/50 backdrop-lg rounded-xl flex-col-evenly p-10">
                        <h4 className="my-5 mx-10 title text-4xl capitalize text-white font-bold text-center">{categorriesObjects[count].title}</h4>
                        <p className="my-5 mx-10 cinzel text-2xl  text-white font-bold text-center">{categorriesObjects[count].text}</p>
                        <div>
                            <Link href={categorriesObjects[count].pageLink}>
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-600 rounded-lg m-3 p-2 text-xl capitalize cinzel ">
                                        {/* {categorriesObjects[count].title} */}
                                        display products
                                    </button>
                            </Link>
                            <Link href={categorriesObjects[count].formLink}>
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-600 rounded-lg m-3 p-2 text-xl capitalize cinzel ">contact us</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full h-10 flex-row-center group-hover:opacity-100 opacity-0">
                    {ponits}
                </div>
            </div>
            <div className="flex-row-center w-14 h-full">
                <button
                    id="right"
                    className="right cursor-pointer
                    group-hover:opacity-100  opacity-0
                    h-[65px] rounded-xl mr-5 bg-black/50 backdrop-lg "
                    onClick={e => handleClick(e)}>
                    <img src="/assets/icons/arrows/right_white.svg" alt="right arrow" className="w-8 h-8"/>
                </button>
            </div>

        </section>
    )
}

export default CategoryCarousel