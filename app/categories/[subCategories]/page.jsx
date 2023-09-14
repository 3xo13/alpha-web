import getCategories from "@/functions/getCategories";
import SubCategoryCard from "@/components/navigation/SubCategoryCard";
import getOneProduct from "@/functions/getOneProduct";
import { v4 as uuidv4 } from 'uuid';

const subCategories = async ({params}) => {
  const {subCategories} = params;
  let cards;
  try {
    const categories = await getCategories({'subCategories.parent': subCategories, 'subSubCategories.name': null});
    console.log(categories);
  
      cards = await categories?.map(async (category) => {
          const name = category.subCategories.name;
          const encodedName = encodeURIComponent(name)
          console.log('subname:', name);
          const product = await getOneProduct({subCategory: name});
          console.log(product.name);
          const image = product?.images[0] || '/assets/images/logo.png'
          return (<SubCategoryCard
              categoryObject={{
                  category: category.name,
                  subCategory: encodedName,
                  image: image
              }}/>)
      });  
    
  } catch (error) {
    console.log(error);
    cards = <p>{error}</p>
  }
  return (
    <div key={uuidv4()} className="w-screen h-fit flex flex-row flex-wrap p-10 pt-36">{cards}</div>  
  )
}

export default subCategories