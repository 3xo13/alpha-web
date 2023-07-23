import {QuoteBtn} from "@/components/pagesComponents/home/QuoteBtn";
import Link from 'next/link';
import Projects from "@/components/pagesComponents/home/Projects";
import { v4 as uuidv4 } from 'uuid';

export default async function Home() {

    return (

        <div className="w-screen" key={uuidv4()}>

            <section key={uuidv4()} className="lg:screen ">
                <div
                    className='hero w-screen lg:h-120% h-120 bg-hero-pattern bg-contain bg-no-repeat bg-center flex items-start justify-start '>
                    <div className="lg:w-120 lg:h-96 flex flex-col items-start justify-center mt-10 ">
                        <h1
                            className="text-6xl font-bold text-center text-yellow-600/90 ml-10 min-w-fit">ALPHA LIMIT</h1>
                        <p className="uppercase mt-5 ml-10 drop-shadow-sm black text-2xl">trading and contractig</p>
                    </div>
                </div>
            </section>
            <section key={uuidv4()} className="about lg:screen ">
                <div
                    className='w-screen lg:h-screen h-fit bg-about-pattern bg-cover lg:bg-contain bg-no-repeat bg-right lg:bg-right flex items-center justify-end lg:justify-between'>
                    <div className="lg:w-1/2 lg:h-120% p-5 flex flex-col items-center justify-center mt-10 bg-slate-100/80 lg:bg-transparent">
                        <h1
                            className="lg:text-6xl text-3xl font-bold text-center text-yellow-600/90  min-w-fit capitalize">about us</h1>
                        <p className="capitalize mt-5 w-4/5    text-black text-xl">Alpha Limit Company is
                            the distributor in the Middle East for electrical construction material &
                            supplies. We offer a wide range of electrical, industrial, instrumentation and
                            automation products from many of the world's leading manufacturers. Leveraging
                            the global strength to build a competitive advantage to our customers. Depending
                            on our active Sales team and experienced Technical support team, we fully
                            support our clients since the bidding stage and till the handover process. And
                            continue to share the success with our clients in the after-sale services</p>
                    </div>
                </div>
            </section>
            {/* <section className="w-screen h-fit" >
                <Projects/>
            </section> */}
            <section key={uuidv4()} className="projects w-screen h-fit p-5 flex items-center justify-center mb-10 lg:mb-0">
                <QuoteBtn/>
            </section> 
            

            
        </div>

    )
}
