import { Product, } from "@/utils/models/productModel";
import { connectToDB } from "@/utils/database";


export default async function getOneProduct(query){
  try {
    // await connectToDB();
    const product = await Product.findOne(query)
    return product
  } catch (error) {
    console.log(error);
  }
}
