import Underline from '@/components/Helpers';
import Link from 'next/link';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { getPhotos } from '@/actions/photos';
import PhotoGrid from './_components/PhotoGrid';
import AboutMe from '@/components/AboutMe';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'About me',
};

async function About() {
  const { data: photos, error } = await getPhotos();

  // Log for debugging in production
  console.log('Photos loaded:', photos?.length || 0, 'Error:', error);

  return (
    <div className="relative flex flex-col gap-x-2 p-4 pb-8 will-change-scroll md:h-[calc(100dvh-130px)] md:p-8 lg:h-full lg:flex-row">
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

        <AboutMe />
        <br />
        <p className="eading-relaxed w-full whitespace-break-spaces text-wrap text-left tracking-wide md:text-sm lg:text-lg">
          aside from making websites/apps I also like taking pictures.
        </p>
        <div className="mt-4 flex flex-col items-start justify-center">
          <div className="w-fit">
            <Link
              href="/arlie_torres.pdf"
              target="_blank"
              className="font-variation group relative flex w-fit items-center gap-2 gap-x-2 overflow-x-hidden pb-1 text-base md:text-lg"
            >
              <p className="w-[14px]">↓ </p>
              <h1>Resume</h1>
              <Underline className="absolute bottom-0.5" />
            </Link>
          </div>
          <div className="w-fit">
            <Link
              target="_blank"
              href={process.env.NEXT_PUBLIC_GITHUB_URL || ''}
              className="font-variation group relative flex w-fit items-center gap-2 gap-x-2 overflow-x-hidden pb-1 text-base md:text-lg"
            >
              <span className="w-[14px] lg:mr-0">↗</span>
              <span>Github</span>
              <Underline className="absolute bottom-0.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="c/overflow-hidden mx-auto h-full w-full md:w-[80%]">
        <Suspense fallback={<div>Loading photos...</div>}>
          <PhotoGrid photos={photos || []} error={error || ''} />
        </Suspense>
      </div>
    </div>
  );
}

export default About;
