// File: app/api/bag-count/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../store/auth';

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const totalQuantity = await prisma.bag.aggregate({
      _sum: {
        quantity: true,
      },
      where: {
        userId: session.user.id,
      },
    });

    return new NextResponse(JSON.stringify(totalQuantity._sum.quantity || 0), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching initial bag count:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
