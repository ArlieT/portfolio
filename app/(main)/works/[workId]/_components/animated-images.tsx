'use client';
import FadeUp from '@/components/FadeUp';
import Image from 'next/image';

type Props = {
  images: string[] | undefined;
};

const AnimatedImages = ({ images }: Props) => {
  if (!images) return null;

  console.log(images);

  return (
    <div className="space-y-10">
      {images.map((image, index) => (
        <FadeUp key={index}>
          <Image
            src={image}
            alt="arlie"
            width={2000}
            height={3000}
            className="aspect-custom h-auto w-full object-cover object-center"
          />
        </FadeUp>
      ))}
    </div>
  );
};

export default AnimatedImages;
