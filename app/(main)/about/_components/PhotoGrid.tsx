'use client';

import { cn } from '@/_util/helpers';
import { Photos } from '@prisma/client';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { motion, Transition, Variants } from 'framer-motion';
import HeartButtons from './HeartButtons';

function PhotoGrid({ photos, error }: { photos: Photos[]; error: string }) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (photoUrl: string) => {
    setImageErrors((prev) => ({ ...prev, [photoUrl]: true }));
  };
  console.info({ photos });

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
    <div
      className={cn('ap-2 ml-6 md:ml-0 md:columns-[310px] xl:columns-[350px]')}
    >
      {error && (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <h1 className="mb-2 text-lg font-bold text-red-500">
            Oops! Something went wrong.
          </h1>
          <p className="text-sm opacity-70">{error}</p>
        </div>
      )}
      {!error && !photos?.length && (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <h1 className="mb-2 text-lg font-bold">No photos available</h1>
          <p className="text-sm opacity-70">Check back later for new photos!</p>
        </div>
      )}
      {!error && photos?.length > 0
        ? photos?.map((file, index) => (
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
                {imageErrors[file.photosUrl || ''] ? (
                  <div className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-800">
                    <p className="text-sm text-gray-500">
                      Failed to load image
                    </p>
                  </div>
                ) : (
                  <Image
                    src={file.photosUrl || ''}
                    alt={file?.photosUrl || 'Photo'}
                    fill
                    sizes="(100vw - 2rem) 100vw"
                    className="block aspect-square h-full w-full object-cover object-center md:object-bottom"
                    onError={() => handleImageError(file.photosUrl || '')}
                  />
                )}
                <HeartButtons id={file.id} count={Number(file.count)} />
              </motion.div>
            </Fragment>
          ))
        : null}
    </div>
  );
}

export default PhotoGrid;
