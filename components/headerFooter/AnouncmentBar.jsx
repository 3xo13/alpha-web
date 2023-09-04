import Link from "next/link";
import {v4 as uuidv4} from 'uuid';

const AnouncmentBar = () => {
    return (
        <div
            className='w-screen h-10 bg-black text-white flex flex-row items-center justify-evenly flex '
            key={uuidv4()}
            >
            <div key={uuidv4()}>
                <Link target="_blank" className="flex flex-row items-center " href={'https://wa.link/3sd9pi'}>
                    <img src={'/assets/icons/2.svg'} alt='phone' className="w-5 h-5"/>
                    <p className="m-2 text-sm">+966 11 236 4765</p>
                </Link>
            </div>
            <div key={uuidv4()}>
                <Link target="_blank" className="flex flex-row items-center " href={'https://wa.link/qcxsef'}>
                    <img src={'/assets/icons/2.svg'} alt='phone' className="w-5 h-5"/>
                    <p className="m-2 text-sm">+966 56 074 0046</p>
                </Link>
            </div>
            <div key={uuidv4()}>
                <Link
                    target="_blank"
                    className="flex flex-row items-center "
                    href={'mailto:support@alpha-limit.com'}>
                    <img src={'/assets/icons/3.svg'} alt='email' className="w-5 h-5"/>
                    <p className="m-2 text-sm">support@alpha-limit.com</p>
                </Link>
            </div>
            <div key={uuidv4()}>
                <Link
                    target="_blank"
                    className="flex flex-row items-center "
                    href={'mailto:sales@alpha-limit.com'}>
                    <img src={'/assets/icons/3.svg'} alt='email' className="w-5 h-5"/>
                    <p className="m-2 text-sm">sales@alpha-limit.com</p>
                </Link>
            </div>
            <div key={uuidv4()}>
                <Link
                    target="_blank"
                    className="flex flex-row items-center "
                    href={"https://duckduckgo.com/?t=ffab&q=8200+Eastern+Ring+Road+%E2%80%93+Al+Ezdihar+D" +
                            "ist.+Riyadh-Saudi+Arabia.&atb=v178-1&ia=web&iaxm=maps"}>
                    <img src={'/assets/icons/1.svg'} alt='addres icon' className="w-5 h-5"/>
                    <p className="m-2 text-sm">Saudi Arabia-Riyadh/Eastern Ring Road/Al-Ezdihar Dist.</p>
                </Link>
            </div>
            <div key={uuidv4()} className="flex flex-row items-center ">
                <Link target="_blank" href='https://www.linkedin.com/' className="m-2">
                    <img src={'/assets/icons/social/1.svg'} alt='linkedin' className="w-5 h-5"/>
                </Link>
                <Link target="_blank" href='https://www.instagram.com/' className="m-2">
                    <img src={'/assets/icons/social/2.svg'} alt='instagram' className="w-5 h-5"/>
                </Link>
                <Link target="_blank" href='https://www.facebook.com/' className="m-2">
                    <img src={'/assets/icons/social/3.svg'} alt='facebook' className="w-5 h-5"/>
                </Link>
            </div>
        </div>
    );
};

export default AnouncmentBar