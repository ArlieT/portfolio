"use client";
import { cn } from "@/_util/helpers";
import AboutMe from "@/components/AboutMe";
import { Underline } from "@/components/Helpers";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { tv } from "tailwind-variants";

export default function Home() {
  const stack = [
    "nextjs",
    "reactjs",
    "tailwindcss",
    "typescript",
    "js",
    "nodejs",
    "git",
    "github",
    "figma",
    "python",
  ];

  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: {
        delay: 0.5,
        duration: 0.3,
      },
    },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.2,
      },
    }),
  };

  return (
    <div className="relative flex min-h-full flex-col items-center justify-center overflow-hidden">
      <motion.div
        // variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-lg md:text-2xl lg:text-[2.5rem]"
      >
        <motion.p
          custom={5}
          variants={itemVariants}
          className="font-variation-bold text-balance text-center uppercase tracking-wider md:text-2xl lg:text-[2.5rem]"
        >
          <span className="text-outline">Hi, I&apos;m </span>
          Arlie Torres
        </motion.p>
        <motion.div
          custom={4}
          variants={itemVariants}
          className="text-center font-feixen text-base font-bold lg:text-xl"
        >
          <p>I&apos;m a front-end web developer</p>
        </motion.div>

        <motion.div className="font-variation mt-8 flex items-center justify-center gap-6 text-base lg:text-xl">
          <motion.div
            custom={3}
            variants={itemVariants}
            className="group relative flex items-center gap-2 overflow-x-hidden pb-1"
          >
            <p>→</p>
            <Link href={"/work"}>see my projects</Link>
            <Underline className="absolute bottom-0.5" />
          </motion.div>
          <motion.div
            custom={3}
            variants={itemVariants}
            className="group relative flex items-center gap-2 overflow-x-hidden pb-1"
          >
            <p>→</p>
            <Link href={"/about"}>about me</Link>
            <Underline className="absolute bottom-0.5" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="h-[40vh]"></div>
      <AboutMe />
    </div>
  );
}

type Props = {
  content?: string;
  color?: "primary" | "secondary";
  size?: "sm" | "md";
  shape?: "rounded" | "square";
  icon?: () => JSX.Element; // render prop
  className?: string;
};

const Tabs = ({ content, icon, ...props }: Props) => {
  const tabs = tv({
    base: "font-medium text-white flex justify-center items-center rounded-full text-center ",
    variants: {
      color: {
        primary: "bg-black text-white",
        secondary: "bg-blue-200 text-white",
      },

      size: {
        sm: "px-4 py-2",
        md: "px-6 py-3",
      },
      shape: {
        rounded: "rounded-full",
        square: "rounded-md",
      },
    },
    defaultVariants: {
      size: "sm",
      color: "primary",
      shape: "rounded",
    },
  });

  return (
    <div className={cn(tabs({ ...props }), props.className)}>
      {content}
      {icon && icon()}
    </div>
  );
};

// <div className="relative flex min-h-full flex-col items-center justify-center overflow-hidden">
//   <motion.div
//     animate={{ opacity: 1, y: 20 }}
//     initial={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.2 }}
//     className="text-lg md:text-2xl lg:text-[2.5rem]"
//   >
//     <p className="font-variation-bold text-balance text-center uppercase tracking-wider md:text-2xl lg:text-[2.5rem]">
//       <span className="text-outline">Hi, I'm </span>
//       Arlie Torres
//     </p>
//     <div className="text-center font-feixen text-base font-bold lg:text-xl">
//       <p>I'm a front-end web developer</p>
//     </div>

//     <div className="font-variation mt-8 flex items-center justify-center gap-6 text-base lg:text-xl">
//       <div className="group relative flex items-center gap-2 overflow-x-hidden pb-1">
//         <p>→</p>
//         <Link href={"/work"}>see my projects</Link>
//         <Underline className="absolute bottom-0.5" />
//       </div>
//       <div className="group relative flex items-center gap-2 overflow-x-hidden pb-1">
//         <p>→</p>
//         <Link href={"/about"}>about me</Link>
//         <Underline className="absolute bottom-0.5" />
//       </div>
//     </div>
//   </motion.div>

//   <div className="h-[40vh]"></div>
//   <AboutMe />
// </div>
