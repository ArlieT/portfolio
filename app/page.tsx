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

  return (
    <div className="relative flex min-h-full flex-col items-center justify-center overflow-hidden">
      <motion.div
        animate={{ opacity: 1, y: 20 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        className="text-lg md:text-2xl lg:text-[2.5rem]"
      >
        <p className="font-variation-bold text-balance text-center uppercase tracking-wider md:text-2xl lg:text-[2.5rem]">
          <span className="text-outline">Hi, I'm </span>
          Arlie Torres
        </p>
        <div className="text-center text-sm md:text-base">
          <p>I'm a front-end web developer</p>
        </div>

        <div className="font-variation mt-8 flex items-center justify-center gap-6 md:text-xl">
          <div className="group relative flex items-center gap-2 overflow-x-hidden pb-1">
            <p>→</p>
            <Link href={"/works"}>see my projects</Link>
            <Underline className="absolute bottom-0.5" />
          </div>
          <div className="group relative flex items-center gap-2 overflow-x-hidden pb-1">
            <p>→</p>
            <Link href={"/about"}>about me</Link>
            <Underline className="absolute bottom-0.5" />
          </div>
        </div>
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
  icon?: () => JSX.Element; //render prop
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
