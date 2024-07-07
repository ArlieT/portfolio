"use client";
import { cn } from "@/_util/helpers";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

const Works = () => {
  const [projecToShow, setProjectToShow] = useState<number | null>(null);
  const listOfProjects = [
    {
      name: "proj1",
      description: "IOT",
      // url: "https://github.com/Arlyor/nextjs-portfolio",
      image: "/images/projects/proj1.avif",
    },
    {
      name: "proj2",
      description: "test",
      // url: "https://github.com/Arlyor/nextjs-portfolio",
      image: "/images/projects/proj2.avif",
    },
    {
      name: "proj2",
      description: "test",
      // url: "https://github.com/Arlyor/nextjs-portfolio",
      image: "/images/projects/proj1.avif",
    },
    {
      name: "proj2",
      description: "test",
      // url: "https://github.com/Arlyor/nextjs-portfolio",
      image: "/images/projects/proj2.avif",
    },
  ];

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex h-full items-center justify-center gap-x-4">
      <div className="hidden h-full w-1/2 -translate-x-[20%] overflow-hidden rounded-3xl md:block md:-translate-x-[10%]">
        {/* images */}
        <div className="relative hidden h-full md:block">
          {listOfProjects.map((project, index) => {
            return (
              <motion.div
                key={index + project.name}
                variants={imageVariants}
                initial="hidden"
                animate={projecToShow === index ? "visible" : "hidden"}
                className="absolute h-full w-full rounded-lg border bg-blue-500"
              >
                <motion.div
                  className="relative h-full w-full"
                  animate={{
                    scale: projecToShow === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    sizes="100vw"
                    alt={project.name}
                    src={project.image}
                    fill
                    className={cn(
                      "absolute inset-0 object-cover object-center",
                      {},
                    )}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Projects
        setProjectToShow={setProjectToShow}
        listOfProjects={listOfProjects}
      />
    </div>
  );
};

export default Works;

type Props = {
  setProjectToShow: Dispatch<SetStateAction<number | null>>;
  listOfProjects: any[];
};

const Projects = ({ listOfProjects, setProjectToShow }: Props) => {
  const arrowVariants = {
    hidden: { x: "-50%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },

    exit: { x: "-100%", opacity: 0 },
  };

  const nameVaraints = {
    hidden: { x: 0 },
    visible: {
      opacity: 1,
      x: "24px",
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
      <div className="font-variation-bold divide-y divide-foreground border-b border-b-foreground md:divide-y-2 md:border-b-2">
        {listOfProjects.map((project, index) => {
          return (
            <motion.a
              href={"/work/" + project.name}
              key={index + project.name}
              whileHover="visible"
              initial="hidden"
              onMouseEnter={() => {
                setProjectToShow(index);
              }}
              onMouseLeave={() => {
                setProjectToShow(null);
              }}
              className="flex cursor-pointer items-center gap-x-2 py-4 text-xl md:py-6 md:text-2xl"
            >
              <div className="relative flex w-full items-center justify-center">
                <div className="absolute left-0">
                  <motion.div variants={arrowVariants} className="relative">
                    →
                  </motion.div>
                </div>
                <div className="flex w-full justify-between">
                  <motion.h4 variants={nameVaraints} className="pb-2">
                    {project.name}
                  </motion.h4>
                  <span className="font-variation">{project.description}</span>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};
