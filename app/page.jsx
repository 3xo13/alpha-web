import {QuoteBtn} from "@/components/pagesComponents/home/QuoteBtn";
import Link from 'next/link';
import Carousel from "@/components/pagesComponents/home/Carousel";
import {v4 as uuidv4} from 'uuid';
import links from "@/public/links/projectsLinks";
import partnersLinks from "@/public/links/partnersLinks";

export default async function Home() {

    return (

        <div className="w-screen" key={uuidv4()}> 

            <section key={uuidv4()} className="lg:screen ">
                <div
                    className='hero w-screen lg:h-screen h-120 bg-city-lightning bg-fixed bg-cover bg-no-repeat bg-center flex items-center justify-start mt-5 '>
                    <div
                        className="w-screen h-fit my-10 p-5 flex flex-col items-center justify-center bg-white bg-opacity-80  ">
                        <h1 className="text-7xl font-bold text-yellow-600/90 ml-10 min-w-fit">ALPHA LIMIT</h1>
                        <p className="uppercase mt-5 ml-10 drop-shadow-sm black text-2xl">trading and contractig</p>
                        
                    </div>
                    {/* <div className="w-screen h-fit flex-col-center py-16">
                <video
                    src="/assets/video/electricalBG.mp4"
                    type="video/mp4"
                    autoPlay="autoPlay"
                    loop="loop"
                    className="w-120%"
                    ></video>
                    <div className="flex-col-center absolute">
                    <h1 className="text-7xl font-bold text-yellow-600/90 ml-10 min-w-fit">ALPHA LIMIT</h1>
                    <p className="uppercase mt-5 ml-10 drop-shadow-sm black text-2xl">trading and contractig</p>

                    </div>
            </div> */}
                </div>
            </section>
            <div className="w-screen h-fit flex-col-center py-16">
                <video
                    src="/assets/video/electricalBG.mp4"
                    type="video/mp4"
                    autoPlay="autoPlay"
                    loop="loop"
                    className="w-120%"
                    ></video>
                    <img src="/assets/images/logo.png" alt="logo" className="w-54 h-40 absolute"/>
            </div>
            <section key={uuidv4()} className="about lg:screen ">
                <div
                    className='w-screen lg:h-screen h-fit bg-blue-icons-grid bg-cover bg-fixed bg-no-repeat flex items-center justify-end lg:justify-between'>
                    <div
                        className="w-screen h-fit p-5 flex flex-col items-center justify-center mt-10 bg-slate-100/80 text-center">
                        <h2
                            className="lg:text-6xl text-3xl font-bold text-center text-yellow-600/90 cinzel min-w-fit capitalize">about us</h2>
                        <p className="capitalize mt-5 w-4/5    text-black text-xl">Alpha Limit Company
                            is the distributor in the Middle East for electrical construction material &
                            supplies. We offer a wide range of electrical, industrial, instrumentation and
                            automation products from many of the world's leading manufacturers. Leveraging
                            the global strength to build a competitive advantage to our customers. Depending
                            on our active Sales team and experienced Technical support team, we fully
                            support our clients since the bidding stage and till the handover process. And
                            continue to share the success with our clients in the after-sale services</p>
                            <Link href='/about'>
                                <button className="text-lg bg-yellow-400 capitalize px-3 py-1 mt-3 rounded-lg">read more</button>
                            </Link>
                    </div>
                </div>
            </section>
            <section className="w-screen h-fit mb-10" >
                <Carousel links={links} title='our projects' bg='bg-cables-orange'/>
                <Carousel links={partnersLinks} title='our partners' bg='bg-earth-connect' />
            </section>
            <section
                key={uuidv4()}
                className="projects w-screen h-fit p-5 flex items-center justify-center mb-10 lg:mb-0">
                <QuoteBtn/>
            </section>

        </div>

    )
}
