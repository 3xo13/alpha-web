import Link from "next/link";
// import getOneCategory from "@/functions/getOneCategory";
import {v4 as uuidv4} from 'uuid';

const SubCategoryCard = ({categoryObject}) => {
    const cat = encodeURIComponent(categoryObject.category)
    const sub = encodeURIComponent(encodeURIComponent(categoryObject.subCategory))
    const name = categoryObject.subCategory.split('-').join(' ')
    return (
        <div className="w-64 h-fit m-4 cursor-pointer">
            <Link
                href={ `/categories/${cat}/${sub}`
                    
}>
                <img src={categoryObject.image} className="w-64 h-90 "/>
                <p className="font-bold w-full text-center text-xl black bg-white capitalize">
                    
                            {name}
                    </p>
            </Link>
        </div>
    )
}

export default SubCategoryCard