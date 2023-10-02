import {NextResponse} from "next/server"
import {Category} from "@/utils/models/categoreyModel"
import getOneProduct from "@/functions/getOneProduct"
import { connectToDB } from "@/utils/database"

const POST = async (req) => {

    try {
        await connectToDB()
        const request = await req.json();
        console.log("🚀 ~ file: route.js:10 ~ POST ~ request:", request)
        let products = [];
        const categories = await Category.find(request)
        for (let index = 0; index < categories.length; index++) {
            const element = categories[index];
            const product = await getOneProduct({category: element.name});
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