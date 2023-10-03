import {v4 as uuidv4} from 'uuid';
import ClickableCategory from "@/components/navigation/ClickableCategory";
import Link from 'next/link';
import MegaMenuCategory from './MegaMenuCategory';

const MegaMenu = ({TreeData}) => {

    
    const categories = TreeData.map(category => ({name: category.name, subCategories: category.subCategories}))
    
    const menu = categories.map(category => <MegaMenuCategory category={{name: category.name, subCategories: category.subCategories}} />)
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