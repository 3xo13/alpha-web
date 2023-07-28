import { v4 as uuidv4 } from 'uuid';
import ClickableCategory from "@/components/navigation/ClickableCategory";
import Link from 'next/link';

const  ProductsNavigation = async ({TreeData}) => {
   

 const categories = TreeData.map((category, index) => {
  // console.log(category);
    return (
      <div key={uuidv4()} className="group w-1/4 h-12 text-center flex justify-evenly 
      items-center text-lg cursor-pointer hover:bg-gray-100 lg:flex" 
     >
        <Link href={`/categories/${category.name}`} key={uuidv4()}>
          <p className="flex capitalize">{category.name.split('-').join(' ')}</p>
        </Link>
        <div
                    key={uuidv4()}
                        // sub categories
                        className={`absolute top-12 
                    ${index === 0
                            ? 'ml-10'
                            : ''}
                    opacity-90
                    `}>

                      {category.subCategories.map((subCategory, i) => {
                        
                        return(
                          <div
                                            key={uuidv4()}
                                                className={`min-w-fit 
                                            group-hover:block 
                                            hover:block left-8 
                                             cursor-pointer 
                                            hover:bg-gray-100 
                                            bg-white 
                                            p-2 hidden
                                            group/sub                         
                                            `}>
                                              {subCategory.subSubCategories.length === 0 ? (
                                              <>
                                              <ClickableCategory key={uuidv4()} catName={category.name} subName={subCategory.name} />
                                              </>) : (
                                              <>
                                              <div className="
                                              flex flex-row w-full items-center group/sub
                                              " 
                                              key={uuidv4()}
                                              >
                                                <Link href={`/categories/${category.name}/${subCategory.name}`} >
                                                <p>{subCategory.name}</p>
                                                </Link>
                                                <img src='/assets/icons/down-arrow.png' alt="arrow down" className="w-3 h-3 mt-1 ml-1"/>
                                                <div key={uuidv4()} className="min-w-fit 
                                                    absolute
                                                    right-56
                                                    hidden
                                                    group-hover/sub:block
                                                    hover:block    
                                                    w-56
                                                    bg-white
                                                    flex flex-row w-full items-center 
                                                    p-3
                                                    ">
                                                {subCategory.subSubCategories.map((subSub, i) => {
                                                  return(
                                                    <div key={uuidv4()}>
                                                      <ClickableCategory catName={category.name} subName={subCategory.name} subSubName={subSub.name} />
                                                    </div> 
                                                  )
                                                })}</div>
                                              </div>
                                              
                                              </>)}
                                                
                                                
                                            </div>
                        )
                      })}
                    </div>
      </div>
    )
  });
  

  
  return (
        <div className="group flex flex-col" key={uuidv4()}>
            <div key={uuidv4()} className="w-screen flex drop-shadow-2xl mt-2">
                {categories}
            </div>

        </div>

    )
}

export default ProductsNavigation

