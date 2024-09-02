import Image from 'next/image';
import React from 'react';

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="relative z-[999999999999] h-screen w-full bg-blue-700">
      <div className="blue-red-500 absolute inset-0 m-auto border text-foreground">
        myneighbhour : {id}
        <div className="relative">
          <Image src={`/images/photography/${id}.jpg`} alt={id} fill />
        </div>
      </div>
    </div>
  );
}
