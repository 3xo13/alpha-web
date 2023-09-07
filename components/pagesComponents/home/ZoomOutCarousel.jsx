'use client';
import {v4 as uuidv4} from 'uuid';
import links from '@/public/links/pgLinks';
import {use, useEffect, useState} from 'react';

const flyerLinks = ['/assets/images/backgrounds/flyers/4.svg',
 '/assets/images/backgrounds/flyers/5.svg',
  '/assets/images/backgrounds/flyers/6.svg']
 
const ZoomOutCarousel = () => {
    const [link, setLink] = useState({bglink: links[0], flyerLink: flyerLinks[0]})

    useEffect(() => {
        const timer = setInterval(() => {
            setLink(prev => {
                const bg = prev.bglink
                console.log(links.indexOf(bg));
                console.log(links[links.indexOf(bg)]);
                let currentIndex = links.indexOf(bg)
                if (currentIndex === links.length - 1) {
                    return {bglink: links[0], flyerLink: flyerLinks[0]}
                }
                return {
                    bglink: links[currentIndex + 1],
                    flyerLink: flyerLinks[currentIndex + 1]
                }
            })

        }, 8000); // clearing interval
        return() => clearInterval(timer);
    }, []);

    return (
        <div className='screen flex-row-center overflow-hidden slider'>
            <div
                className='slider flex flex-row  flex-nowrap overflow-hidden red w-fit h-screen'>
                <div className='w-[110vw] h-screen min-w-screen flex-row-center'>
                    <img
                        src={link.bglink}
                        className='w-[110vw] h-screen min-w-screen zoomOut object-cover'
                        key={uuidv4()}/>

                </div>
                <div
                    className='bg-white/50 w-screen h-screen absolute flex items-center justify-center '>
                    <img src={link.flyerLink} alt="kingsmill flyer" className='w-full h-full'/>
                </div>
            </div>
        </div>
    )
}

export default ZoomOutCarousel