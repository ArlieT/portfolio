'use client';

import { updateLikeStatus } from '@/api-calls/photos';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

function HeartButtons({
  id,
  count,
  color,
  setCurrentBg,
}: {
  id: number;
  count: number;
  color: [number, number, number];
  setCurrentBg: Dispatch<SetStateAction<[number, number, number]>>;
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleHeart = async () => {
    let status: 'increment' | 'decrement' = 'increment';
    if (isClicked) {
      status = 'decrement';
      sessionStorage.removeItem(`${id}`);
    }
    sessionStorage.setItem(`${id}`, 'false');

    try {
      setIsLoading(true);
      const response = await updateLikeStatus(id, status);

      if (response?.data) {
        setCurrentBg(color);
        setIsClicked(!isClicked);
      } else {
        throw Error('error updating likes');
      }
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // console.log(sessionStorage.getItem(`${id}`));
    if (sessionStorage.getItem(`${id}`)) {
      setIsClicked(true);
    }
  }, []);

  return (
    <div
      data-title="double tap to heart"
      onDoubleClick={handleHeart}
      className="group absolute h-full w-full cursor-pointer overflow-hidden"
    >
      <div className="absolute bottom-0 right-4 z-0 flex translate-x-[115%] items-center justify-center opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-90 lg:bottom-2">
        <button
          onClick={handleHeart}
          type="button"
          className="overlay-invert group inset-0 m-auto flex select-none items-center justify-center gap-x-2 p-2"
        >
          <span
            id="heart-title"
            className="hidden text-sm opacity-30 delay-300 group-hover:block"
          >
            dobule tap to heart
          </span>
          <span className="text-lg font-bold">{count} </span>
          {isClicked ? (
            <FaHeart size={22} color="#f3f2f9" />
          ) : (
            <FaRegHeart
              size={22}
              className={isLoading ? 'animate-pulse' : ''}
            />
          )}
          {isError ? <small>error updating</small> : null}
        </button>
      </div>
    </div>
  );
}

export default HeartButtons;
