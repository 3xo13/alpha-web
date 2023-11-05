import {connectToDB} from '@/utils/database';
import {Product} from '@/utils/models/productModel';
import {NextResponse} from 'next/server';

export async function POST(req) {
    try {
        const request = await req.json();
        const namePart = request
            .query
            

        // Use a regular expression to perform a case-insensitive search
        const regexQuery = new RegExp(namePart, 'i');

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
        return NextResponse.json({products: matchingProducts})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }

}