import {connectToDB} from '@/utils/database';
import {Product} from '@/utils/models/productModel';
import {NextResponse} from 'next/server';

export async function POST(req) {
    try {
        const request = await req.json();
        console.log("🚀 ~ file: route.js:8 ~ POST ~ request:", request)
        const namePart = decodeURIComponent(decodeURIComponent(decodeURIComponent(request.query)))
        console.log("🚀 ~ file: route.js:9 ~ POST ~ namePart:", namePart)
        await connectToDB()

        // Use a regular expression to perform a case-insensitive search
        const regexQuery = new RegExp(namePart, 'i');
        console.log("🚀 ~ file: route.js:13 ~ POST ~ regexQuery:", regexQuery)

        // Search for documents that have 'query' in either 'partNumber' or 'name'
        const matchingProducts = await Product.find({
            $or: [
                {
                    partNumber: regexQuery
                }, {
                    name: regexQuery
                }, {
                    "options.tables.tableContent.values": regexQuery
                }
            ]
        });
        console.log("🚀 ~ file: route.js:29 ~ POST ~ matchingProducts:", matchingProducts)
        return NextResponse.json({products: matchingProducts})
    } catch (error) {
        return NextResponse.error()
    }

}