import Link from "next/link"
import { v4 as uuidv4 } from 'uuid'; 

const SubSubCategoryCard = ({categoryObject}) => {
    
    return (
        <div  key={uuidv4()} className="w-64 h-fit m-4 cursor-pointer">
            <Link href={`category/${categoryObject.category}/${categoryObject.subCategory}/${categoryObject.subSubCategory}`}>
                <img src={categoryObject.image} className="w-64 h-90 "/>
                <p className="font-bold w-full text-center text-xl black bg-white capitalize">{
                        categoryObject
                            .subSubCategory
                            .split('-')
                            .join(' ')
                    }</p>
            </Link>
        </div>
    )
}

export default SubSubCategoryCard