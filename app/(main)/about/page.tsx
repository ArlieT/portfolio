import Underline from '@/components/Helpers';
import Link from 'next/link';
import { getPhotos } from '@/actions/photos';
import PhotoGrid from './_components/PhotoGrid';

export const revalidate = 3600;

const page = async () => {
  const { data: photos, error } = await getPhotos();

  return (
    <div className="relative flex flex-col gap-x-2 p-4 pb-8 will-change-scroll md:p-8 lg:h-full lg:flex-row">
      <div className="bg-foreground/30 c/lg:h-[calc(100vh-200px)] w-ful left-0 top-0 mx-auto p-[15px] text-base transition-all md:w-[80%] md:text-lg lg:sticky lg:min-w-0 lg:max-w-[20%] lg:text-xl">
        <div className="flex w-auto flex-col items-start text-balance text-center font-feixenBold text-lg md:text-xl">
          <div className="flex w-fit gap-x-2 whitespace-nowrap">
            Hey, I&apos;m
            <div className="relative mx-auto w-fit overflow-hidden">
              <h1>Arlie Torres</h1>
              <div
                className="object-fit absolute bottom-0 mx-auto w-fit"
                style={{
                  backgroundImage: "url('/svg/wave-light.svg')",
                  opacity: 0.5,
                  width: ' 100%',
                  height: '50%',
                  backgroundPositionX: 0,
                  backgroundPositionY: 0,
                }}
              />
            </div>
          </div>
          developer from Philippines
        </div>
        <br />

        <div className="relative h-fit w-full">
          <p className="c/font-variation leading-relaxed tracking-wide md:text-sm lg:text-lg [&>span]:[display:block]">
            <span className="font-bold opacity-55">About Me</span>
            <span>Born in 2000</span>
            <span>in Sanfernando, Philippines</span>
            <span>Web Developer</span>
            <span>I am pursuing new expressions </span>
            <span>through my passion/experiments.</span>
          </p>
        </div>
        <br />
        <p className="eading-relaxed w-full whitespace-break-spaces text-wrap text-left tracking-wide md:text-sm lg:text-lg">
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

      <div className="c/overflow-hidden mx-auto h-full w-full md:w-[80%]">
        <PhotoGrid photos={photos} error={error || ''} />
      </div>
    </div>
  );
};

export default page;
