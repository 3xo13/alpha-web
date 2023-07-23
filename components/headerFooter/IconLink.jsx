import React from 'react';
import Link from 'next/link';
import {v4 as uuidv4} from 'uuid';

const IconLink = ({link,image,alt,text}) => {
    return (
        <div className='lg:mt-2 ml-5 lg:ml-0' key={uuidv4()}>
            <Link href={link} className='flex flex-row items-center lg:w-64 w-fit cursor-pointer' key={uuidv4()}>
                <img
                    src={image}
                    alt={alt}
                    key={uuidv4()}
                    className='lg:w-8 lg:h-8 w-5 h-5'
                    />
                <p className='black ml-2' key={uuidv4()}>{text}</p>
            </Link>
        </div>
    )
}

export default IconLink