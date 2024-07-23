'use client';

import { cn } from '@/_util/helpers';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

function Works() {
  const [projecToShow, setProjectToShow] = useState<number | null>(null);
  const listOfProjects = [
    {
      name: 'proj1',
      description: 'IOT',
      // url: "https://github.com/Arlyor/nextjs-portfolio",
      image: '/images/projects/proj1.avif',
    },
    {
      name: 'proj3',
      description: 'test',
      // url: "https://github.com/Arlyor/nextjs-portfolio",
      image: '/images/projects/proj2.avif',
    },
    {
      name: 'proj4',
      description: 'test',
      // url: "https://github.com/Arlyor/nextjs-portfolio",
      image: '/images/projects/proj1.avif',
    },
    {
      name: 'proj5',
      description: 'test',
      // url: "https://github.com/arlyor/nextjs-portfolio",
      image: '/images/projects/proj2.avif',
    },
    {
      name: 'proj6',
      description: 'test',
      // url: "https://github.com/arlyor/nextjs-portfolio",
      image: '/images/projects/proj2.avif',
    },
  ];

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="flex h-full gap-x-4 border border-red-500 p-4 pt-[140px] md:p-8">
      <div className="relative hidden h-fit min-h-max w-1/2 overflow-hidden rounded-tr-3xl border p-2 md:block md:pr-12">
        {/* images */}
        <div className="absolute h-full w-[calc(100%-24px)] border">
          {listOfProjects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={imageVariants}
              initial="hidden"
              animate={projecToShow === index ? 'visible' : 'hidden'}
              className="absolute h-full w-full border bg-blue-500"
            >
              <motion.div
                className="relative h-full w-full"
                animate={{
                  scale: projecToShow === index ? 1.2 : 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  sizes="100vw"
                  alt={project.name}
                  src={project.image}
                  fill
                  className={cn(
                    'absolute inset-0 object-cover object-center',
                    {},
                  )}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
      <Projects
        setProjectToShow={setProjectToShow}
        listOfProjects={listOfProjects}
      />
    </div>
  );
}

export default Works;

type Props = {
  setProjectToShow: Dispatch<SetStateAction<number | null>>;
  listOfProjects: any[];
};

function Projects({ listOfProjects, setProjectToShow }: Props) {
  const arrowVariants = {
    hidden: { x: '-50%', opacity: 0 },
    visible: { x: '0%', opacity: 1 },

    exit: { x: '-100%', opacity: 0 },
  };

  const nameVaraints = {
    hidden: { x: 0 },
    visible: {
      opacity: 1,
      x: '24px',
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: '-100%',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="h-full w-full md:w-1/2 md:lg:pr-[240px]">
      <div className="flex justify-between border-b border-b-foreground py-6 md:border-b-2">
        <h2 className="font-variation-bold text-3xl md:text-5xl">WORK </h2>
        <h5 className="self-end text-xl md:text-2xl">
          {listOfProjects.length}
        </h5>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="font-variation-bold divide-y divide-foreground border-b border-b-foreground md:divide-y-2 md:border-b-2"
      >
        {[...listOfProjects].slice(0, 1).map((project, index) => (
          <motion.div
            key={project.name}
            variants={itemVariants}
            onMouseEnter={() => {
              setProjectToShow(index);
            }}
            onMouseLeave={() => {
              setProjectToShow(null);
            }}
          >
            <Link
              href={`/work/${project.name}`}
              className="flex items-center gap-x-2 text-xl md:text-2xl"
            >
              <motion.div
                whileHover="visible"
                initial="hidden"
                className="relative flex w-full items-center justify-center py-4 md:py-6"
              >
                <div className="absolute left-0">
                  <motion.div
                    variants={arrowVariants}
                    className="relative pt-1.5"
                  >
                    →
                  </motion.div>
                </div>
                <div className="flex w-full justify-between">
                  <motion.h4 variants={nameVaraints} className="">
                    {project.name}
                  </motion.h4>
                  <h4 className="font-variation flex items-center justify-center text-base">
                    {project.description}
                  </h4>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
