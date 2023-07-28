'use client';
import {useState} from "react";
import links from "@/public/links/projectsLinks";
import {v4 as uuidv4} from 'uuid';
 
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
            name = e.target.parentNode.className;
        } else {
            name = e.target.className;
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
            className='group w-screen h-120 bg-cover bg-no-repeat bg-center flex justify-between my-10'>
            <div
                className="group-hover:opacity-100 opacity-0 flex-row-center cursor-pointer w-10 h-full bg-slate-100/50 ">
                <button className="left" onClick={e => handleClick(e)}><img src="/assets/icons/left-arrow.png" alt="" className="w-8 h-8"/></button>
            </div>

            <div className="w-full h-full flex items-end justify-center group-hover:opacity-100 opacity-0">
                    {ponits}
                </div>
            <div
                className="group-hover:opacity-100 opacity-0 flex-row-center cursor-pointer w-10 h-full bg-slate-100/50 ">
                <button className="right" onClick={e => handleClick(e)}><img src="/assets/icons/right-arrow.png" alt="" className="w-8 h-8"/></button>
            </div>

        </section>
    )
}

export default HeroCarousel