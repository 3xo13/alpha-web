import Link from "next/link";
// import getOneCategory from "@/functions/getOneCategory";
import {v4 as uuidv4} from 'uuid';

const SubCategoryCard = ({categoryObject}) => {
    const cat = encodeURIComponent(categoryObject.category)
    console.log("🚀 ~ file: SubCategoryCard.jsx:7 ~ SubCategoryCard ~ cat:", cat)
    const sub = encodeURIComponent(encodeURIComponent(categoryObject.subCategory))
    const name = categoryObject
        .subCategory
        .split('-')
        .join(' ')
        // these 2 categories does not contain a subSub-category
        if(cat == 'UPS-(Uninterruptable-Power-Supply)' || cat == 'Cloud-Infrastructure'){
            return (
                <div className="w-64 h-fit m-4 cursor-pointer">
                    <Link href={`/category/${cat}/${sub}`}>
                        <img src={categoryObject.image} className="w-64 h-90 "/>
                        <p className="font-bold w-full text-center text-xl black bg-white capitalize">
        
                            {name}
                        </p>
                    </Link>
                </div>
            )
        }else{
            return (
                <div className="w-64 h-fit m-4 cursor-pointer">
                    <Link href={`/categories/${cat}/${sub}`}>
                        <img src={categoryObject.image} className="w-64 h-90 "/>
                        <p className="font-bold w-full text-center text-xl black bg-white capitalize">
        
                            {name}
                        </p>
                    </Link>
                </div>
            )

        }

}

export default SubCategoryCard