import ProductCard from "@/components/navigation/ProductCard";
import getProducts from "@/functions/getProducts";
import { v4 as uuidv4 } from 'uuid';

// this page is used to display all the products in a subCategory | subSubCategory
const subSubCategoriesProducts = async ({params}) => {
  let productCards = [];
  const { category, subCategory, subSubCategory} = params; 

  if(category && subCategory && subSubCategory){
    const products = await getProducts({category: category, subCategory: subCategory, subSubCategory: subSubCategory});
    productCards = products?.map(product => <ProductCard key={uuidv4()} product={product} />)
  }else{
    productCards = (<p  key={uuidv4()}>"Error fitshing Products Data"</p>)
  }
  
return (
    <div key={uuidv4()} className="w-screen flex flex-row flex-wrap pl-5">
      {productCards}
    </div>
  )
}

export default subSubCategoriesProducts

















// import data from "@data/data"
// import ProductCard from "@components/ProductCard";

// // this page is used to display all the products in a subCategory
// const page = ({params}) => {
//   // params are sent from productNavigation component
//   let { category, subCategory } = params;
  
//   // the name of the category is used along with the name of the subCategory to find the subCategory's object 
//   // and then the subCategory's children are mapped to productCards to be displayed 
//   let productCards;
//   // if category is lightning-protection, then subCategory is actually subCategory_subSubCategory
//   if(category === 'lightning-protection') {
//     const arr = subCategory.split('_');
//     subCategory = arr[0] ;
//     const subSubCategory = arr[1];
//     const subCategoryData = data.children.find(folder => folder.name === category).children.find(sub => sub.name === subCategory).children.find(sub => sub.name === subSubCategory)
//     productCards = subCategoryData.children.map(product => <ProductCard product={product} />)
//   }else{ // else, subCategory is just subCategory
//     const subCategoryData = data.children.find(folder => folder.name === category).children.find(sub => sub.name === subCategory)
//     productCards = subCategoryData.children.map(product => <ProductCard product={product} />)
//   }
//   return (
//     <div className="w-screen flex flex-row flex-wrap pl-5">
//       {productCards}
//     </div>
//   )
// }

// export default page