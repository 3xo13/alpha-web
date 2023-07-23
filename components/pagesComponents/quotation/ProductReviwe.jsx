import {v4 as uuidv4} from 'uuid'

const ProductReviwe = ({item, removeItem, decreaseQuantity, setPruductQuantity}) => {
    
  return (
    <div // cart content single item
                className={`flex items-center justify-between lg:w-fit w-90%  m-2 ml-5 rounded-md flex-col border-2 border-gray-300 p-2 `}
                key={uuidv4()}>
                    <div key={uuidv4()} className="w-full flex justify-end">  {/* delete button */}
                        <button
                        className=' w-fit bg-red-500 hover:bg-red-600 text-white cursor-pointer p-2 rounded '
                        onClick={() => {
                            decreaseQuantity()
                            removeItem(item.partNumber || '',item.name)
                        }}>
                            Delete
                        {/* <img src='/assets/icons/close.png' alt='delete product' className='w-4 h-4'/> */}
                    </button>
                    </div>
                <div key={uuidv4()} className="flex flex-row items-center w-full">
                    <img src={item.image} alt={item.name} className="w-24 h-24 mr-3 "/>
                    <p className='lg:w-64 w-fit text-gray-700 capitalize lg:text-lg'>{item.name}</p>
                    <p className='m-2'><span>Part No: </span>{item.partNumber}</p>
                    <input
                        type="number"
                        className='m-2 border p-1 bg-white w-20'
                        defaultValue={item.quantity}
                        min={1}
                        onChange={(e) => {
                            setPruductQuantity(item.name, e.target.value)
                            // console.log(item.name, e.target.value);
                        }}/>

                    
                </div>
                {/* {item.headers ?  <div key={uuidv4()} className='hidden lg:flex'>
                    <table className="table-auto mt-5 lg:ml-5 ml-2 shadow">
                        <thead>
                            <tr>
                                {
                                    item
                                        .headers
                                        .map((header) => {
                                            return <th key={uuidv4()} className="px-4 py-2">{header}</th>
                                        })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {
                                    item
                                        .options
                                        .map((value) => {
                                            return <td key={uuidv4()} className="border px-4 py-2">{value}</td>
                                        })
                                }
                            </tr>
                        </tbody>
                    </table>
                </div> : false } */}

            </div>
  )
}

export default ProductReviwe