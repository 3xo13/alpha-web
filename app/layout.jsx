import '../styles/globals.css'
import Nav from "@/components/headerFooter/Nav";
import ProductsNavigation from "@/components/navigation/ProductsNavigation";
import createTree from "@/functions/createTree";
// import Providers from "@/components/general/Providers";
import Footer from "@/components/headerFooter/Footer";
import AnouncmentBar from "@/components/headerFooter/AnouncmentBar";


export const metadata = {
    title: 'ALPHA LIMIT',
    description: 'ALPHA LIMIT Trading and Contracting Company',
    keywords: 'ALPHA LIMIT, Trading, Contracting, Company,supplier,lightning,electrical,elect' +
            'ronic,industrial,construction,materials,tools,hardware,wholesale,retail,import' +
            ',export, saudi arabia, jeddah, riyadh, dammam, khobar, jubail, makkah, madinah' +
            ', lighting protection, lightning protection, lightning protection system, ligh' +
            'tning'
}

export default async function RootLayout({children}) {

    const tree = await createTree();

    return (
        <html lang="en">
            <body className="overflow-x-hidden">
            <div className='main'>
                <div className='gradiant'/>
            </div> 
                <AnouncmentBar/>
            <Nav/>
                <main className='app '>
                    <div className="flex flex-col items-center ">
                        
                        <ProductsNavigation TreeData={tree}/>
                        
                            {children}
                        
                        <Footer/>
                    </div>
                </main>

            </body>

        </html>
    )
}
{/* <Providers></Providers> */}