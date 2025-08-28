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

          <div className="flex flex-col justify-between md:flex-row">
            <table className="w-2/4 table-fixed border-collapse">
              <tbody>
                <tr>
                  <td className="font-variation-bold w-[30%] text-lg uppercase">
                    <h6>Category</h6>
                  </td>
                  <td className="w-[70%] opacity-90">
                    <ul>
                      <li>{currentWork?.category}</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td className="font-variation-bold w-[30%] text-lg uppercase">
                    Role
                  </td>
                  <td className="w-[70%]">{currentWork?.role}</td>
                </tr>

                <tr>
                  <td className="font-variation-bold w-[30%] text-lg uppercase">
                    Year
                  </td>
                  <td className="w-[70%]">{currentWork?.year}</td>
                </tr>

                <tr>
                  <td className="font-variation-bold relative w-[30%] text-lg uppercase">
                    <div className="absolute top-0">Stack</div>
                  </td>
                  <td className="flex w-[70%] flex-wrap gap-1">
                    [
                    {currentWork?.technologies?.map((work) => (
                      <span key={work} className="inline-block px-1">
                        {work}
                      </span>
                    ))}
                    ]
                  </td>
                </tr>
              </tbody>
            </table>

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
