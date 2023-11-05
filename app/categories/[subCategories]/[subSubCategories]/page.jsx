'use client'
import SubSubCategoryCard from "@/components/navigation/SubSubCategoryCard";
import {useState, useEffect} from "react";
import {v4 as uuidv4} from 'uuid';

const subSubCategories = ({params}) => {

    const {subCategories, subSubCategories} = params;
    const sub = decodeURIComponent(subCategories)
    const subSub = decodeURIComponent(decodeURIComponent(subSubCategories))

    const [categories, setCategories] = useState();
    let loading = !categories && true;

    const cards = categories && categories
        .categories
        .map((cat, i) => {
            return (
                <SubSubCategoryCard
                    key={uuidv4()}
                    categoryObject={{
                        category: cat.name,
                        subCategory: cat.subCategories.name,
                        subSubCategory: cat.subSubCategories.name,
                        image: categories
                            .products[i]
                            .images[0] || '/assets/images/logo.png'
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
                      {name: sub, 'subCategories.name': subSub, 'subSubCategories.name': {$ne: null}}
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
                {
                loading && <div className="flex flex-row-center screen">
                        <p className="text-6xl mr-10 text-yellow-500">Loading...</p>
                        <img
                            src="/assets/icons/loading.png"
                            alt="lodaing"
                            className="w-16 h-16 animate-spin"/>
                    </div>
            }
            {cards}
        </div>
    )
}

export default subSubCategories