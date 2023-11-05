'use client';
import CategoryCard from "@/components/navigation/CategoryCard";
import {v4 as uuidv4} from 'uuid';
import {useState, useEffect} from "react";

const categories = () => {
    const [categories, setCategories] = useState();
    let loading = !categories && true;
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
                    body: JSON.stringify({"subCategories.name": null})
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

export default categories