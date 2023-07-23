import getCategories from "@/functions/getCategories";
import SubSubCategoryCard from "@/components/navigation/SubSubCategoryCard";
import getOneProduct from "@/functions/getOneProduct";
import { v4 as uuidv4 } from 'uuid';

const subSubCategories = async ({params}) => {
  const {subCategories, subSubCategories} = params;
  
  const categories = await getCategories({name: subCategories, 'subCategories.name': subSubCategories, 'subSubCategories.name': {$ne: null}});
  
    const cards = await categories.map(async (category) => {
        const name = category.subSubCategories.name;
        
        const product = await getOneProduct({subSubCategory: name});
        const image = product?.images[0] || '/assets/images/logo.png' 
        return (<SubSubCategoryCard key={uuidv4()}
          categoryObject={{
              category: category.name,
              subCategory: category.subCategories.name, 
              subSubCategory: name, 
              image: image,
          }}/>)
    }); 
    
  return (
    <div key={uuidv4()} className="w-screen h-fit flex flex-row flex-wrap p-10">{cards}</div>  
  )
}

export default subSubCategories