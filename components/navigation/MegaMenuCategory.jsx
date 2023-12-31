'use client';
import Link from 'next/link';
import {v4 as uuidv4} from 'uuid';

const MegaMenuCategory = ({category}) => {

    const cat = encodeURIComponent(category.name)
    return (
        <div className='cinzel text-xl'>
            <Link
                href={`/categories/${cat}`}
                key={uuidv4()}
                className='hover:bg-blue-100 mb-5'>
                <h3 key={uuidv4()} className="flex capitalize font-bold mb-3">{
                        category
                            .name
                            .split('-')
                            .join(' ')
                    }</h3>
            </Link>
            {
                category
                    .subCategories
                    .map(sub => {
                        const encodedSub = encodeURIComponent(encodeURIComponent(sub.name))
                        if(cat == 'UPS-(Uninterruptable-Power-Supply)' || cat == 'Cloud-Infrastructure'){
                            return (
                                <Link key={uuidv4()} href={`/category/${cat}/${encodedSub}`}>
                                    <div className="flex flex-row w-full items-center" key={uuidv4()}>
                                        <h4 className=" capitalize text-lg">
                                            {
                                                sub
                                                    .name
                                                    .split('-')
                                                    .join(' ')
                                            }
                                        </h4>
    
                                    </div>
                                </Link>
                            )
                        }
                        return (
                            <Link key={uuidv4()} href={`/categories/${cat}/${encodedSub}`}>
                                <div className="flex flex-row w-full items-center" key={uuidv4()}>
                                    <h4 className=" capitalize text-lg">
                                        {
                                            sub
                                                .name
                                                .split('-')
                                                .join(' ')
                                        }
                                    </h4>

                                </div>
                            </Link>
                        )
                    }) 
            }
        </div>
    )
}

export default MegaMenuCategory