import ProductCard from "@/components/navigation/ProductCard";
import getProducts from "@/functions/getProducts";
import { v4 as uuidv4 } from 'uuid';

// this page is used to display all the products in a subCategory | subSubCategory
const subSubCategoriesProducts = async ({params}) => {
  let productCards = [];
  const { category, subCategory, subSubCategory} = params; 
  const decodedCat = decodeURIComponent(category)
  const decodedSub = decodeURIComponent(decodeURIComponent(subCategory))
  const decodedSubSub = decodeURIComponent(decodeURIComponent(subSubCategory))
  // console.log(decodedCat, decodedSub, decodedSubSub);

  if(category && subCategory && subSubCategory){
    const products = await getProducts({category: decodedCat, subCategory: decodedSub, subSubCategory: decodedSubSub});
    productCards = products?.map(product => <ProductCard key={uuidv4()} product={product} />)
  }else{
    productCards = (<p  key={uuidv4()}>"Error fitshing Products Data"</p>)
  }
  
return (
    <div key={uuidv4()} className="w-screen flex flex-row flex-wrap items-center justify-center pl-5 pt-40">
      {productCards}
    </div>
  )
}

export default subSubCategoriesProducts
