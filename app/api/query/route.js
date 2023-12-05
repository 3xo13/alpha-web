import {connectToDB} from '@/utils/database';
import {Product} from '@/utils/models/productModel';
import {NextResponse} from 'next/server';

export async function POST(req) {
    try {
        const request = await req.json();
        const namePart = decodeURIComponent(
            decodeURIComponent(decodeURIComponent(request.query))
        )
        const dashedName = namePart
            .trim()
            .split(' ')
            .join('-')
        await connectToDB()

        // Use a regular expression to perform a case-insensitive search
        function escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        const escapedNamePart = escapeRegExp(namePart);

        const regexQuery = new RegExp(escapedNamePart, 'i');
        const dashedRegexQuery = new RegExp(dashedName, 'i');

        const matchingProducts = await Product.find({
            $or: [
                {
                    partNumber: regexQuery
                }, {
                    partNumber: dashedRegexQuery
                }, {
                    name: regexQuery
                }, {
                    name: dashedRegexQuery
                }, {
                    "options.tables.tableContent.values": regexQuery
                }, {
                    "options.tables.tableContent.values": dashedRegexQuery
                }
            ]
        });
        return NextResponse.json({products: matchingProducts})
    } catch (error) {
        return NextResponse.error()
    }

}