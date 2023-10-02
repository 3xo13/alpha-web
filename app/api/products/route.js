// import { connectToDB } from '@/utils/database';
import {Product} from '@/utils/models/productModel';
import {NextResponse} from 'next/server';

export async function POST(request) {
    try {

        const req = await request.json();

        const name = decodeURIComponent(
            req
                ?.name
        )
        const category = req
            ?.category

        if (!name || !category) 
            return NextResponse.json({
                error: 'name and category are required'
            }, {status: 400})

        const product = await Product.findOne({name, category})
        return NextResponse.json({product})
    } catch (error) {

        return NextResponse.json({error: error.message})
    }
}