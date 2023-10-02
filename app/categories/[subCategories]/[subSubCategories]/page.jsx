'use client'
import SubSubCategoryCard from "@/components/navigation/SubSubCategoryCard";
import {useState, useEffect} from "react";
import {v4 as uuidv4} from 'uuid';

const subSubCategories = ({params}) => {
    //  console.log(params);
    const {subCategories, subSubCategories} = params;

    const [categories, setCategories] = useState();
    const cards = categories && categories
        .categories
        .map((cat, i) => {
            // console.log(cat, i);
            return (
                <SubSubCategoryCard
                    key={uuidv4()}
                    categoryObject={{
                        category: cat.name,
                        subCategory: cat.subCategories.name,
                        subSubCategory: cat.subSubCategories.name,
                        image: categories
                            .products[i]
                            .images[0]
                    }}/>
            )
        })

    useEffect(() => {
        const fetchHandler = async () => {
            try {
                const response = await fetch('/api/cats/sub/subSub', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                      {name: subCategories, 'subCategories.name': subSubCategories, 'subSubCategories.name': {$ne: null}}
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
    // const decodedSubSub =
    // decodeURIComponent(decodeURIComponent(subSubCategories))
    // console.log(decodedSubSub); let cards; try {   const categories = await
    // getCategories({name: subCategories, 'subCategories.name': decodedSubSub,
    // 'subSubCategories.name': {$ne: null}});     cards = await
    // categories?.map(async (category) => {         const name =
    // category.subSubCategories.name;         const encodedName =
    // encodeURIComponent(name)         const product = await
    // getOneProduct({subSubCategory: name});           console.log(product.name);
    // const image = product?.images[0] || '/assets/images/logo.png'         return
    // (<SubSubCategoryCard key={uuidv4()}           categoryObject={{
    // category: category.name,               subCategory:
    // category.subCategories.name,               subSubCategory: encodedName,
    // image: image,           }}/>)     }); } catch (error) {
    // console.log(error);   cards = <p>{error}</p> }


    return (
        <div
            key={uuidv4()}
            className="w-screen h-fit flex flex-row flex-wrap p-10 pt-36">
            {cards}
        </div>
    )
}

export default subSubCategories