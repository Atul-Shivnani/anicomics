import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/prisma/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../store/auth";
import { Client } from "pg";

const pgClient = new Client({
  connectionString: process.env.DIRECT_URL,
});
pgClient.connect();

pgClient.query('LISTEN bagUpdate');

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const headers = new Headers({
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache',
  });

  const stream = new ReadableStream({
    start(controller) {
      const handleNotification = async () => {
        console.log('Notification received');
        try {
          const totalQuantity = await prisma.bag.aggregate({
            _sum: {
              quantity: true,
            },
            where: {
              userId: session.user.id,
            },
          });

          const payload = totalQuantity._sum.quantity || 0;
          console.log('Bag count:', payload);
          controller.enqueue(`data: ${payload}\n\n`);
        } catch (error) {
          console.error("Error fetching total quantity:", error);
          controller.error(error);
        }
      };

      pgClient.on('notification', handleNotification);

      req.signal.addEventListener('abort', () => {
        pgClient.removeListener('notification', handleNotification);
        controller.close();
      });
    }
  });

  return new Response(stream, { headers });
}
