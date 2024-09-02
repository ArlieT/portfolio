import Image from 'next/image';
import Underline from '@/components/Helpers';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { Fragment } from 'react';

const page = () => {
  const dir = path.join(process.cwd(), 'public/images/photography');
  let files: string[] = [];

  try {
    files = fs.readdirSync(dir).filter(
      (file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file),
      // Filter only image files (adjust extensions as needed)
    );
  } catch (error) {
    console.error('Error reading directory:', error);
  }

  console.log({ files });
  return (
    <div className="relative flex h-auto flex-col p-4 md:flex-row md:p-8">
      <div className="bg-foreground/30 sticky left-0 top-0 h-fit w-full p-[15px] text-base transition-all md:h-[calc(100vh-200px)] md:w-[20%] md:text-lg lg:text-xl">
        <h1 className="text-center font-feixenBold">
          Hey, I&apos;m Arlie Torres a web developer from Philippines
        </h1>
        <br />
        <p className="w-full whitespace-break-spaces text-wrap">
          aside from making websites/apps I also like taking pictures.
        </p>
        <Link
          href="/arlie_torres.pdf"
          target="_blank"
          className="font-variation group relative mt-4 flex w-fit items-center gap-2 gap-x-2 overflow-x-hidden pb-1 text-base md:text-lg"
        >
          <p>↓ </p>
          <h1>resume</h1>
          <Underline className="absolute bottom-0.5" />
        </Link>
      </div>

      <div className="mx-auto h-full md:w-[60%] lg:w-[50%]">
        <div className="grid grid-cols-8 grid-rows-8 gap-[15px]">
          {files.map((file, index) => {
            const grids: Record<number, string> = {
              1: 'col-start-1 col-end-3 row-start-1 row-end-3 ',
              2: 'col-start-3 col-end-5 row-start-1 row-end-3 ',
              3: 'col-start-5 col-end-9 row-start-1 row-end-6 ',
              4: 'col-start-1 col-end-5 row-start-3 row-end-6 ',
              5: 'col-start-1 col-end-5 row-start-6 row-end-9',
              6: 'col-start-5 col-end-9 row-start-6 row-end-9',
            };

            return (
              <Fragment key={file}>
                <div
                  key={file}
                  className={`${grids[index + 1]} relative h-full w-full`}
                >
                  <Link href={`/about/photo/${file}`}>
                    <Image
                      src={`/images/photography/${file}`}
                      alt={file}
                      height={500}
                      width={500}
                      className="mt-4 block h-full w-full object-cover align-middle"
                    />
                  </Link>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
