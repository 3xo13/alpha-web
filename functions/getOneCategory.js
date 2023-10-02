import {Category} from "@/utils/models/categoreyModel";

export default async function getOneCategory(query) {
    try {

        const category = await Category.findOne(query)
        return category
    } catch (error) {
        console.log(error);
    }
}
