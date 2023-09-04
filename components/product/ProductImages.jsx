import { v4 as uuidv4 } from 'uuid';

const ProductImages = ({images,mainImg,setMainImg,name}) => {
    return (
        <div key={uuidv4()} className='flex lg:flex-row flex-col-reverse items-center justify-center lg:w-1/2 pt-10 '>

            <div key={uuidv4()} className='flex lg:flex-col m-5'>
                {
                    images?.length < 2 ? null : images
                    ?.map((img, index) => {
                        return <img
                        key={uuidv4()}
                            
                            src={img}
                            alt={name}
                            onClick={() => setMainImg(img)}
                            className='w-24 h-24 cursor-pointer hover:opacity-50 hover:object-cover object-contain m-2 mr-5 wrap'/>
                    })
                }
            </div>
            <img src={mainImg} alt={name} className='w-96 h-96'/>
        </div>
    )
}

export default ProductImages