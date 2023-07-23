import getCategories from "@/functions/getCategories";
import SubCategoryCard from "@/components/navigation/SubCategoryCard";
import getOneProduct from "@/functions/getOneProduct";
import { v4 as uuidv4 } from 'uuid';

const subCategories = async ({params}) => {
  const {subCategories} = params;

  const categories = await getCategories({'subCategories.parent': subCategories, 'subSubCategories.name': null});

    const cards = await categories.map(async (category) => {
        const name = category.subCategories.name;
        const product = await getOneProduct({subCategory: name});
        const image = product.images[0]
        return (<SubCategoryCard key={uuidv4()}
            categoryObject={{
                category: category.name,
                subCategory: name,
                image: image
            }}/>)
    });  
  return (
    <div key={uuidv4()} className="w-screen h-fit flex flex-row flex-wrap p-10">{cards}</div>  
  )
}

export default subCategories