import {QuoteBtn} from "@/components/pagesComponents/home/QuoteBtn";
import Link from 'next/link';
import Carousel from "@/components/pagesComponents/home/Carousel";
import {v4 as uuidv4} from 'uuid';
import projectsLinks from "@/public/links/projectsLinks";
import partnersLinks from "@/public/links/partnersLinks";
import HeroCarousel from "@/components/pagesComponents/home/HeroCarousel";
import CategoryCarousel from "@/components/pagesComponents/home/CategoryCarousel";
import ZoomOutCarousel from "@/components/pagesComponents/home/ZoomOutCarousel";
import TiltedCards from "@/components/pagesComponents/home/TiltedCards";

export default async function Home() {

    return (

        <div className="w-screen title h-fit">
            {/* hero section */}
            <section className="screen mb-14 ">
                <ZoomOutCarousel/>
            </section>
            {/* categories cards section */}
            <section className="w-screen lg:h-90 h-fit flex-center">
                <TiltedCards/>
            </section>
            {/* about section */}
            <section className="about lg:screen ">
                <div
                    className='w-screen lg:h-screen h-fit bg-riadh-day bg-cover bg-fixed bg-no-repeat
                     flex items-center justify-end lg:justify-between'>
                    <div
                        className="w-full h-full p-5 flex-col-evenly
                        bg-black/50 text-center">
                        <div className="w-[80vw] h-fit mt-5">
                            <h2
                                className="lg:text-6xl text-3xl font-bold text-center text-white
                                    min-w-max capitalize title before-after flex-row-center
                                    before:border-white after:border-white">
                                about us
                            </h2>

                        </div>
                        <p
                            className="capitalize mt-5 my-5 lg:w-4/5 lg:max-w-[60%] w-full  leading-9 
                            text-white text-lg lg:text-2xl lg:text-justify ">Alpha
                            Limit Company is the distributor in the Middle East for electrical construction
                            material & supplies. We offer a wide range of electrical, industrial,
                            instrumentation and automation products from many of the world's leading
                            manufacturers. Leveraging the global strength to build a competitive advantage
                            to our customers. Depending on our active Sales team and experienced Technical
                            support team, we fully support our clients since the bidding stage and till the
                            handover process. And continue to share the success with our clients in the
                            after-sale services</p>
                        <Link href='/about'>
                            <button className="text-lg bg-yellow-400 capitalize px-3 py-1 mt-3 rounded-lg title mb-5">read more</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section
                className="w-screen h-fit mb-10 bg-blueprint bg-cover bg-no-repeat bg-top bg-fixed">
                <div className="w-full h-full bg-black/40 p-5">
                    <Carousel links={projectsLinks} title='Reference Projects'/>
                </div>

            </section>
            <section className="w-screen h-fit mb-10 ">
                <Carousel links={partnersLinks} title='Trusted by'/>
            </section>
            <section
                className="projects w-screen h-fit p-10 m-y-14 mb-20 capitalize flex-col-between gap-5">
                <h4 className="title text-3xl ">
                    Get your Quote now
                </h4>
                <QuoteBtn/>
            </section>

        </div>

    )
}
