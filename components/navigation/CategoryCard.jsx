import Link from "next/link"
import { v4 as uuidv4 } from 'uuid';
// import { useRouter } from "next/navigation";

const CategoryCard = ({categoryObject}) => {
    const cat = encodeURIComponent(categoryObject?.name)
    // const router = useRouter();
  return (
    <div className="w-64 h-90 m-4 cursor-pointer 
    flex flex-col items-end justify-end">
      <a href={`/categories/${cat}`}>
        <img src={categoryObject.image} className="w-64 h-90 "/> 
        <p className="font-bold w-full text-center text-xl black bg-white capitalize">
          {categoryObject?.name?.split('-').join(' ')}
        </p>
      </a>
    </div>
  )
}

export default CategoryCard