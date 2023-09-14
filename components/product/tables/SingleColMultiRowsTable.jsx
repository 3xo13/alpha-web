import {v4 as uuidv4} from 'uuid';


const singleColMultiRowsTable = ({table}) => { 
    const headers = table.tableContent.map(obj => {
        return(
            <td key={uuidv4()} className="border px-4 py-2 text-center">
                {obj.header}
            </td>
        )
    })
    const rows = headers.map((header,i) => {
        const vals = table.tableContent[i].values.map(val => [val,<br key={uuidv4()}/>])
        return(
            <tr key={uuidv4()} className={`${i % 2 > 0 ? 'transparent' : 'bg-slate-100'} text-gray-700 text-lg`}>
                {header}
                <td key={uuidv4()} className="border px-4 py-2 text-center">
                    {vals}
                </td>
            </tr>
        )
    })
    
    
  return (
    <div key={uuidv4()} className='flex flex-col items-start justify-center lg:pl-10 w-full '>
        <div>
           <h4 className='capitalize text-2xl pl-5 lg:pl-0'>{table.caption}</h4> 
        </div>
        
        <table className='table-auto mt-5 ml-5 shadow  min-w-90% m-5'>
            <tbody>
               {rows} 
            </tbody>
        </table>
    </div>
  )
}

export default singleColMultiRowsTable