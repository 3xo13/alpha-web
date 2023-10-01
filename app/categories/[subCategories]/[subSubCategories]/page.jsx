import getCategories from "@/functions/getCategories";
import SubSubCategoryCard from "@/components/navigation/SubSubCategoryCard";
import getOneProduct from "@/functions/getOneProduct";
import { v4 as uuidv4 } from 'uuid';

const subSubCategories = async ({params}) => {
  // // console.log(params);
  const {subCategories, subSubCategories} = params;
  const decodedSubSub = decodeURIComponent(decodeURIComponent(subSubCategories))
  // // console.log(decodedSubSub);
  let cards;
  try {
    const categories = await getCategories({name: subCategories, 'subCategories.name': decodedSubSub, 'subSubCategories.name': {$ne: null}});
    
      cards = await categories?.map(async (category) => {
          const name = category.subSubCategories.name;
          const encodedName = encodeURIComponent(name)
          const product = await getOneProduct({subSubCategory: name});
          // // console.log(product.name); 
          const image = product?.images[0] || '/assets/images/logo.png' 
          return (<SubSubCategoryCard key={uuidv4()}
            categoryObject={{
                category: category.name,
                subCategory: category.subCategories.name, 
                subSubCategory: encodedName, 
                image: image,
            }}/>)
      }); 
    
  } catch (error) {
    // console.log(error);
    cards = <p>{error}</p>
  }
    
  return (
    <div key={uuidv4()} className="w-screen h-fit flex flex-row flex-wrap p-10 pt-36">{cards}</div>  
  )
}

export default subSubCategories