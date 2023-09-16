'use client';
import {useState, useEffect} from "react";
import ProductCard from "@/components/navigation/ProductCard";
import {v4 as uuidv4} from 'uuid';

function searchquery({params}) {
    const [products, setProducts] = useState([]);

    const fetchHandler = async () => {
        try {
            
            const {query} = params;
            const res = await fetch(`/api/query`, {
                method: 'POST',
                body: JSON.stringify({query: query})
            })
            const data = await res.json()
            if (!res.ok) 
                throw new Error(data.error || 'Something went wrong')
            setProducts(
                data.products.map(item => <ProductCard product={item}/>)
            )
        } catch (e) {
            // console.log(e.message)
        }
    }

    useEffect(() => {
        fetchHandler()
    }, [])

    return (
        <div
            className="w-screen h-fit min-h-120 flex flex-row flex-wrap items-center justify-center mt-36">
            {
                products
                    ?.length
                        ? products
                        : (<p className="pt-10 text-2xl text-orange-700">No Products Found</p>)
            }
        </div>
    )
}

export default searchquery