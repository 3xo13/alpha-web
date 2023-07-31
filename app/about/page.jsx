import {QuoteBtn} from "@/components/pagesComponents/home/QuoteBtn";
import {v4 as uuidv4} from 'uuid';

export default function About() {
    return (
        <div className='about-page-wrapper' key={uuidv4()}>
            <section className="w-screen h-[80dvh] flex-row-center mt-5">
                <div className="w-1/2 h-full flex-col-center">
                    <h1 className="text-4xl capitalize cinzel">who we are</h1>
                    <p
                        className='black lg:text-xl text-justify pl-20 lg:pl-10 pt-0 lg:pt-10 relative lg:static bottom-10 ml-14'>Alpha
                        Limit Company is the distributor in the Middle East for electrical construction
                        material & supplies. We offer a wide range of electrical, industrial,
                        instrumentation and automation products from many of the world's leading
                        manufacturers. Leveraging the global strength to build a competitive advantage
                        to our customers. Depending on our active Sales team and experienced Technical
                        support team, we fully support our clients since the bidding stage and till the
                        handover process. And continue to share the success with our clients in the
                        after-sale services At Alpha we continue to represent internationally well-known
                        brands, many since the early days of our establishment. We have developed an
                        ongoing program, which aims to expand our brand portfolio and products range,
                        innovative and competitive solution.
                    </p>
                </div>
                <div className="w-1/2 h-full flex-center py-20 px-32">
                    <img
                        src="/assets/images/about/photos/containers.jpg"
                        alt="about us section image"
                        className="w-full h-full "/>
                </div>
            </section>
            <section className="w-screen h-[50dvh] flex-row-center my-10">
                <div className="w-1/2 h-full px-24 py-10">
                    <img
                        src="/assets/images/about/photos/construction.jpg"
                        alt="construction site image"
                        className="w-full h-full "/>
                </div>
                <div className="w-1/2 h-full flex-col-center px-10">
                    <h2 className='capitalize text-4xl cinzel'>our mission</h2>
                    <p className='lg:text-xl mt-5 text-justify'>
                        Being the preferred Choice of the Regional Supplier in our targeted markets, by
                        building a strong relationship with our customers and suppliers. We create
                        superior value for our stakeholders by working as a team to efficiently buy,
                        sell and deliver our products to the Construction and Industrial markets.
                    </p>
                </div>
            </section>
            <section className="w-screen h-[80dvh] flex-row-center mt-5">
                <div className="w-1/2 h-full flex-col-center  px-24 py-10">
                    <h2 className='text-4xl capitalize cinzel'>our vision</h2>
                    <p className='lg:text-xl mt-5 text-justify '>Be a league top player distribution
                        company of Electrical, Industrial, Instrumentation, and Automation products &
                        solutions, to the Construction and industrial markets in GCC.</p>
                </div>
                <div className="w-1/2 h-full flex-center py-20 px-10">
                    <img
                        src="/assets/images/about/photos/sky-scrapers.jpg"
                        alt="sunrise and binacular image"
                        className="w-full h-full"/>
                </div>
            </section>
            <section className="w-screen flex-center m-10">
                <QuoteBtn/>
            </section>
            {/* <section className='bg-about-header screen bg-contain lg:bg-right bg-no-repeat flex items-center justify-start'>
                <div className='lg:w-1/2 screen flex-col-center lg:pl-20 '>
                    <h1 className='lg:text-5xl text-4xl font-bold text-yellow w-full lg:pl-10 bottom-44 left-16 relative lg:static'>About Us</h1>
                    <p className='black lg:text-xl  pl-20 lg:pl-10 pt-0 lg:pt-10 relative lg:static bottom-10'>Alpha Limit Company is the distributor in the Middle
                        East for electrical construction material & supplies. We offer a wide range of
                        electrical, industrial, instrumentation and automation products from many of the
                        world's leading manufacturers. Leveraging the global strength to build a
                        competitive advantage to our customers. Depending on our active Sales team and
                        experienced Technical support team, we fully support our clients since the
                        bidding stage and till the handover process. And continue to share the success
                        with our clients in the after-sale services At Alpha we continue to represent
                        internationally well-known brands, many since the early days of our
                        establishment. We have developed an ongoing program, which aims to expand our
                        brand portfolio and products range, innovative and competitive solution.</p>
                </div>
            </section>
            <section key={uuidv4()} className='lg:bg-our-mission lg:h-screen w-full h-50% bg-right lg:bg-center bg-contain  bg-no-repeat flex justify-center'>
                <div className='lg:w-1/2 w-full h-fit lg:h-full flex-col-center relative lg:left-44 pt-10 '>
                    <img src='/assets/images/about/3-3.svg' alt="mission" className="w-2/3 h-120 z-0 lg:hidden absolute opacity-20"/>
                    <h2 className='capitalize text-4xl font-bold text-yellow w-2/3 m-5 z-10 text-center lg:text-start'>our mission</h2>
                    <p className='w-2/3 text-xl black z-10'>
                    Being the preferred Choice of the Regional Supplier in our targeted markets, by building a strong relationship with our customers and suppliers. We create superior value for our stakeholders by working as a team to efficiently buy, sell and deliver our products to the Construction and Industrial markets.
                    </p>
                </div>
            </section>
            <section key={uuidv4()} className='bg-our-vision lg:screen w-screen h-70% bg-contain bg-right bg-no-repeat flex items-center justify-start'>
            <div className='lg:w-1/2 w-full h-full lg:h-fit lg:flex-col-center pl-20 flex-col-between'>
                    <h2 className='text-5xl font-bold text-yellow w-full pl-10 capitalize mt-36'>our vision</h2>
                    <p className='black  p-10 lg:static  text-xl relative top-10'>Be a league top player distribution company of Electrical, Industrial, Instrumentation, and Automation products & solutions, to the Construction and industrial markets in GCC.</p>
                </div>
            </section>
            <section key={uuidv4()} className="w-screen flex-center m-10">
                <QuoteBtn />
            </section> */
            }
            </div>
    )
}
