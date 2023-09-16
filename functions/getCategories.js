import { Category } from '@/utils/models/categoreyModel';


  const getCategories = async (query) => {
        
    try {
        const categories = await Category.find(query)

        return categories
        
    } catch (error) {
        // console.log(error);
        return error
    }
}

export default getCategories;
