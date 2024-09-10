'use client';

import { cn } from '@/_util/helpers';
import { Photos } from '@prisma/client';
import Image from 'next/image';
import { Fragment } from 'react';
import HeartButtons from './HeartButtons';

function PhotoGrid({ photos, error }: { photos: Photos[]; error: string }) {
  const testGrid: Record<number, string> = {
    1: 'col-start-1 row-start-1',
    2: 'col-start-2 row-start-1',
    3: 'col-start-3 row-start-1 row-end-3 row-span-2',
    4: 'col-start-1 row-start-2',
    5: 'col-start-2 row-start-2',
    6: 'col-start-1 row-start-3',
    7: 'col-start-2 col-end-3 row-start-3',
  };

  return (
    <div
      className={cn(
        'c/grid-rows-4 mx-auto flex h-full grid-cols-3 flex-col gap-5 overflow-hidden p-5 lg:grid',
      )}
    >
      {error && <h1>Oops! Something went wrong.</h1>}
      {photos.length ? (
        photos?.map((file, index) => (
          <Fragment key={file.photosUrl}>
            <div
              className={cn(
                'group relative z-10 flex aspect-custom h-full min-h-[200px] w-full select-none items-center justify-center object-cover object-center bg-blend-normal md:aspect-square lg:min-h-0',
                testGrid[index + 1],
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
            </div>
          </Fragment>
        ))
      ) : (
        <h1>No photos available</h1>
      )}
    </div>
  );
}

export default PhotoGrid;
