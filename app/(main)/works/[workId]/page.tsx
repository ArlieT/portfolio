import { works } from '@/constants/works';
// import { motion } from 'framer-motion';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NextProject from './_components/next-project';

type Props = {
  params: { workId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
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

  const currentWork = works.find((work) => work.key === params.workId);
  const nextWork = works.find(
    (work) => currentWork && work.id === currentWork.id + 1,
  );

  // if nextwwork is not found, render the first work
  const work = nextWork || works[0];

  return (
    <div className="flex flex-col items-center gap-4 md:gap-6 md:p-0 md:pb-6 md:pt-[500px] lg:pt-[450px]">
      <div className="z-[9999999] mx-auto w-[90%] md:absolute md:-top-[400px] md:w-full lg:-top-96 lg:w-[80%]">
        <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-3xl md:h-[810px] md:rounded-[48px]">
          <Image
            src={currentWork?.mainImage || ''}
            alt="arlie"
            fill
            className="aspect-custom h-full w-full object-cover object-center"
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
            <table className="w-auto">
              <tbody>
                <tr className="flex w-full gap-x-6">
                  <td className="font-variation-bold flex-1 text-lg uppercase">
                    <h6>Category</h6>
                  </td>

                  <td className="flex-1 flex-grow">
                    <ul>
                      <li>{currentWork?.category}</li>
                    </ul>
                  </td>
                </tr>
                <tr className="flex gap-x-6">
                  <td className="font-variation-bold flex-1 text-lg uppercase">
                    Role
                  </td>
                  <td className="flex-1">{currentWork?.role}</td>
                </tr>
                <tr className="flex gap-x-6">
                  <td className="font-variation-bold flex-1 text-lg uppercase">
                    Year
                  </td>
                  <td className="flex-1">{currentWork?.year}</td>
                </tr>

                <tr className="flex gap-x-6">
                  <td className="font-variation-bold flex-1 text-lg uppercase">
                    Stack
                  </td>
                  <td className="flex-1 whitespace-break-spaces text-sm md:text-base">
                    [
                    {currentWork?.technologies?.map((tech, index) => (
                      <span key={tech}>
                        {index === 0 && <>&nbsp;</>}{' '}
                        {/* Add space before the first item */}
                        {tech}
                        {index < currentWork?.technologies!.length - 1
                          ? ',\u00A0'
                          : '\u00A0'}
                      </span>
                    ))}
                    ]
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="my-4 w-full text-pretty text-left text-sm md:my-0 md:text-lg">
              <p>{currentWork?.description}</p>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="font-variation-bold text-center font-feixenBold text-lg md:text-2xl">
          <h2>Website</h2>
        </div>
        {currentWork?.images &&
          currentWork?.images.map((image, index) => (
            <div
              key={image}
              className="custom-shadow relative mx-auto h-full w-full overflow-hidden"
            >
              <Image
                src={image || ''}
                alt={image || ''}
                // fill
                width={2000}
                height={1413}
                className="aspect-custom h-full w-full object-cover"
              />
            </div>
          ))}
        <div className="border-b-2 border-foreground" />
        <NextProject work={work} />
      </div>
    </div>
  );
}
