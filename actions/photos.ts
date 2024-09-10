'use server';

import { Photos, Prisma } from '@prisma/client';
import { revalidatePath, revalidateTag } from 'next/cache';

export const getPhotos = async (): Promise<{
  data: Photos[];
  error: string | null;
}> => {
  const baseURL =
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000';

  console.log({ baseURL });

  try {
    const response = await fetch(`${baseURL}/api/photos`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        tags: ['posts'],
      },
    });

    if (!response.ok) {
      console.error(`Error fetching photos: ${response.statusText}`);
      return { data: [], error: `Failed to fetch: ${response.statusText}` };
    }

    const data = await response.json();

    return { data, error: null };
  } catch (error) {
    console.error(`Fetch error: ${error}`);
    return { data: [], error: 'No data available due to an error' };
  }
};

export type PhotosFormData = {
  id: number;
  count: number;
  status: string;
};

export const updateLikeStatus = async (prev: PhotosFormData) => {
  const baseURL =
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000';
  try {
    const response = await fetch(baseURL + '/api/photos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: prev.id, status: prev.status }),
    });

    const data = await response.json();

    revalidateTag('posts');
    console.log({ data });
    return data;
  } catch (error) {
    console.log(error);
    return { data: undefined, error: 'No data' };
  }
};
