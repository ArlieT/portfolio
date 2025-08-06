'use client';

import { cn } from '@/_util/helpers';
import { works } from '@/constants/works';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

function Works() {
  const [projecToShow, setProjectToShow] = useState<number | null>(null);

  const listOfWorks = works.map((work, index) => ({
    image: work.mainImage || '',
    name: work.name,
    key: work.key,
    id: work.id,
    category: work.category,
  }));

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
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex h-full gap-x-4 overflow-hidden p-4 md:-bottom-4 md:-left-10 md:pt-[140px]"
    >
      <div className="relative hidden h-full min-h-max w-[70%] overflow-hidden rounded-tr-3xl p-2 md:block md:pr-12 lg:w-[60%]">
        {/* images */}
        <div className="c/left-3 absolute h-full w-[calc(100%-24px)]">
          {listOfWorks.map((project, index) => (
            <motion.div
              key={project.name}
              variants={imageVariants}
              initial="hidden"
              animate={projecToShow === index ? 'visible' : 'hidden'}
              className="absolute h-full w-full"
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
        listOfProjects={listOfWorks}
      />
    </motion.div>
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

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: '-100%',
    },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
        delay: index * 0.2,
      },
    }),
  };

  return (
    <div className="h-full w-full md:w-[60%] md:lg:pr-[240px]">
      <motion.div
        variants={itemVariants}
        className="flex justify-between border-b border-b-foreground py-6 md:border-b-2"
      >
        <h2 className="font-variation-bold text-3xl md:text-5xl">WORK </h2>
        <h5 className="self-end text-xl md:text-2xl">
          {listOfProjects.length}
        </h5>
      </motion.div>
      <motion.div
        // variants={containerVariants}
        // initial="hidden"
        // animate="visible"
        className="font-variation-bold divide-y divide-foreground border-b border-b-foreground py-2 md:divide-y-2 md:border-b-2"
      >
        {[...listOfProjects].map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={index}
            onMouseEnter={() => {
              setProjectToShow(index);
            }}
            onMouseLeave={() => {
              setProjectToShow(null);
            }}
          >
            <Link
              href={`/works/${project.key}`}
              className="flex items-center gap-x-2 text-xl md:text-2xl"
            >
              <motion.div
                whileHover="visible"
                whileTap="visible"
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
                  <motion.h4
                    variants={nameVaraints}
                    className="whitespace-nowrap"
                  >
                    {project.key}
                  </motion.h4>
                  <h4 className="font-variation flex items-center justify-center truncate text-xs md:text-base">
                    {project.category}
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
