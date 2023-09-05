import {QuoteBtn} from "@/components/pagesComponents/home/QuoteBtn";
import {v4 as uuidv4} from 'uuid';

export default function About() {
    return (
        <div className='about-page-wrapper mt-32' key={uuidv4()}>
            <section className="w-screen lg:h-[80dvh] h-fit flex flex-col lg:flex-row items-center justify-center mt-5">
                <div className="lg:w-1/2 lg:h-full w-full h-fit flex-col-center">
                    <h1 className="lg:text-4xl text-3xl capitalize title">about the company</h1>
                    <p
                        className='black lg:text-xl lg:text-justify text-center lg-text-left p-5 lg:pt-10 
                        lg:relative  lg:ml-14'>Alpha
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
                <div className="lg:w-1/2 w-full h-full flex-center lg:py-20 lg:px-32">
                    <img
                        src="/assets/images/about/photos/containers.jpg"
                        alt="about us section image"
                        className="w-full h-full "/>
                </div>
            </section>
            <section className="w-screen lg:h-[50dvh] h-fit flex flex-col-reverse lg:flex-row items-center justify-center my-10">
                <div className="lg:w-1/2 w-full h-full lg:px-24 lg:py-10 mt-10 lg:mt-0">
                    <img
                        src="/assets/images/about/photos/construction.jpg"
                        alt="construction site image"
                        className="w-full h-full "/>
                </div>
                <div className="lg:w-1/2 w-full h-full flex-col-center px-10">
                    <h2 className='capitalize lg:text-4xl text-3xl  title'>our mission</h2>
                    <p className='lg:text-xl mt-5 text-justify'>
                        Being the preferred Choice of the Regional Supplier in our targeted markets, by
                        building a strong relationship with our customers and suppliers. We create
                        superior value for our stakeholders by working as a team to efficiently buy,
                        sell and deliver our products to the Construction and Industrial markets.
                    </p>
                </div>
            </section>
            <section className="w-screen lg:h-[80dvh] h-fit flex flex-col lg:flex-row items-center justify-center mt-5">
                <div className="lg:w-1/2 w-full h-full flex-col-center  lg:px-24 lg:py-10 ">
                    <h2 className='lg:text-4xl text-3xl  capitalize title'>our vision</h2>
                    <p className='lg:text-xl lg:mt-5 lg:text-justify p-5 lg:p-0 text-center lg:text-left'>
                        Be a league top player distribution
                        company of Electrical, Industrial, Instrumentation, and Automation products &
                        solutions, to the Construction and industrial markets in GCC.</p>
                </div>
                <div className="lg:w-1/2 w-full h-full flex-center lg:py-20 lg:px-10 mt-5 lg:mt-0">
                    <img
                        src="/assets/images/about/photos/sky-scrapers.jpg"
                        alt="sunrise and binacular image"
                        className="w-full h-full"/>
                </div>
            </section>
            <section
                className="projects w-screen h-fit p-10 my-20 capitalize flex-col-between gap-8">
                <h4 className="title text-3xl ">
                    Get your Quote now
                </h4>
                <QuoteBtn/>
            </section>

            </div>
    )
}
