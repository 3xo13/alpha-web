import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
  return (
    <div key={uuidv4()} className='flex-row-center h-96 red'>
        <div key={uuidv4()} className='slide w-screen h-72 green flex flex-row '>
            <div key={uuidv4()} className='h-full w-36 red flex-col-center mx-3'>
                <div key={uuidv4()}>
                    <img className="w-34 h-auto" src='/assets/projects/albawani/logo.png'  />
                </div>
                <div key={uuidv4()}>
                    <img className="w-34 h-auto" src='/assets/projects/albawani/kaust_housing.jpg'  />
                </div>
                <div key={uuidv4()}>
                    <p className="capitalize mt-1">kaust housing</p>
                </div>
            </div>
            <div key={uuidv4()} className='h-full w-36 red flex-col-evenly mx-3'>
                <div key={uuidv4()}>
                    <img className="w-34 h-auto" src='/assets/projects/alorini/logo.png' />
                </div>
                <div key={uuidv4()}>
                    <img className="w-34 h-auto" src='/assets/projects/alorini/Schools_projects.jpg'  />
                </div>
                <div key={uuidv4()}>
                    <p className="capitalize mt-1">kaust housing</p>
                </div>
            </div>
        </div>
        <div key={uuidv4()}></div>
    </div>
  )
}

export default Projects