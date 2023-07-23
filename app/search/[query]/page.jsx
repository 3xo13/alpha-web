'use client';
import {useState, useEffect} from "react";
import ProductCard from "@/components/navigation/ProductCard";
import {v4 as uuidv4} from 'uuid';

function searchquery({params}) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchHandler = async () => {
        try {
            setIsLoading(true)
            const {query} = params;
            const res = await fetch(`/api/query`, {
                method: 'POST',
                body: JSON.stringify({query: query})
            })
            const data = await res.json()
            if (!res.ok) 
                throw new Error(data.error || 'Something went wrong')
            setProducts(
                data.products.map(item => <ProductCard key={uuidv4()} product={item}/>)
            )
            setIsLoading(false)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        fetchHandler()
    }, [])

    return (
        <div
            className="w-screen h-fit min-h-120 flex flex-row flex-wrap items-center justify-center">
            {
                products
                    ?.length
                        ? products
                        : isLoading
                            ? (<p className="pt-10 text-4xl text-gray-700/50">Loading ...</p>)
                            : (<p className="pt-10 text-2xl text-orange-700">No Products Found</p>)
            }
        </div>
    )
}

export default searchquery