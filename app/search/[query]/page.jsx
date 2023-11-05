'use client';
import {useState, useEffect} from "react";
import ProductCard from "@/components/navigation/ProductCard";
import {v4 as uuidv4} from 'uuid';

function searchquery({params}) {
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true)

    const fetchHandler = async () => {
        try {
            
            const {query} = params;
            const res = await fetch(`/api/query`, {
                method: 'POST',
                body: JSON.stringify({query: query})
            })
            const data = await res.json()
            setLoading(false)
            if (!res.ok) 
                throw new Error(data.error || 'Something went wrong')
            setProducts(
                data.products.map(item => <ProductCard key={uuidv4()} product={item}/>)
            )
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        fetchHandler()
    }, [])

    return (
        <div
            className="w-screen h-fit min-h-120 flex flex-row flex-wrap items-center justify-center mt-44">
                {
                loading && <div className="flex flex-row-center screen">
                        <p className="text-6xl mr-10 text-yellow-500">Loading...</p>
                        <img
                            src="/assets/icons/loading.png"
                            alt="lodaing"
                            className="w-16 h-16 animate-spin"/> 
                    </div>
            }
            {
                !products?.length && !loading
                        ? (<p className="pt-10 h-[50vh] text-2xl text-orange-700">No Products Found</p>)
                        : products
            }
        </div>
    )
}

export default searchquery