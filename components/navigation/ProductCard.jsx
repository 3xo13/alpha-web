import Link from 'next/link'
import {v4 as uuidv4} from 'uuid';

// product card component used to display a product's image and name
const ProductCard = ({product}) => {
   const encodedCat = encodeURIComponent(product.category)
   const encodedProductName = encodeURIComponent(encodeURIComponent(product.name))

    const name = product?.name.split('-').join(' ') || ''
    return (
        <div>
            <Link href={`/products/${encodedCat}/${encodedProductName}`}> 
                <div
                   
                    className="flex flex-col justify-end items-center w-64 h-64 
                    bg-contain bg-center bg-no-repeat m-5"
                    style={{'backgroundImage': `url(${product.images[0]}`}}
                    >
                    <h2 className='text-center text-gray-700 capitalize 
                    text-lg bg-slate-100/70 w-full'>
                        {name}
                    </h2>

                </div>
            </Link>
        </div>
    )
}

export default ProductCard