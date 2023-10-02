'use client'
import SubCategoryCard from "@/components/navigation/SubCategoryCard";
import {v4 as uuidv4} from 'uuid';
import {useState, useEffect} from "react";

const subCategories = ({params}) => {
    const {subCategories} = params;
    // console.log("🚀 ~ file: page.jsx:8 ", subCategories)
    const [categories, setCategories] = useState();
    const cards = categories && categories
        .categories
        .map((cat, i) => {
            // console.log(cat, i);
            return (
                <SubCategoryCard
                    key={uuidv4()}
                    categoryObject={{
                        category: cat.name,
                        subCategory: cat.subCategories.name,
                        image: categories
                            .products[i]
                            .images[0]
                    }}/>
            )
        })

        useEffect(() => {
          const fetchHandler = async () => {
              try {
                  const response = await fetch('/api/cats/sub', {
                      method: "POST",
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(
                          {"subCategories.parent": subCategories, "subSubCategories.name": null}
                      )
                  });
      
                  if (!response.ok) {
                      throw new Error('Network response was not ok');
                  }
      
                  const data = await response.json();
                  setCategories(data);
              } catch (error) {
                  console.error('Error:', error);
              }
          }
      
          fetchHandler();
      }, []);
      

    return (
        <div
            key={uuidv4()}
            className="w-screen h-fit flex flex-row flex-wrap p-10 pt-36">
            {cards}
        </div>
    )
}

export default subCategories