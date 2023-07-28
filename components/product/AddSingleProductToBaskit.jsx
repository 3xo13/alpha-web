'use client'
import {v4 as uuidv4} from 'uuid';
import {useEffect, useState, useRef} from 'react';

const AddSingleProductToBaskit = ({productName, addToBaskit}) => {
    const [quantity, setQuantity] = useState(0);
    const inputRef = useRef(0);

    const handleChange = (event) => {
        inputRef.current = event.target.value;
        setQuantity(event.target.value);
    };

    return (
        <div
            key={uuidv4()}
            className='flex flex-row items-start justify-start p-5 m-5 w-80% h-fit'>
            <h3 key={uuidv4()} className='capitalize text-3xl mb-10 text-center mx-4'>
                <span>Add </span> 
                <span key={uuidv4()} className='text-yellow-500'>{productName}</span>
                <span> to Cart :</span>
            </h3>
            <input
                ref={inputRef}
                type="number"
                className="border border-gray-400 w-20 rounded-lg px-3 py-2 mr-4"
                min={0}
                key={uuidv4()}
                value={inputRef.current}
                onChange={handleChange}/>
            <button
                key={uuidv4()}
                className="bg-yellow-600 hover:bg-yellow-700 w-24 text-white font-bold py-2 px-4 rounded-full text-center"
                onClick={(e) => addToBaskit(quantity)}>
                Add
            </button>
        </div>
    )
}

export default AddSingleProductToBaskit