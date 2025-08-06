'use client';
import FadeUp from '@/components/FadeUp';
import Image from 'next/image';

type Props = {
  images: string[] | undefined;
};

const AnimatedImages = ({ images }: Props) => {
  if (!images) return null;

  return (
    <div className="mx-auto flex w-[80%] flex-col items-center justify-center space-y-10">
      {images.map((image, index) => (
        <FadeUp key={index}>
          <Image
            src={image}
            alt="arlie"
            width={2000}
            height={3000}
            className="mx-auto aspect-video h-auto w-full object-cover object-center outline"
          />
        </FadeUp>
      ))}
    </div>
  );
};

export default AnimatedImages;
