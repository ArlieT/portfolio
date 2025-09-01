import { works } from '@/constants/works';
// import { motion } from 'framer-motion';
import Underline from '@/components/Helpers';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NextProject from './_components/next-project';
import AnimatedImages from './_components/animated-images';

type Props = {
  params: { workId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.workId;

  const currentWork = works.find((work) => work.key === id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: currentWork?.name,
    openGraph: {
      images: [currentWork?.mainImage!, ...previousImages],
    },
  };
}

export default function Page({ params }: Props) {
  // TODO color pallet base on work photo

  console.log('test', params.workId);
  const currentWork = works.find(
    (work) => work.key === decodeURIComponent(params.workId),
  );
  const nextWork = works.find(
    (work) => currentWork && work.id === +currentWork.id + 1,
  );

  // if nextwwork is not found, render the first work
  const nextWorkRepeat = nextWork || works[0];

  return (
    <div className="flex flex-col items-center gap-4 md:gap-6 md:p-0 md:pb-6 md:pt-[500px] lg:pt-[450px]">
      <div className="z-[9999999] mx-auto w-[90%] md:absolute md:-top-[400px] md:w-full lg:-top-96 lg:w-[80%]">
        <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-3xl md:h-[810px] md:rounded-[48px]">
          <Image
            src={currentWork?.mainImage || ''}
            alt="arlie"
            fill
            className="c/aspect-custom h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="w-[90%] space-y-4 lg:w-[80%]">
        <div className="w-full space-y-2 text-lg">
          <h1 className="font-variation-bold heading">
            {currentWork?.name.toUpperCase()}
          </h1>
          <hr className="h-[2.5px] w-full bg-foreground" />

          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div className="w-full md:w-2/4">
              <table className="w-full table-auto border-collapse md:table-fixed">
                <tbody>
                  <tr className="">
                    <td className="font-variation-bold py-2 pr-4 text-sm uppercase md:w-[30%] md:py-0 md:text-lg">
                      <h6>Category</h6>
                    </td>
                    <td className="py-2 opacity-90 md:w-[70%] md:py-0">
                      <ul>
                        <li className="text-sm md:text-base">
                          {currentWork?.category}
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="">
                    <td className="font-variation-bold py-2 pr-4 text-sm uppercase md:w-[30%] md:py-0 md:text-lg">
                      Role
                    </td>
                    <td className="py-2 text-sm md:w-[70%] md:py-0 md:text-base">
                      {currentWork?.role}
                    </td>
                  </tr>

                  <tr className="">
                    <td className="font-variation-bold py-2 pr-4 text-sm uppercase md:w-[30%] md:py-0 md:text-lg">
                      Year
                    </td>
                    <td className="py-2 text-sm md:w-[70%] md:py-0 md:text-base">
                      {currentWork?.year}
                    </td>
                  </tr>

                  <tr>
                    <td className="font-variation-bold relative py-2 pr-4 text-sm uppercase md:w-[30%] md:py-0 md:text-lg">
                      <div className="top-0">Stack</div>
                    </td>
                    <td className="py-2 md:w-[70%] md:py-0">
                      <div className="flex w-full flex-wrap gap-1 text-sm md:text-base">
                        [
                        {currentWork?.technologies?.map((work) => (
                          <span key={work} className="inline-block px-1">
                            {work}
                          </span>
                        ))}
                        ]
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col justify-between md:w-3/6">
              <div className="my-4 text-pretty text-left text-sm md:my-0 md:text-lg">
                <p>{currentWork?.description}</p>
              </div>
              <div className="my-4 flex items-center">
                {currentWork?.viewable?.isViewable ? (
                  <Link
                    href={currentWork.viewable.href}
                    target="_blank"
                    className="font-variation group relative w-auto overflow-x-hidden whitespace-break-spaces font-bold md:text-xl"
                  >
                    ↗ view the website
                    <Underline />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="font-variation-bold pt-5 text-center font-feixenBold text-lg md:text-2xl">
          <h2>Website</h2>
        </div>
        <AnimatedImages images={currentWork?.images} />
        <div className="border-b-2 border-foreground" />
        <NextProject work={nextWorkRepeat} />
      </div>
    </div>
  );
}
