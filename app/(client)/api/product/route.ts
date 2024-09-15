import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const productId = url.searchParams.get('id'); // Assuming you're passing the product ID as a query parameter
    console.log("productId: "+productId)
    if (!productId) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    const productData = await prisma.product.findFirst({
      where: {
        id: productId
      },
      include: {
        images: true,
        sizes: true,
        collection: true,
        category: true,
      }
    });

    if (!productData) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
console.log("product Data: "+productData)
    return NextResponse.json(productData);
  } catch (e) {
    console.error('Error fetching product data:', e);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
