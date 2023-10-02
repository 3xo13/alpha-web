import {Product} from '@/utils/models/productModel';
import {NextResponse} from 'next/server';

export async function POST(request) {
    try {
        const req = await request.json();

        const products = await Product.find(req)
        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}