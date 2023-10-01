import {v4 as uuidv4} from 'uuid'

const ProductReviwe = (
    {item, removeItem, decreaseQuantity, setPruductQuantity}
) => {

    return (
        <div
            // cart content single item
            className={`lg:w-[80%] w-[90%] flex flex-col items-center 
            justify-between p-2 m-2 ml-5 rounded-md 
            border-2 border-gray-300`}>
                {/* delete button */}
            <div className="w-full flex justify-end">
                <button
                    className=' w-fit bg-red-500 hover:bg-red-600 text-white cursor-pointer p-2 rounded '
                    onClick={() => {
                        decreaseQuantity()
                        removeItem(item.partNumber || '', item.name)
                    }}>
                    Delete {/* <img src='/assets/icons/close.png' alt='delete product' className='w-4 h-4'/> */}
                </button>
            </div>
            <div className="flex lg:flex-row flex-col items-center lg:justify-between flex-wrap w-full">
                <img src={item.image} alt={item.name} className="w-24 h-24 mr-3 "/>
                <p className='lg:w-64 w-fit text-gray-700 capitalize lg:text-lg'>{item.name}</p>
                <p className='m-2'>
                    <span>Part No:
                    </span>{item.partNumber}</p>
                <input
                    type="number"
                    className='m-2 border p-1 bg-white w-20'
                    defaultValue={item.quantity}
                    min={1}
                    onChange={(e) => {
                        setPruductQuantity(item.name, e.target.value)
                        // // console.log(item.name, e.target.value);
                    }}/>
            </div>

        </div>
    )
}

export default ProductReviwe