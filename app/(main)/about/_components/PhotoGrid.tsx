'use client';

import { cn } from '@/_util/helpers';
import { Photos } from '@prisma/client';
import ColorThief from 'colorthief';
import Image from 'next/image';
import { Fragment, use, useEffect, useRef, useState } from 'react';
import HeartButtons from './HeartButtons';
import { ThemeContext } from '@/_lib/themeContext';

function PhotoGrid({ photos, error }: { photos: Photos[]; error: string }) {
  const { theme } = use(ThemeContext);
  const [color, setColor] = useState<[number, number, number][]>([]);
  const [currentBg, setCurrentBg] = useState<[number, number, number]>(
    theme === 'light' ? [60, 68, 87] : [43, 43, 51],
  );

  useEffect(() => {
    if (theme) {
      console.log(theme);
      setCurrentBg(theme === 'light' ? [243, 242, 249] : [43, 43, 51]);
    }
  }, [theme]);

  const imgRefs = useRef<Record<number, HTMLImageElement | null>>({});

  useEffect(() => {
    const element = imgRefs.current;

    Object.values(element).forEach((element, index) => {
      if (element) {
        const colorThief = new ColorThief();

        // Function to set color once the image is loaded
        const setColorFromImage = () => {
          const color = colorThief.getColor(element);
          const pallet = colorThief.getPalette(element);
          console.log('Palette:', pallet);
          setColor((colors) => [...colors, color]);
          console.log('Dominant Color:', color);
        };

        // If the image is already loaded, set the color immediately
        if (element.complete) {
          setColorFromImage();
        } else {
          // Otherwise, wait for the image to load
          element.addEventListener('load', setColorFromImage);
        }

        // Cleanup: remove event listener when the component unmounts
        return () => {
          element.removeEventListener('load', setColorFromImage);
        };
      }
    });
  }, []);
  //   background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);

  useEffect(() => {
    console.log('Updated color:', color);
  }, [color]);

  const testGrid: Record<number, string> = {
    1: 'col-start-1 row-start-1',
    2: 'col-start-2 row-start-1',
    3: 'col-start-3 row-start-1 row-end-3 row-span-2',
    4: 'col-start-1 row-start-2',
    5: 'col-start-2 row-start-2',
    6: 'col-start-1 row-start-3',
    7: 'col-start-2 col-end-3 row-start-3',
  };

  //   useEffect(() => {
  //     if (theme) {
  //       document.body.style.backgroundImage = `linear-gradient(to top,
  // 		rgba(${currentBg.join(',')}, 0.5) 50%,
  // 		rgba(${currentBg.join(',')}, 0.8) 90%
  //   )`;
  //     }
  //   }, [currentBg]);

  return (
    <div
      className={cn(
        'c/grid-rows-4 mx-auto flex h-full grid-cols-3 flex-col gap-5 overflow-hidden p-5 lg:grid',
      )}
      style={{
        backgroundImage: `linear-gradient(to top,
        		rgba(${currentBg.join(',')}, 0.5) 80%,
        		rgba(${currentBg.join(',')}, 0.8) 90%
          )`,
      }}
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
                ref={(el) => {
                  if (el) {
                    imgRefs.current[file.id] = el;
                  } else {
                    imgRefs.current[file.id] = null;
                  }
                }}
                src={`/images/photography/${file.photosUrl}`}
                alt={file?.photosUrl!}
                fill
                sizes="(100vw - 2rem) 100vw"
                className="block aspect-square h-full w-full object-cover object-center md:object-bottom"
              />
              <HeartButtons
                id={file.id}
                count={Number(file.count)}
                color={color[index]}
                setCurrentBg={setCurrentBg}
              />
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
