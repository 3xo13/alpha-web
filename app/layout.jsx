import '../styles/globals.css'
import Nav from "@/components/headerFooter/Nav";
import ProductsNavigation from "@/components/navigation/ProductsNavigation";
import createTree from "@/functions/createTree";
// import Providers from "@/components/general/Providers";
import Footer from "@/components/headerFooter/Footer";
import AnouncmentBar from "@/components/headerFooter/AnouncmentBar";
import MegaMenu from '@/components/navigation/MegaMenu';

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
            <head>

                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>

            </head>
            <body className="overflow-x-hidden ">
                <div className='main'>
                    <div className='gradiant'/>
                </div>
                {/* <AnouncmentBar/> */}
                <Nav />
                <main className='app '>
                    <div className="flex flex-col items-center ">

                        {/* <ProductsNavigation TreeData={tree}/> */}
                        <MegaMenu TreeData={tree}/> 
                        {children}

                        <Footer/>
                    </div>
                </main>

            </body>

        </html>
    )
} {/* <Providers></Providers> */
}