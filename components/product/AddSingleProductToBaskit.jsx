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
            className='flex lg:flex-row flex-col lg:items-start items-center lg:justify-start justify-center 
            p-5 lg:m-5 lg:w-80% h-fit mb-10'>
            <h3 key={uuidv4()} className='capitalize text-3xl mb-10 text-center mx-4'>
                <span>Add </span>
                <span key={uuidv4()} className='text-yellow-500'>{productName}</span>
                <span> to Cart :</span>
            </h3>
            <div className='flex-row-center'>
                <input
                    ref={inputRef}
                    type="number"
                    className="border border-gray-400 w-20 rounded-lg px-3 py-2 mr-4 "
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

        </div>
    )
}

export default AddSingleProductToBaskit