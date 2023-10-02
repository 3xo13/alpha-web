'use client'
import ProductCard from "@/components/navigation/ProductCard";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";

// this page is used to display all the products in a subCategory | subSubCategory
const subSubCategoriesProducts = ({params}) => {
  const { category, subCategory, subSubCategory} = params; 
  const [products, setProducts] = useState();
  const productCards = products?.map(product => <ProductCard  key={uuidv4()} product={product} />)
  useEffect(() => {
    const fetchHandler = async () => {
        try {
            const response = await fetch('/api/products/categoryProducts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                  {category: category, subCategory: subCategory, subSubCategory: subSubCategory}
                )
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    fetchHandler();
}, []);

  
return (
    <div key={uuidv4()} className="w-screen flex flex-row flex-wrap items-center justify-center pl-5 pt-40">
      {productCards}
    </div>
  )
}

export default subSubCategoriesProducts
