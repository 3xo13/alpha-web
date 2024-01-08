'use client';
import {v4 as uuidv4} from 'uuid';
import links from '@/public/links/pgLinks';
import {use, useEffect, useState} from 'react';


const flyerLinks = ['/assets/images/backgrounds/flyers/4.png', '/assets/images/backgrounds/flyers/5.png', '/assets/images/backgrounds/flyers/6.png']

const mobileFlyerLinks = ['/assets/images/backgrounds/flyers/kingsmill_mobile-flyer.png', '/assets/images/backgrounds/flyers/apc_mobile-flyer.png', '/assets/images/backgrounds/flyers/optima_mobile-flyer.png']

const ZoomOutCarousel = () => {
    const [link, setLink] = useState(
        {bglink: links[0], flyerLink: flyerLinks[0], mobileFlyerLink: mobileFlyerLinks[0]}
    );
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setLink(prev => {
                const bg = prev.bglink
                let currentIndex = links.indexOf(bg)
                if (currentIndex === links.length - 1) {
                    return {bglink: links[0], flyerLink: flyerLinks[0], mobileFlyerLink: mobileFlyerLinks[0]}
                }
                return {
                    bglink: links[currentIndex + 1],
                    flyerLink: flyerLinks[currentIndex + 1],
                    mobileFlyerLink: mobileFlyerLinks[currentIndex + 1]
                }
            })

        }, 8000); // clearing interval
        return() => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust this threshold as needed
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return() => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div key={uuidv4()} className='screen flex-row-center overflow-hidden slider'>
            <div
                className='slider flex flex-row  flex-nowrap overflow-hidden red w-fit h-screen'>
                <div className='w-[110vw] h-screen min-w-screen flex-row-center'>
                    <img
                        alt='flyer image for existing products'
                        src={link.bglink}
                        className='w-[110vw] h-screen min-w-screen zoomOut object-cover'
                        key={uuidv4()}/>

                </div>
                {
                    isMobile
                        ? <div
                                className='bg-white/70 w-[100dvw] h-[100dvh] absolute flex items-center justify-center'>
                                <div
                                    className={` w-full h-full bg-contain bg-center bg-no-repeat`}
                                    style={{
                                        backgroundImage: `url(${link.mobileFlyerLink})`
                                    }}></div>
                            </div>
                        : <div
                                className='bg-white/70 w-[100dvw] h-[100dvh] absolute flex items-center justify-center '>
                                <div
                                    className={` w-full h-full bg-contain bg-center bg-no-repeat`}
                                    style={{
                                        backgroundImage: `url(${link.flyerLink})`
                                    }}></div>
                            </div>
                }
            </div>
        </div>
    )
}

export default ZoomOutCarousel