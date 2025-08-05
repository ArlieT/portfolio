'use client';

import { cn } from '@/_util/helpers';
import { Photos } from '@prisma/client';
import Image from 'next/image';
import { Fragment } from 'react';
import { motion, Transition, Variants } from 'framer-motion';
import HeartButtons from './HeartButtons';

function PhotoGrid({ photos, error }: { photos: Photos[]; error: string }) {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: '',
        ease: 'linear',
        duration: 0.5,
        delay: index * 0.2,
      } as Transition,
    }),
  };

  return (
    <div className={cn('ml-6 columns-[300px] gap-2 md:ml-0')}>
      {error && <h1>Oops! Something went wrong.</h1>}
      {photos?.length ? (
        photos?.map((file, index) => (
          <Fragment key={file.photosUrl}>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={index}
              className={cn(
                'group relative z-10 mb-2 flex aspect-custom h-full min-h-[200px] w-full select-none break-inside-avoid items-center justify-center object-cover object-center bg-blend-normal md:aspect-square lg:min-h-0',
              )}
            >
              <Image
                src={`/images/photography/${file.photosUrl}`}
                alt={file?.photosUrl!}
                fill
                sizes="(100vw - 2rem) 100vw"
                className="block aspect-square h-full w-full object-cover object-center md:object-bottom"
              />
              <HeartButtons id={file.id} count={Number(file.count)} />
            </motion.div>
          </Fragment>
        ))
      ) : (
        <h1>No photos available</h1>
      )}
    </div>
  );
}

export default PhotoGrid;
