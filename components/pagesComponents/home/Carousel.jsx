import {v4 as uuidv4} from 'uuid';
// import links from '@/public/links/projectsLinks';

const Carousel = ({links, title, bg, displayName}) => {

    const images = links.map(link => {
        const name = link
            .slice(link.lastIndexOf('/') + 1, -4)
            .split('_')
            .join(' ');
        return (
            <div className='w-40 h-40 mx-3 flex-col-center' key={uuidv4()}>
                <img src={link} alt="project reference image" className='w-40 h-auto mx-2 '/>
                {title == 'Reference Projects' && <p className='capitalize text-slate-100 text-lg w-full text-center'>{name}</p>}
            </div>
        )
    })

    return (
        <div
            className={`${bg} flex-center mt-10 pt-10 bg-cover bg-center bg-fixed bg-no-repeat `}>
            <div className='w-[80vw] overflow-hidden'>
                <div className='w-full h-16 '>
                    <h3
                        className={`flex-row-center flex-nowrap text-5xl font-bold text-center title capitalize 
                        text-bold before-after min-w-max ${title == 'Reference Projects'
                            ? 'text-white before:border-white after:border-white'
                            : 'text-black  before:border-black after:border-black '}`}>{title}</h3>
                </div>
                <div key={uuidv4()} className='flex-row-center h-80 w-fit'>

                    <div
                        key={uuidv4()}
                        className=' w-fit h-72 flex flex-row items-center justify-start carousel'>
                        {images}
                    </div>
                    <div
                        key={uuidv4()}
                        className=' w-fit h-72 flex flex-row items-center justify-start carousel'>
                        {images}
                    </div>
                    <div key={uuidv4()}></div>
                </div>

            </div>
        </div>
    )
}

export default Carousel