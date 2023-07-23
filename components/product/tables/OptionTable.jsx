'use client'
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';


const OptionTable = ({ table, addToBasket}) => {
    const [updatedHeaders, setUpdatedHeaders] = useState([])
    const [updatedValues, setUpdatedValues] = useState([])
    
    
    const quantityInput = (row) => {
        
        return (
            <input type="number" className="border border-gray-400 w-20 rounded-lg px-3 py-2 mr-4" defaultValue={0} min={0} key={uuidv4()}/>
        )
    }
    useEffect(() => {
        setUpdatedHeaders([...headers, 'Quantity', 'Add to basket'])
        setUpdatedValues(values)
    }, [headers, values])
    

    return (
        <table className="table-auto mt-5 ml-5 shadow  " key={uuidv4()}>
            <thead>
                <tr>
                    {
                        updatedHeaders
                            ?.map((header) => {
                                return <th key={uuidv4()} className="px-4 py-2" data-value={header}>{header}</th>
                            })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    updatedValues
                        ?.map((row) => {
                            return <tr key={uuidv4()} >
                                {
                                    row
                                        ?.map((value) => {
                                            return <td key={uuidv4()} className="border px-4 py-2 text-center">{value}</td>
                                        })
                                }
                                <td key={uuidv4()} className="border px-4 py-2" >{quantityInput(row)}</td>
                                <td key={uuidv4()} className="border px-4 py-2">
                                <button key={uuidv4()} className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full text-center"
                                    
                                    onClick={(e) => addToBasket(e)}
                                >
                                    Add
                                </button>
                                </td>
                            </tr>
                        })
                }
            </tbody>
        </table>
    )
}

export default OptionTable