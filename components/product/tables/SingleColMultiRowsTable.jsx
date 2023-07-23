import {v4 as uuidv4} from 'uuid';


const singleColMultiRowsTable = ({table}) => { 
    const headers = table.tableContent.map(obj => {
        return(
            <td className="border px-4 py-2 text-center" key={uuidv4()}>
                {obj.header}
            </td>
        )
    })
    const rows = headers.map((header,i) => {
        const vals = table.tableContent[i].values.map(val => [val,<br  key={uuidv4()}/>])
        return(
            <tr className={`${i % 2 > 0 ? 'transparent' : 'bg-slate-100'} text-gray-700 text-lg`} key={uuidv4()}>
                {header}
                <td key={uuidv4()} className="border px-4 py-2 text-center">
                    {vals}
                </td>
            </tr>
        )
    })
    
    
  return (
    <div className='flex flex-col items-start justify-center pl-10 w-full ' key={uuidv4()}>
        <div key={uuidv4()}>
           <h4 className='capitalize text-2xl'>{table.caption}</h4> 
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