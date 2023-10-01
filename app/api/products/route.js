// import { connectToDB } from '@/utils/database';
import { Product } from '@/utils/models/productModel';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // // console.log(new URL(request.url));
    // get name and category from request params
    // const { searchParams } = new URL(request.url)
    // // console.log("🚀 ~ file: route.js:10 ~ GET ~ searchParams:", searchParams)
    
    // const name = searchParams.get('name')
    // // console.log('name', name);
    // const category = searchParams.get('category')
    // // console.log('category', category);
    // // console.log(request);
    const req = await request.json();
    // // console.log("🚀 ~ file: route.js:17 ~ POST ~ req:", req)
    
    const name = decodeURIComponent(req?.name)
    const category = req?.category

    if (!name || !category) return NextResponse.json({ error: 'name and category are required' }, { status: 400 })
    // await connectToDB(); // connect to dataBase
    const product = await Product.findOne({ name, category })
    return NextResponse.json({ product })
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ error: error.message })
  }
}