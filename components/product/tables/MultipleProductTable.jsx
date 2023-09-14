'use client'
import {v4 as uuidv4} from 'uuid';
import {useEffect, useState} from 'react';

// table is table data from the product object add to basket is a handler
// function multi is a boolean since sometimes we need this table without all
// the handling functionality
const MultipleProductTable = ({table, addToBasket, multi}) => {

    const caption = table.caption;
    const tableContent = table.tableContent;
    const renderTableHeader = () => {
        return (
            <tr key={uuidv4()} className='text-gray-700 text-lg'>
                {
                    tableContent.map((rowData) => (
                        <th key={uuidv4()} className="border px-4 py-2 text-center">{rowData.header}</th>
                    ))
                }
                {/*  only add the addetional headers if the product document contain more than on
 * e product 
 */
                }
                {
                    (
                        multi
                            ? <th key={uuidv4()} className="border px-4 py-2 text-center">Quantity</th>
                            : ''
                    )
                }
                {
                    (
                        multi
                            ? <th key={uuidv4()} className="border px-4 py-2 text-center">Add To Baskit</th>
                            : ''
                    )
                }
            </tr>
        );
    };

    const renderTableRows = () => {
        const maxValuesLength = Math.max(
            ...tableContent.map((rowData) => rowData.values.length)
        );
        const rows = [];
        for (let i = 0; i < maxValuesLength; i++) {
            rows.push(
                <tr
                    key={uuidv4()}
                    className={`${i % 2 > 0
                        ? 'transparent'
                        : 'bg-slate-100'} text-gray-700 text-lg`}>
                    {
                        tableContent.map((rowData) => (
                            <td key={uuidv4()} className="border px-4 py-2 text-center">
                                {
                                    rowData.values[i] !== undefined
                                        ? rowData.values[i]
                                        : ''
                                }
                            </td>
                        ))
                    }

                    {/*  only add the addetional headers if the product document contain more than on
 * e product 
 */
                    }
                    {
                        (
                            multi
                                ? <td key={uuidv4()} className="border px-4 py-2 text-center">
                                    {quantityInput()}
                                </td>
                                : ''
                        )
                    }
                    {
                        (
                            multi
                                ? <td key={uuidv4()} className="border px-4 py-2 text-center">
                                    <button
                                        key={uuidv4()}
                                        className="h-10 w-24 bg-yellow-500 hover:bg-yellow-400 hover:text-gray-600 text-black font-bold py-2 px-4 rounded-lg "
                                        onClick={(e) => addToBasket(e)}>
                                        Add
                                    </button>
                                </td>
                                : ''
                        )
                    }
                </tr>
            );
        }
        return rows;
    };

    const quantityInput = () => {
        return (
            <input
                key={uuidv4()}
                type="number"
                className="border border-gray-400 w-24  rounded-lg px-3 py-2"
                defaultValue={0}
                min={0}
                max={100000000}/>
        )
    }

    return (
        <div
            key={uuidv4()}
            className='flex flex-col items-start justify-center lg:pl-10 w-full '>

            {
                caption && <div key={uuidv4()}>
                    <h4 key={uuidv4()} className='capitalize text-2xl'>
                        {caption}
                    </h4>
                </div>
            }

            <table key={uuidv4()} className='table-auto shadow-xl  min-w-90% m-5'>
                <thead key={uuidv4()}>{renderTableHeader()}</thead>
                <tbody key={uuidv4()}>{renderTableRows()}</tbody>
            </table>
        </div>
    );
};

export default MultipleProductTable
