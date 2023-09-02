'use client';
import {v4 as uuidv4} from 'uuid';
import links from '@/public/links/pgLinks';
import { useEffect, useState } from 'react';

const ZoomOutCarousel = () => {
    const [link, setLink] = useState(links[0]) 

    useEffect(() => {
        const timer = setInterval(() => {      
                setLink(prev => {
                    // console.log(links.indexOf(prev)); 
                    let currentIndex = links.indexOf(prev)
                    if (currentIndex === links.length -1){
                        return links[0]
                    }
                    return links[currentIndex +1]
                })
            }, 8000);               // clearing interval
        return () => clearInterval(timer);
      },[]);

  return (
    <div className='screen green flex-row-start overflow-hidden slider green'>
        <div className='slider flex flex-row  flex-nowrap overflow-hidden red w-fit h-screen'>
        <div className='w-[110vw] h-screen min-w-screen flex-row-center'>
                <img src={link} className='w-[110vw] h-screen min-w-screen zoomOut object-cover' key={uuidv4()}/>

            </div>
        </div> 
    </div> 
  )
}

export default ZoomOutCarousel