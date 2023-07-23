import React from 'react'
import Link from 'next/link'
import {v4 as uuidv4} from 'uuid';


// product card component
const ProductCard = ({product}) => {
   // this component is used to display a product's image and name
//    console.log('product id', product._id.toString());
   let id = product?._id.toString() || ''
//    console.log('category', product.category);
   
    const name = product?.name.split('-').join(' ') || ''
    return (
        // when the product card is clicked, the user is redirected to the product's page
        <Link href={`/products/${product.category}/${product.name}`} key={uuidv4()}>
        <div key={uuidv4()}
            className="flex flex-col justify-end items-center w-64 h-64 bg-contain bg-center bg-no-repeat m-5"
            style={{'backgroundImage': `url(${product.images[0]}`}}
            >
            <h2 className='text-center text-gray-700 capitalize text-lg bg-slate-100/70 w-full'>
                {name}
            </h2>

        </div>
        </Link>
    )
}

export default ProductCard