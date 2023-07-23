import React from 'react';
import Link from 'next/link';
import IconLink from '@/components/headerFooter/IconLink';
import { v4 as uuidv4 } from 'uuid';

const Footer = () => {
    return (

        <footer className="w-screen lg:h-96 h-120 flex flex-col items-center justify-center" key={uuidv4()}>
            <div  key={uuidv4()} // this is the background image of the footer and it's outside of the footer so it doesn't get affected by the flex
                className='w-full h-96 bg-logo bg-contain opacity-40 bg-center absolute  bg-no-repeat'></div>
            <div key={uuidv4()} className='w-full h-64  flex flex-col items-center justify-center '>
                <div key={uuidv4()}
                    className="h-64  w-full flex flex-row items-center justify-between p-10">
                    <div className='ml-10 mr-10'  key={uuidv4()}>
                        <h1 className="text-4xl font-bold text-yellow-600/90">Alpha Limit</h1>
                        <p className="text-xl black">Trading and Contracting</p>
                    </div>
                    <div key={uuidv4()} className='ml-10 mr-10 flex lg:flex-row flex-col'>
                        <Link href="https://www.linkedin.com/" className='z-50'>
                            <img alt='linkedin' src={'/assets/icons/social/1.svg'} className='w-9 h-9 m-2'/>
                        </Link>
                        <Link href="https://www.instagram.com/" className='z-50'>
                            <img alt='instagram' src={'/assets/icons/social/2.svg'} className='w-9 h-9 m-2'/>
                        </Link>
                        <Link href="https://www.facebook.com/" className='z-50'>
                            <img alt='facebook' src={'/assets/icons/social/3.svg'} className='w-9 h-9 m-2'/>
                        </Link>
                    </div>
                </div>
                <div className='w-full flex flex-col lg:flex-row items-start lg:items-center justify-evenly z-20 ' key={uuidv4()}>  
                    <div key={uuidv4()} className='p-5 m-5'>
                        <IconLink // this is the phone icon
                            link={'https://wa.link/3sd9pi'}
                            image={'/assets/icons/2.svg'}
                            alt={'phone'}
                            text={'+966 11 236 4765'}/>
                        <IconLink // this is the phone icon
                            link={'https://wa.link/qcxsef'}
                            image={'/assets/icons/2.svg'}
                            alt={'phone'}
                            text={'+966 56 074 0046'}/>
                    </div>
                    <div key={uuidv4()}>
                        <IconLink // this is the address icon
                            link={"https://duckduckgo.com/?t=ffab&q=8200+Eastern+Ring+Road+%E2%80%93+Al+Ezdihar+D" +
                                    "ist.+Riyadh-Saudi+Arabia.&atb=v178-1&ia=web&iaxm=maps"}
                            image={'/assets/icons/1.svg'}
                            alt={'address'}
                            text={'Kingdom of Saudi Arabia-Riyadh-Eastern Eastern Ring Road - Al Ezdihar Dist. Ri' +
                                    'yadh-Saudi Arabia. P.O. Box: 12488 Riyadh 3891'}/>
                    </div>
                    <div key={uuidv4()} className='p-5 m-5'>
                        <IconLink // this is the email icon
                            link={'mailto:sales@alpha-limit.com'}
                            image={'/assets/icons/3.svg'}
                            alt={'email'}
                            text={'sales@alpha-limit.com'}/>
                        <IconLink // this is the email icon
                            link={'mailto:support@alpha-limit.com'}
                            image={'/assets/icons/3.svg'}
                            alt={'email'}
                            text={'support@alpha-limit.com'}/>
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default Footer