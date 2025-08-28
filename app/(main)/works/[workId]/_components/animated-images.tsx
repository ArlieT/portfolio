'use client';
import FadeUp from '@/components/FadeUp';
import Image from 'next/image';

type Props = {
  images: string[] | undefined;
};

const AnimatedImages = ({ images }: Props) => {
  if (!images) return null;

  return (
    <div className="mx-auto flex flex-col items-center justify-center space-y-10 md:w-[70%]">
      {images.map((image, index) => (
        <FadeUp key={index}>
          <Image
            src={image}
            alt="arlie"
            width={1000}
            height={1000}
            className="mx-auto h-full w-full object-cover object-center outline"
          />
        </FadeUp>
      ))}
    </div>
  );
};

export default AnimatedImages;
