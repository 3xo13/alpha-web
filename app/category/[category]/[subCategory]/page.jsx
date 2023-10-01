import ProductCard from "@/components/navigation/ProductCard";
import getProducts from "@/functions/getProducts";
import { v4 as uuidv4 } from 'uuid';

async function subCategoriesProducts({params}) {
    let productCards = [];
  const { category, subCategory} = params;
  const decodedCat = decodeURIComponent(category) 
  const decodedSub = decodeURIComponent(decodeURIComponent(subCategory))
  // // console.log(decodedSub);
  try {
    if(category && subCategory){
        const products = await getProducts({category: decodedCat, subCategory: decodedSub});
        productCards = products?.map(product => <ProductCard key={uuidv4()} product={product} />)
      }else{
        productCards = (<p>"Error fitshing Products Data"</p>)
      }
      
    
  } catch (error) {
    productCards = <p>{error}</p>
  }
    return (
        <div className="w-screen flex flex-row flex-wrap pl-5 pt-24 mt-10">
          {productCards}
        </div>
      )
}

export default subCategoriesProducts