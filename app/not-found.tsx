import Underline from '@/components/Helpers';
import Link from 'next/link';
import React from 'react';

const NotFound = () => (
  <div className="font-variatio flex h-full flex-col items-center justify-center gap-y-10 text-xl tracking-wider md:text-5xl">
    <h2 className="font-variation-bold font-feixenBold">ERROR</h2>
    <h1 className="text-outline font-feixenBold text-[6rem] md:text-[12rem]">
      404
    </h1>
    <Link
      href="/"
      className="group relative flex items-center gap-2 overflow-x-hidden pb-1 text-lg md:text-2xl"
    >
      {' '}
      → go back home
      <Underline className="absolute bottom-0.5" />
    </Link>
  </div>
);
export default NotFound;
