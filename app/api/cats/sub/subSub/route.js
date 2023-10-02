import {NextResponse} from "next/server"
import {Category} from "@/utils/models/categoreyModel"
import {Product} from "@/utils/models/productModel";
import getOneProduct from "@/functions/getOneProduct";


const POST = async (req) => {

    try {
        const request = await req.json();
        console.log("🚀 ~ file: route.js:10 ~ POST ~ request:", request)
        let products = [];
        const categories = await Category.find(request)
        for (let index = 0; index < categories.length; index++) {
            const element = categories[index];
            const product = await getOneProduct({subSubCategory: element.subSubCategories.name});
            products.push(product)
        }

        return NextResponse.json({categories, products})

    } catch (error) {
        // console.log(error);
        return NextResponse.json({error: error.message})
    }
}

export {
    POST
}