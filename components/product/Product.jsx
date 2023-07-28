// 'use client';
// import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';


const Product = ({productObject}) => {
    // console.log(JSON.stringify(productObject,null,2));
    
    const {name, images , details, options} = productObject;
    const headers = options[0].headers;
    const values = options[0].values;
    // const [mainImg, setMainImg] = useState(images[0]);
    // console.log(values);
    const optionsTable = (
        <table className="table-auto mt-5 ml-5 shadow" key={uuidv4()}>
            <thead>
                <tr key={uuidv4()}>
                    {
                        headers.map((header, index) => {
                            return <th className="px-4 py-2" key={uuidv4()}
                                data-value={header}
                            >{header}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    values.map((row, index) => {
                        return <tr key={uuidv4()}>
                            {
                                row.map((value, index) => {
                                    return <td key={uuidv4()} className="border px-4 py-2">{value}</td>
                                })
                            }
                        </tr>
                    })
                }
            </tbody>
        </table>
    )

    const detailedText = details.split('.').map((text, index) => {
        return (
            <div key={uuidv4()}>
            <p>{text}</p> <br />
            </div>
        )
    })


return (
            <div className='w-screen p-10' key={uuidv4()}>
                <div className='flex flex-row justify-center items-center'>
                    <div >
                       <div >
                            <img src={images[0]} alt="" className='w-64 h-64'/>
                        </div> 
                    </div>
                    <div className='flex items-center justify-center '>
                        <h1 className='text-2xl ml-10 uppercase'>
                            {name.split('-').join(' ')}
                        </h1>
                    </div>    
                </div>
                <div className='m-10'>
                    {optionsTable}
                </div>
                <div className='mt-10'>
                    {detailedText}
                    
                </div> 
                  <br />
            </div>   
        )
}

export default Product


