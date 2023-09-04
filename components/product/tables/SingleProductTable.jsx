'use client'
import {v4 as uuidv4} from 'uuid';
import {useEffect, useState, useRef} from 'react';

const SingleProductTable = ({table}) => {
    if (!table)return (<div key={uuidv4()}></div>);
    const [quantity,setQuantity] = useState(0);
    const [singleTable, setSingleTable] = useState(table)
    const inputRef = useRef(0);

    useEffect(() => {
        setSingleTable(table)
    }, [table])

    const caption = singleTable.caption;
    const headers = singleTable
        .tableContent
        .map(
            row => <td key={uuidv4()} className="border px-4 py-2 text-center">{row.header}</td>
        )
    const values = singleTable
        .tableContent
        .map(
            row => <td key={uuidv4()} className="border px-4 py-2 text-center">{row.values[0]}</td>
        );
    const rows = headers.map((header, i) => {
        const value = values[i];
        return (
            <tr key={uuidv4()} className={`${i % 2 > 0 ? 'transparent' : 'bg-slate-100'} text-gray-700 text-lg`}>
                {header}
                {value}
            </tr>
        )
    });

    const handleChange = (event) => {
        inputRef.current = event.target.value;
        setQuantity(event.target.value);
      };
    
    return (
        <div key={uuidv4()} className='flex flex-col items-start justify-center pl-10 w-full '>
            {/* <div key={uuidv4()} className='flex flex-row items-start justify-evenly p-5 m-5 w-80% h-fit'>
                <h3 key={uuidv4()} className='capitalize text-3xl mb-10 text-center'>
                    Add <span key={uuidv4()} className='text-yellow-500'>{productName}</span> to Bakit :
                </h3>
                <input
                    ref={inputRef}
                    type="number"
                    className="border border-gray-400 w-20 rounded-lg px-3 py-2 mr-4"
                    min={0}
                    key={uuidv4()}
                    value={inputRef.current}
                    onChange={handleChange}
                />
                <button key={uuidv4()} className="bg-yellow-600 hover:bg-yellow-700 w-24 text-white font-bold py-2 px-4 rounded-full text-center"
                                
                        onClick={(e) => addToBaskit(quantity)}
                    >
                        Add
                </button>
            </div> */}
            <div key={uuidv4()}>
                <h4 key={uuidv4()} className='capitalize text-2xl'>{caption} :</h4>
            </div>
            <table key={uuidv4()}  className='table-auto mt-5 ml-5 shadow  min-w-90% m-5'>
                <tbody key={uuidv4()}>
                    {rows}

                </tbody>
            </table>
        </div>

    )
}

export default SingleProductTable