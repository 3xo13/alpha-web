'use client'
import {v4 as uuidv4} from 'uuid';
import {useEffect, useState} from 'react';

const MultipleProductTable = ({table, addToBasket}) => {
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
                <th key={uuidv4()} className="border px-4 py-2 text-center">Quantity</th>
                <th key={uuidv4()} className="border px-4 py-2 text-center">Add To Baskit</th>
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
                    className={`${i % 2 > 0
                        ? 'transparent'
                        : 'bg-slate-100'} text-gray-700 text-lg`}
                    key={uuidv4()}>
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
                    <td key={uuidv4()} className="border px-4 py-2 text-center">{quantityInput()}</td>
                    <td key={uuidv4()} className="border px-4 py-2 text-center">
                        <button
                            key={uuidv4()}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full text-center"
                            onClick={(e) => addToBasket(e)}>
                            Add
                        </button>
                    </td>
                </tr>
            );
        }
        return rows;
    };

    const quantityInput = () => {
      return (
          <input type="number" className="border border-gray-400 w-24  rounded-lg px-3 py-2" defaultValue={0} min={0} key={uuidv4()} max={100000000}/>
      )
  }

    return (
        <div
            className='flex flex-col items-start justify-center pl-10 w-full '
            key={uuidv4()}>
            <div key={uuidv4()}>
                <h4 key={uuidv4()} className='capitalize text-2xl'>{caption}</h4>
            </div>
            <table key={uuidv4()} className='table-auto mt-5 ml-5 shadow  min-w-90% m-5'>
                <thead>{renderTableHeader()}</thead>
                <tbody>{renderTableRows()}</tbody>
            </table>
        </div>
    );
};

export default MultipleProductTable
