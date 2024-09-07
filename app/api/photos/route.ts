import prisma from '@/_lib/prisma';
import fs from 'fs';
import path from 'path';

export async function GET() {
  let files: string[] = [];
  const dir = path.join(process.cwd(), 'public/images/photography');

  try {
    files = fs
      .readdirSync(dir)
      .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));

    const photos = await prisma.photos.findMany({
      orderBy: {
        photosUrl: 'asc',
      },
    });

    console.log(files);
    return new Response(JSON.stringify({ data: photos }), {
      status: 200,
    });
  } catch (error) {
    console.error('GET error: ', error);
    return new Response(JSON.stringify({ message: String(error) }), {
      status: 500,
    });
  }
}

export async function PUT(request: Request) {
  try {
    const { id: number, status } = await request.json();
    const id = Number(number);
    console.log({ status });

    if (!id || Number.isNaN(id)) {
      return Response.json(
        { message: 'No id provided or not a number' },
        { status: 400 },
      );
    }
    const photo = await prisma.photos.update({
      where: { id },
      data: {
        count: status === 'increment' ? { increment: 1 } : { decrement: 1 },
      },
    });

    return Response.json({ data: photo, message: 'Photo updated' });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
