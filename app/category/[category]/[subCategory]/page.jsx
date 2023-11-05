import ProductCard from "@/components/navigation/ProductCard";
import getProducts from "@/functions/getProducts";
import { v4 as uuidv4 } from 'uuid';

async function subCategoriesProducts({params}) {
    let productCards = [];
    let loading =  true ;

  const { category, subCategory} = params;
  const decodedCat = decodeURIComponent(category) 
  const decodedSub = decodeURIComponent(decodeURIComponent(subCategory))
  try {
    if(category && subCategory){
        const products = await getProducts({category: decodedCat, subCategory: decodedSub});
        productCards = products?.map(product => <ProductCard key={uuidv4()} product={product} />)
        loading = false
      }else{
        productCards = (<p>"Error fitshing Products Data"</p>)
      }
      
    
  } catch (error) {
    productCards = <p>{error}</p>
  }
    return (
        <div className="w-screen flex flex-row flex-wrap pl-5 pt-24 mt-10">
          {
                loading && <div className="flex flex-row-center screen">
                        <p className="text-6xl mr-10 text-yellow-500">Loading...</p>
                        <img
                            src="/assets/icons/loading.png"
                            alt="lodaing"
                            className="w-16 h-16 animate-spin"/>
                    </div>
            }
          {productCards}
        </div>
      )
}

export default subCategoriesProducts