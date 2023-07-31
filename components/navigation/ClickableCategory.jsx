import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

const ClickableCategory = ({catName, subName, subSubName}) => {
    // let subSubName;
    // if (subName.includes('__')) {
    //     subSubName = subName.split('__')[1].split('-').join(' ');
    // }
    return (
        <Link href={`/category/${catName}/${subName}/${subSubName ? subSubName : ''}`} key={uuidv4()}>
            <div className="flex flex-row w-full items-center" key={uuidv4()}>
                <h4 className=" capitalize text-lg" key={uuidv4()}>
                    {
                        subSubName ? subSubName.split('-').join(' ') : subName.split('-').join(' ')
                    }
                </h4>

            </div>
        </Link>
    )
} 

export default ClickableCategory