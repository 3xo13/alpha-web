'use client';
import {useState} from "react";
import links from "@/public/links/pgLinks";
import {v4 as uuidv4} from 'uuid';
import partnersLinks from "@/public/assets/images/partners/partnersLinks";

const HeroCarousel = () => {
    const [imgCount, setImgCount] = useState(0);
    const ponits = links.map((link, index) => {
        return (
            <div
                key={uuidv4()}
                className={`w-3 h-3 border-2 m-2 rounded-full ${index === imgCount
                    ? 'bg-yellow-600 border-yellow-600'
                    : ''}`}></div>
        )
    });

    // change the count and main image
    const handleClick = (e) => {
        let name;
        if (e.target.tagName.toLowerCase() === 'img') {
            name = e.target.parentNode.id;
        } else {
            name = e.target.id;
        }
        if (name === 'left' && imgCount === 0) 
            return;
        if (name === 'right' && imgCount === links.length - 1) 
            return;
        
        if (name === 'left') {
            setImgCount(prevCount => prevCount - 1)

        }
        if (name == 'right') {
            setImgCount(prevCount => prevCount + 1)

        }
    }
    return (
        <section
            style={{
                backgroundImage: `url(${links[imgCount]})`
            }}
            className='group w-screen h-[95dvh] bg-cover bg-no-repeat bg-center flex justify-between my-10 z-0'>
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

            <div className="w-full h-full flex-col-center pt-20">
                <div className="flex-col-center h-[90%]">
                    <div className="p-10 bg-black/50 backdrop-lg rounded-xl">
                        <h1 className="text-7xl cinzel uppercase text-yellow-500 font-bold text-center">alpha limit</h1>
                        <h2 className="text-3xl cinzel uppercase text-yellow-500 font-bold text-center mt-3">
                            reseler and partner of :
                        </h2>

                    </div>
                    <div className="w-full flex-center mt-5">
                        <img
                            src={`${partnersLinks[imgCount]}`}
                            alt="partner logo"
                            className="w-[60%] "/>

                    </div>
                </div>
                <div className="flex-row-center h-[10%] group-hover:opacity-100 opacity-0 ">
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

export default HeroCarousel