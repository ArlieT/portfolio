'use client';

import { cn } from '@/_util/helpers';
import AboutMe from '@/components/AboutMe';
import Underline from '@/components/Helpers';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

export default function Home() {
  const itemVariants = {
    hidden: {
      y: '-100%',
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
    <div className="flex h-full flex-1 items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative -top-20 text-lg md:text-2xl md:text-[2.5rem]"
      >
        <motion.p
          custom={5}
          variants={itemVariants}
          className="font-variation-bold mb-2 text-balance text-center uppercase tracking-wider md:text-2xl lg:text-[2.5rem] dark:text-accent-light"
        >
          <span className="text-outline">Hi, I&apos;m </span>
          Arlie Torres
        </motion.p>
        <motion.div
          custom={4}
          variants={itemVariants}
          className="text-balance text-center font-feixenBold text-base md:text-lg lg:text-xl"
        >
          <p>I&apos;m a web developer</p>
          <p className="">
            passionate about building websites/applications, focusing on
            front-end
          </p>
          <p>development.</p>
        </motion.div>

        <motion.div className="font-variation mt-8 flex items-center justify-center gap-6 text-base md:text-lg lg:text-xl">
          <motion.div
            custom={3}
            variants={itemVariants}
            className="group flex items-center gap-2 overflow-x-hidden pb-1"
          >
            <p>→</p>
            <Link href="/works">see my works</Link>
            <Underline className="absolute bottom-0.5" />
          </motion.div>
          <motion.div
            custom={3}
            variants={itemVariants}
            className="group relative flex items-center gap-2 overflow-x-hidden pb-1"
          >
            <p>→</p>
            <Link href="/about">about me</Link>
            <Underline className="absolute bottom-0.5" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="h-[40vh]" />
      <AboutMe />
    </div>
  );
}

type Props = {
  content?: string;
  color?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  shape?: 'rounded' | 'square';
  icon?: () => JSX.Element; // render prop
  className?: string;
};

function Tabs({ content, icon, ...props }: Props) {
  const tabs = tv({
    base: 'font-medium text-white flex justify-center items-center rounded-full text-center ',
    variants: {
      color: {
        primary: 'bg-black text-white',
        secondary: 'bg-blue-200 text-white',
      },

      size: {
        sm: 'px-4 py-2',
        md: 'px-6 py-3',
      },
      shape: {
        rounded: 'rounded-full',
        square: 'rounded-md',
      },
    },
    defaultVariants: {
      size: 'sm',
      color: 'primary',
      shape: 'rounded',
    },
  });

  return (
    <div className={cn(tabs({ ...props }), props.className)}>
      {content}
      {icon && icon()}
    </div>
  );
}
