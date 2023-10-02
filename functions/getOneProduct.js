import {Product} from "@/utils/models/productModel";

export default async function getOneProduct(query) {
    try {
        const product = await Product.findOne(query)
        return product
    } catch (error) {
        console.log(error);
    }
}
