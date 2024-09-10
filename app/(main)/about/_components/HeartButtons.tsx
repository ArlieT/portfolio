'use client';

import { PhotosFormData, updateLikeStatus } from '@/actions/photos';
import { useEffect, useOptimistic, useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

function HeartButtons({ id, count }: { id: number; count: number }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [like, addOptiLike] = useOptimistic<PhotosFormData, PhotosFormData>(
    { id, status: 'increment', count }, // Using property shorthand
    (state, newData) => ({
      ...state,
      ...newData,
    }),
  );

  const formAction = async () => {
    setIsLoading(true);
    const status: 'increment' | 'decrement' = isClicked
      ? 'decrement'
      : 'increment';

    try {
      const updatedCount = status === 'increment' ? count + 1 : count - 1;
      await updateLikeStatus({ id, status, count: updatedCount });
      addOptiLike({ id, status, count: updatedCount });
      setIsClicked(status === 'increment');
    } catch (error) {
      console.error('Error updating like status', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem(`${id}`)) {
      setIsClicked(true);
    }
  }, [id]);

  return (
    <form
      onDoubleClick={formAction}
      className="group absolute h-full w-full cursor-pointer overflow-hidden"
    >
      <div className="absolute bottom-0 right-4 z-0 flex translate-x-[115%] items-center justify-center opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-90 lg:bottom-2">
        <button
          type="button"
          onClick={formAction}
          className="overlay-invert group inset-0 m-auto flex w-fit select-none items-center justify-center gap-x-2 p-2"
        >
          <span
            id="heart-title"
            className="hidden text-sm opacity-30 group-hover:block"
          >
            Double tap to heart
          </span>
          <input
            type="text"
            name="like_counts"
            value={like.count || 0}
            className="w-[20px] min-w-0 max-w-xs bg-transparent text-center focus:outline-none"
            readOnly
          />
          {isClicked ? (
            <FaHeart size={22} color="#f3f2f9" />
          ) : (
            <FaRegHeart
              size={22}
              className={isLoading ? 'animate-pulse' : ''}
            />
          )}
        </button>
      </div>
    </form>
  );
}
export default HeartButtons;
