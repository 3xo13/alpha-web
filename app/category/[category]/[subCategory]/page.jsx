import ProductCard from "@/components/navigation/ProductCard";
import getProducts from "@/functions/getProducts";
import { v4 as uuidv4 } from 'uuid';

async function subCategoriesProducts({params}) {
    let productCards = [];
  const { category, subCategory} = params;

    if(category && subCategory){
        const products = await getProducts({category: category, subCategory: subCategory});
        productCards = products?.map(product => <ProductCard key={uuidv4()} product={product} />)
      }else{
        productCards = (<p>"Error fitshing Products Data"</p>)
      }
      
    return (
        <div key={uuidv4()} className="w-screen flex flex-row flex-wrap pl-5">
          {productCards}
        </div>
      )
}

export default subCategoriesProducts