import {connectToDB} from '@/utils/database';
import {Product} from '@/utils/models/productModel';
import {NextResponse} from 'next/server';

export async function POST(request) {
    try {
        const res = await request.json();
        const namePart = res
            .query
            .split('-')
            .join(' ')
        
        // await connectToDB();
        // Use a regular expression to perform a case-insensitive search
        const regexQuery = new RegExp(namePart, 'i');

        // Search for documents that have 'query' in either 'partNumber' or 'name'
        const matchingProducts = await Product.find({
            $or: [
                {
                    partNumber: regexQuery
                }, {
                    name: regexQuery
                },{
                    "options.tables.tableContent.values": regexQuery
                }
            ]
        }); // const products = await Product.find(query);
        console.log(matchingProducts);
        return NextResponse.json({products: matchingProducts})
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: error.message})
    }

}