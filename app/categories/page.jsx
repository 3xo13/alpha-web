'use client';
import CategoryCard from "@/components/navigation/CategoryCard";
import {v4 as uuidv4} from 'uuid';
import {useState, useEffect} from "react";

const categories = () => {
    const [categories, setCategories] = useState();
    const cards = categories && categories
        .categories
        .map((cat, i) => {
            
            return (
                <CategoryCard
                    key={uuidv4()}
                    categoryObject={{
                        name: cat.name,
                        image: categories
                            .products[i]
                            .images[0]
                    }}/>
            )
        })

        useEffect(() => {
            const fetchHandler = async () => {
                try {
                    const response = await fetch('/api/cats', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(
                            {"subCategories.name": null}
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

export default categories