import { Product } from '@/utils/models/productModel';

const getProducts = async (query) => {
        
    try {
        const products = await Product.find(query)
        
        return products
        
    } catch (error) {
        // console.log(error);
        return error
    }
}

export default getProducts;