import { Category } from "@/utils/models/categoreyModel";
import { connectToDB } from "@/utils/database";


export default async function getOneCategory(query){
  try {
    await connectToDB();
    const category = await Category.findOne(query)
    return category
  } catch (error) {
    console.log(error);
  }
}
