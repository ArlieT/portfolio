'use server';
import { Photos, Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const getPhotos = async (): Promise<{
  data: Photos[];
  error: string;
}> => {
  const baseURL =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_BASE_URL
      : 'http://localhost:3000';

  try {
    const response = await fetch(baseURL + '/api/photos', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { data: [], error: 'No data' };
  }
};

export const updateLikeStatus = async (
  id: number,
  status: 'increment' | 'decrement',
): Promise<{
  data?: Photos[];
  error: string;
}> => {
  const baseURL =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_BASE_URL
      : 'http://localhost:3000';
  try {
    const response = await fetch(baseURL + '/api/photos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, status }),
    });

    const data = await response.json();
    revalidatePath('/about');
    return data;
  } catch (error) {
    console.log(error);
    return { data: undefined, error: 'No data' };
  }
};
