'use client'
import {Tilt} from "react-tilt";
import categorriesObjects from "@/public/links/categoriesCarouselObjects";
import Link from "next/link";
import {v4 as uuidv4} from 'uuid';

const TiltedCards = () => {
    const cards = categorriesObjects.map((obj) => {
        
        return (
            <div key={uuidv4()} className="w-64 cursor-pointer lg:m-0 m-5">
                <Link href={obj.pageLink}>
                    <Tilt className='xs:w-[250px] w-full'>
                        <div
                            className='w-full p-[1px] rounded-[20px] bg-cover bg-center bg-no-repeat drop-shadow-lg'
                            style={{
                                backgroundImage: `url(${obj.image})`
                            }}>
                            <div
                                className='bg-tertiary bg-black/50  rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                                {/* <img src={obj.image} alt={obj.title} className='h-16 w-16 object-contain' /> */}
                                <h3 className='text-center text-white text-xl font-bold title capitalize'>{obj.title}</h3>
                            </div>
                        </div>
                    </Tilt>
                </Link>
            </div>
        )
    })
    return (
        <div key={uuidv4()} className="w-screen lg:h-[80dvh] h-fit flex-col-center">
            <div className="lg:w-[80dvw] h-1/3">
                <h2
                    className="lg:text-6xl text-3xl font-bold text-center text-black
                                    min-w-max capitalize title before-after flex-row-center
                                    before:border-black after:border-black">
                    check out our products
                </h2>
            </div>
            <div className=" lg:flex-row flex-col flex items-center justify-center gap-5 lg:p-0 py-10">{cards}</div>

        </div>
    )
}

export default TiltedCards