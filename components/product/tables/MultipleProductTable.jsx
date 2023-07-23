'use client'
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

const MultipleProductTable = ({ table }) => {
    const caption = table.caption;
    const tableContent = table.tableContent;
    const renderTableHeader = () => {
      return (
        <tr key={uuidv4()} className='text-gray-700 text-lg'>
          {tableContent.map((rowData) => (
            <th  key={uuidv4()} className="border px-4 py-2 text-center">{rowData.header}</th>
          ))}
        </tr>
      );
    };
  
    const renderTableRows = () => {
      const maxValuesLength = Math.max(...tableContent.map((rowData) => rowData.values.length));
      const rows = [];
      for (let i = 0; i < maxValuesLength; i++) {
        rows.push(
          <tr  className={`${i % 2 > 0 ? 'transparent' : 'bg-slate-100'} text-gray-700 text-lg`} key={uuidv4()}>
            {tableContent.map((rowData) => (
              <td key={uuidv4()} className="border px-4 py-2 text-center">
                {rowData.values[i] !== undefined ? rowData.values[i] : ''}
              </td>
            ))}
          </tr>
        );
      }
      return rows;
    };
  
    return (
        <div className='flex flex-col items-start justify-center pl-10 w-full ' key={uuidv4()}>
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

// ({table}) => {
    
//     const [singleTable, setSingleTable] = useState(table);
//     useEffect(()=>{
//         setSingleTable(table)
//     },[table])
//     const caption = singleTable.caption;
//     const headers = table.tableContent.map(obj => <th key={uuidv4()} className="border px-4 py-2 text-center">{obj.header}</th>)
//     const columns = table.tableContent.map(col => col.values.map(val => <td key={uuidv4()} className="border px-4 py-2 text-center">{val}</td>))
    
    
    
//     console.log();
//   return (
//     <div key={uuidv4()} className='flex flex-col m-5'>
        
//         <div>
//             <h4 key={uuidv4()} className='capitalize text-2xl'>{caption}</h4>
//         </div>
        
//         <table key={uuidv4()} className="table-auto mt-5 ml-5 shadow  ">
//             <thead>
//                 <tr  key={uuidv4()}>
//                     {headers}
//                 </tr>
//             </thead>
//             <tbody>
//                 {rows}
//             </tbody>
//         </table>
//     </div>
//   )
// }

export default MultipleProductTable