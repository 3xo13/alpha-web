'use client'
import React, {useEffect, useState} from 'react';
import OptionTable from '@/components/product/tables/OptionTable';
import ProductImages from '@/components/product/ProductImages';
import useBasketData from '@/dataMangment/basketData';
import SingleProductTable from '@/components/product/tables/SingleProductTable';
import MultipleProductTable from '@/components/product/tables/MultipleProductTable';
import SingleColMultiRowsTable from '@/components/product/tables/SingleColMultiRowsTable';
import {v4 as uuidv4} from 'uuid';

const Product = ({params}) => {
    // state
    const {increaseQuantity, setPruductQuantity, addItem} = useBasketData();
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [mainImg, setMainImg] = useState('');

    // destructure & variables
    const {name, images, details, options, partNumber} = product || {};
    const tables = options
        ?.tables || [];
    // console.log(tables);

    // wait for the product to be fetched from the server
    const fetchHandler = async () => {
        try {
            const {category, productName} = params;
            const res = await fetch(
                `/api/products?category=${category}&name=${productName}`
            )
            const data = await res.json()
            if (!res.ok) 
                throw new Error(data.error || 'Something went wrong')
            setProduct(data.product)
            setMainImg(data.product.images[0])
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchHandler()
    }, [])

    const detailedText = details?.map((obj, index) => {
            if (obj === []) 
                return false;
            const tagName = obj.tagName;
            if (tagName == 'h4') {
                return (<h4 key={uuidv4()} className='text-gray-700 text-2xl'>{obj.text}</h4>)
            }
            if (tagName == 'ul') {
                // console.log('obj',obj);
                const list = obj
                    .text
                    .split('//')
                    .map(
                        text => text !== '' && <li key={uuidv4()} className='list-disc ml-5'>{text}</li>
                    )
                return (<ul key={uuidv4()}>{list}</ul>)
            }
            return (<p key={uuidv4()} className='m-5 text-gray-700 text-lg'>{obj.text}</p>)
        })

    const addToBasketHandler = (inputValue) => {
       
        if (inputValue == 0) return;
        const basketProduct = {
            name: name
                .split('-')
                .join(' '),
            headers: null,
            options: null,
            quantity: parseInt(inputValue),
            partNumber: partNumber,
            id: product._id,
            image: mainImg
        }
        
        addItem(basketProduct);
        increaseQuantity(basketProduct);

    }


    let optionsTable;
    if (options?.tableStyle === 'multiple multiple') {

        optionsTable = tables.map(table => <MultipleProductTable key={uuidv4()} table={table}/>)

    }else if(options?.tableStyle === 'single multiple'){
        optionsTable = tables.map(table => <SingleColMultiRowsTable key={uuidv4()} table={table}/>)
    } else {

        optionsTable = tables.map(table => {
            return (
                <SingleProductTable
                    key={uuidv4()}
                    table={table
                        ? table
                        : false}
                    addToBaskit={addToBasketHandler}
                    productName={name?.split('-').join(' ') || ''}
                />
            )
        })
    }
    console.log(options?.tableStyle);
    return (
        <div key={uuidv4()} className='flex flex-col items-center w-screeen'>

            {
                isLoading
                    ? <p className='my-8 text-3xl text-gray-400'>Loading...</p>
                    : (
                        <div key={uuidv4()}>
                            <div className='flex lg:flex-row flex-col-reverse w-screen pt-10'>
                                <ProductImages
                                    images={images}
                                    mainImg={mainImg}
                                    setMainImg={setMainImg}
                                    name={name}/>

                                <div className='flex flex-col items-center justify-start '>
                                    <h3 className='justify-self-start mt-10 m-5 text-xl capitalize'>
                                        {
                                            product
                                                .category
                                                .split('-')
                                                .join(' ')
                                        }
                                    </h3>
                                    <h4 className='m-5 mt-0 text-lg capitalize'>
                                        {
                                            product
                                                .subCategory
                                                .split('-')
                                                .join(' ')
                                        }
                                    </h4>
                                    <h1
                                        className='text-3xl font-bold capitalize m-5 lg:m-0 text-center lg:text-start'>{
                                            name
                                                .split('-')
                                                .join(' ')
                                        }</h1>
                                        <h2 className='text-lg black mt-3'>{partNumber}</h2>
                                </div>
                            </div>
                            <div className='flex flex-col w-screen '>
                                <div
                                    className='w-screen flex flex-col items-start justify-center overflow-x-scroll lg:overflow-x-hidden pt-10 '>
                                    {optionsTable}
                                </div>
                                <div className='w-11/12 flex flex-col p-10'>

                                    {detailedText}
                                </div>
                            </div>
                        </div>
                    )
            }
            {error && <h1 className='my-8 text-3xl text-red-400'>{error}</h1>}
        </div>
    )
}

export default Product



// const selectedOption = e.target.parentNode.parentNode.childNodes;
//         const selectedOptionValues = [];
//         selectedOption.forEach((option, index) => {
//             if (index !== selectedOption.length - 1) {
//                 if (index === selectedOption.length - 2) {
//                     selectedOptionValues.push(option.childNodes[0].value);
//                 } else {
//                     selectedOptionValues.push(option.innerHTML);

//                 }
//             }
//         })
//         if (selectedOptionValues.at(-1) == 0) 
//             return;
//         const basketProduct = {
//             name: name
//                 .split('-')
//                 .join(' '),
//             headers: headers,
//             options: selectedOptionValues.slice(0, -1),
//             quantity: parseInt(selectedOptionValues.at(-1)),
//             part_number: selectedOptionValues.at(-2),
//             id: product._id,
//             image: mainImg
//         }
//         console.log(basketProduct.part_number);
//         addItem(basketProduct);
//         increaseQuantity(basketProduct);