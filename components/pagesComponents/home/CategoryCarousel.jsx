'use client';
import {useState} from "react";
import categorriesObjects from "@/public/links/categoriesCarouselObjects";
import {v4 as uuidv4} from 'uuid';
import Link from "next/link";

const CategoryCarousel = () => {
    const [count, setCount] = useState(0)
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
            name = e.target.parentNode.className;
        } else {
            name = e.target.className;
        }

        if (name === 'left' && count === 0) 
            return;
        if (name === 'right' && count === objectsArray.length - 1) 
            return;
        if (name === 'left') {
            setCount(prevCount => prevCount - 1)

        } else {
            setCount(prevCount => prevCount + 1)

        }
        console.log("handleClick ~ name:", name, 'count', count)

    }
    console.log('count', count);
    return (
        <section
            style={{
                backgroundImage: `url(${categorriesObjects[count].image})`
            }}
            className='group w-screen h-120 bg-cover bg-no-repeat bg-center flex justify-between'>
            <div
                className="group-hover:opacity-100 opacity-0 flex-row-center cursor-pointer w-10 h-full bg-slate-100/50 ">
                <button className="left" onClick={e => handleClick(e)}><img src="/assets/icons/left-arrow.png" alt="" className="w-8 h-8"/></button>
            </div>
            <div className="w-90% h-full flex flex-col items-center justify-between">
                <div className="w-full h-full flex-center">
                    <div className="w-fit h-max my-10 bg-slate-100/80 rounded-xl flex-col-evenly">
                        <h4 className="my-5 mx-10 cinzel text-3xl capitalize">{categorriesObjects[count].title}</h4>
                        <p className="my-5 mx-10 cinzel text-2xl capitalize">{categorriesObjects[count].text}</p>
                        <div>
                            <Link href={categorriesObjects[count].pageLink}>
                                <button className="bg-yellow-500 hover:bg-yellow-600 rounded-lg m-3 p-2 text-xl capitalize cinzel ">{categorriesObjects[count].title}</button>
                            </Link>
                            <Link href={categorriesObjects[count].formLink}>
                                <button className="bg-yellow-500 hover:bg-yellow-600 rounded-lg m-3 p-2 text-xl capitalize cinzel ">contact us</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full h-10 flex-row-center group-hover:opacity-100 opacity-0">
                    {ponits}
                </div>
            </div>
            <div
                className="group-hover:opacity-100 opacity-0 flex-row-center cursor-pointer w-10 h-full bg-slate-100/50 ">
                <button className="right" onClick={e => handleClick(e)}><img src="/assets/icons/right-arrow.png" alt="" className="w-8 h-8"/></button>
            </div>

        </section>
    )
}

export default CategoryCarousel