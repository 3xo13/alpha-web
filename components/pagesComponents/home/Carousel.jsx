import { v4 as uuidv4 } from 'uuid';
// import links from '@/public/links/projectsLinks';

const Carousel = ({links, title, bg, displayName}) => {

    const images = links.map(link => {
        const name = link.slice(link.lastIndexOf('/')+1,-4).split('_').join(' ');
    return(
        <div className='w-40 h-40 mx-3 flex-col-center'>
            <img src={link} alt="project reference image"  className='w-40 h-32 mx-2 '/>
            <p className='capitalize text-slate-100 text-lg w-full text-center'>{name}</p>
        </div>
    )} )

  return (
    <div className={`${bg} mt-10 pt-10 bg-cover bg-center bg-fixed bg-no-repeat`}>
        <div className='w-screen h-16  flex-center bg-white bg-opacity-80'>
            <h3 className='text-4xl font-bold cinzel capitalize text-yellow-700 text-bold'>{title}</h3>
        </div>
        <div key={uuidv4()} className='flex-row-center h-80 w-fit'>

            <div key={uuidv4()} className=' w-fit h-72 flex flex-row items-center justify-start carousel'>
                {images}
            </div>
            <div key={uuidv4()} className=' w-fit h-72 flex flex-row items-center justify-start carousel'>
                {images}
            </div>
            <div key={uuidv4()}></div>
        </div>
    </div>
  )
}

export default Carousel