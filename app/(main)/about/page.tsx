import Image from 'next/image';
import Underline from '@/components/Helpers';
import Link from 'next/link';
import { Fragment } from 'react';
import { cn } from '@/_util/helpers';
import HeartButtons from './_components/HeartButtons';
import { getPhotos } from '@/api-calls/photos';
import { RiH1 } from 'react-icons/ri';

const page = async () => {
  const { data: photos, error } = await getPhotos();

  const testGrid: Record<number, string> = {
    1: 'col-start-1 row-start-1 ',
    2: 'col-start-2 row-start-1 ',
    3: 'col-start-3 row-start-1 row-end-3 row-span-2 ',
    4: 'col-start-1 row-start-2',
    5: 'col-start-2 row-start-2',
    6: 'col-start-1 row-start-3',
    7: 'col-start-2 col-end-4 row-start-3',
  };

  console.log(photos);

  return (
    <div className="relative flex flex-col gap-x-2 p-4 pb-8 md:h-full md:p-8 lg:flex-row">
      <div className="bg-foreground/30 c/lg:h-[calc(100vh-200px)] w-ful left-0 top-0 mx-auto p-[15px] text-base transition-all md:w-[80%] md:text-lg lg:sticky lg:h-auto lg:min-w-0 lg:max-w-[20%] lg:text-xl">
        <h1 className="text-balance text-left font-feixenBold text-lg md:text-xl">
          Hey, I&apos;m Arlie Torres a web developer from Philippines
        </h1>
        <br />
        <p className="w-full whitespace-break-spaces text-wrap text-left">
          aside from making websites/apps I also like taking pictures.
        </p>
        <div className="mt-4 flex flex-col items-start justify-center gap-x-5">
          <div className="w-fit">
            <Link
              href="/arlie_torres.pdf"
              target="_blank"
              className="font-variation group relative flex w-fit items-center gap-2 gap-x-2 overflow-x-hidden pb-1 text-base md:text-lg"
            >
              <p>↓ </p>
              <h1>resume</h1>
              <Underline className="absolute bottom-0.5" />
            </Link>
          </div>
          <div className="w-fit">
            <Link
              target="_blank"
              href={process.env.NEXT_PUBLIC_GITHUB_URL || ''}
              className="font-variation group relative flex w-fit items-center gap-2 gap-x-2 overflow-x-hidden pb-1 text-base md:text-lg"
            >
              <span className="mr-2">↗</span>
              <span>Github</span>
              <Underline className="absolute bottom-0.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto h-full w-full overflow-hidden md:w-[80%]">
        <div className="mx-auto flex h-full grid-cols-3 grid-rows-3 flex-col gap-5 overflow-hidden lg:grid">
          {error && <h1>Oops! </h1>}
          {photos.length ? (
            photos?.map((file, index) => {
              return (
                <Fragment key={file.photosUrl}>
                  <div
                    key={file.photosUrl}
                    className={cn(
                      `group relative z-10 h-full min-h-[200px] w-full object-cover object-center md:min-h-0 lg:aspect-square lg:min-h-0`,
                      testGrid[index + 1],
                    )}
                  >
                    <Image
                      src={`/images/photography/${file.photosUrl}`}
                      alt={`/images/photography/${file.photosUrl}`}
                      fill
                      className="mt-4 block h-full w-full object-cover object-center"
                    />
                    <div className="absolute h-full w-full overflow-hidden">
                      <HeartButtons id={file.id} count={Number(file.count)} />
                    </div>
                  </div>
                </Fragment>
              );
            })
          ) : (
            <h1>no photos</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
