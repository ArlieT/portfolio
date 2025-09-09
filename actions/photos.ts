'use server';

import { Photos, Prisma } from '@prisma/client';
import { revalidatePath, revalidateTag } from 'next/cache';
import prisma from '@/_lib/prisma';

export const getPhotos = async (): Promise<{
  data: Photos[];
  error: string | null;
}> => {
  try {
    const photos = await prisma.photos.findMany({
      orderBy: {
        photosUrl: 'asc',
      },
    });

    console.log(`Found ${photos.length} photos`);
    return { data: photos, error: null };
  } catch (error) {
    console.error(`Database error: ${error}`);
    return { data: [], error: 'Failed to fetch photos from database' };
  }
};

export type PhotosFormData = {
  id: number;
  count: number;
  status: string;
};

export const updateLikeStatus = async (prev: PhotosFormData) => {
  try {
    const photo = await prisma.photos.findUnique({
      where: { id: prev.id },
    });

    if (!photo) {
      return { data: undefined, error: 'Photo not found' };
    }

    const updatedPhoto = await prisma.photos.update({
      where: { id: prev.id },
      data: {
        count: prev.status === 'increment' ? photo.count + 1 : photo.count - 1,
      },
    });

    revalidateTag('posts');
    console.log('Photo updated:', updatedPhoto);
    return { data: updatedPhoto, message: 'Photo updated' };
  } catch (error) {
    console.error('Update error:', error);
    return { data: undefined, error: 'Failed to update photo' };
  }
};
