import { connectToDB } from '@/utils/database';
import { Product } from '@/utils/productModel';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // get name and category from request params
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')
    const category = searchParams.get('category')

    if (!name || !category) return NextResponse.json({ error: 'name and category are required' }, { status: 400 })
    await connectToDB(); // connect to dataBase
    const product = await Product.findOne({ name, category })
    return NextResponse.json({ product })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message })
  }
}