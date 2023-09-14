import Link from "next/link"
import { v4 as uuidv4 } from 'uuid'; 

const SubSubCategoryCard = ({categoryObject}) => {
    const {category, subCategory, subSubCategory, image} = categoryObject
    const encodedCat = encodeURIComponent(category)
    const encodedSub = encodeURIComponent(encodeURIComponent(subCategory))
    const encodedSubSub = encodeURIComponent(subSubCategory)
    const decodedSubSub = decodeURIComponent(subSubCategory)
    // console.log(encodedSubSub);
    return (
        <div key={uuidv4()} className="w-64 h-fit m-4 cursor-pointer">
            <Link href={`/category/${encodedCat}/${encodedSub}/${encodedSubSub}`}>
                <img src={image} className="w-64 h-90 "/>
                <p className="font-bold w-full text-center text-xl black bg-white capitalize">{
                        decodedSubSub
                            .split('-')
                            .join(' ')
                    }</p>
            </Link>
        </div>
    )
}

export default SubSubCategoryCard