import {v4 as uuidv4} from 'uuid';

const Carousel = ({links, title, bg, displayName}) => {

    const images = links.map(link => {
        const name = link
            .slice(link.lastIndexOf('/') + 1, -4)
            .split('_')
            .join(' ');
        return (
            <div key={uuidv4()} className='w-40 h-40 mx-3 flex-col-center'>
                <img src={link} alt="project reference image" className='w-40 h-auto mx-2 '/> {title == 'Reference Projects' && <p className='capitalize text-slate-100 text-lg w-full text-center'>{name}</p>}
            </div>
        )
    })

    return (
        <div key={uuidv4()}
            className={`${bg} flex-center mt-10 pt-10 bg-cover bg-center bg-fixed bg-no-repeat `}>
            <div className='w-[80vw] overflow-hidden'>
                <div className='w-full h-16 '>
                    <h3
                        className={`flex-row-center flex-nowrap lg:text-5xl text-3xl font-bold text-center title capitalize 
                        text-bold before-after min-w-max ${title == 'Reference Projects'
                            ? 'text-white before:border-white after:border-white'
                            : 'text-black  before:border-black after:border-black '}`}>{title}</h3>
                </div>
                <div className='flex-row-center h-80 w-fit'>

                    <div
                       
                        className=' w-fit h-72 flex flex-row items-center justify-start carousel'>
                        {images}
                    </div>
                    <div
                       
                        className=' w-fit h-72 flex flex-row items-center justify-start carousel'>
                        {images}
                    </div>
                    <div></div>
                </div>

            </div>
        </div>
    )
}

export default Carousel