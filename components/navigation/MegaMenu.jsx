import {v4 as uuidv4} from 'uuid';
import ClickableCategory from "@/components/navigation/ClickableCategory";
import Link from 'next/link';

const MegaMenu = ({TreeData}) => {

    const menu = TreeData.map(category => {
        const cat = encodeURIComponent(category.name)

        return (
            <div key={uuidv4()} className='cinzel text-xl'>
                <Link
                    href={`/categories/${cat}`}
                    key={uuidv4()}
                    className='hover:bg-blue-100 mb-5'>
                    <h3 key={uuidv4()} className="flex capitalize font-bold mb-3">{
                            category
                                .name
                                .split('-')
                                .join(' ')
                        }</h3>
                </Link>
                {
                    category
                        .subCategories
                        .map(sub => {
                            const encodedSub = encodeURIComponent(encodeURIComponent(sub.name))
                            return (
                                <Link key={uuidv4()} href={`/category/${cat}/${encodedSub}`}>
                                    <div className="flex flex-row w-full items-center" key={uuidv4()}>
                                        <h4 className=" capitalize text-lg">
                                            {
                                                sub
                                                    .name
                                                    .split('-')
                                                    .join(' ')
                                            }
                                        </h4>

                                    </div>
                                </Link>
                            )
                        })
                }
            </div>
        )
    })

    return (
        <div
            className='group w-screen h-fit flex-col items-center justify-center absolute top-[150px] z-50  lg:block hidden'>
            <div className='w-full h-fit flex-center'>
                <img
                    src="/assets/icons/down-arrow.png"
                    alt=""
                    style={{
                        animationIterationCount: 3
                    }}
                    className='w-5 group-hover:hidden animate-ping '/>

            </div>

            <div
                className='w-screen h-fit flex flex-row items-start justify-evenly flex-no-wrap hidden group-hover:flex bg-white/80 p-5 pt-0'>
                {menu}
            </div>
        </div>
    )
}

export default MegaMenu