import Link from "next/link";
import getOneCategory from "@/functions/getOneCategory";
import {v4 as uuidv4} from 'uuid';

const SubCategoryCard = async ({categoryObject}) => {
    const subSub = await getOneCategory({
        name: decodeURIComponent(categoryObject.category),
        'subSubCategories.name': {
            $ne: null
        }
    });
    const encodedCat = encodeURIComponent(categoryObject.category)
    const decodedSub = decodeURIComponent(categoryObject.subCategory)
    const encodedSub = encodeURIComponent(categoryObject.subCategory)
    // console.log(encodedSub); console.log(decodedSub);
    return (
        <div key={uuidv4()} className="w-64 h-fit m-4 cursor-pointer">
            <Link
                href={!subSub
                    ? `/category/${encodedCat}/${encodedSub}`
                    : `/categories/${encodedCat}/${encodedSub}`
}>
                <img src={categoryObject.image} className="w-64 h-90 "/>
                <p className="font-bold w-full text-center text-xl black bg-white capitalize">{
                        decodedSub
                            .split('-')
                            .join(' ')
                    }</p>
            </Link>
        </div>
    )
}

export default SubCategoryCard