'use client';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

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

function FadeUp({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsInView] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsInView(true);
    }
  }, [isInView, isVisible]);
  return (
    <motion.div
      ref={ref}
      className="custom-shadow relative mx-auto h-full w-full overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
