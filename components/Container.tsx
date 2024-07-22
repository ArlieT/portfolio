'use client';

import { cn } from '@/_util/helpers';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useSidebar } from './SidebarProvider';

function Container({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSidebar();
  const variants = {
    hidden: {
      opacity: 0,
      y: '-100%',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
        duration: 0.8,
      },
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        duration: 0,
        delay: 0,
      },
    },
  };

  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {!isOpen && (
        <motion.div
          key={pathname}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          className={cn(
            'c/min-h-[calc(100svh-87px)] c/md:min-h-[calc(100svh-128px)] h-full w-full p-4 md:p-8',
            {
              'p-0 md:p-0': pathname.includes('/work'),
            },
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Container;

// eslint-disable-next-line no-lone-blocks
{
  /* <AnimatePresence>
  {!isOpen && (
    <motion.div
      className={`h-full w-full border border-blue-500 p-6 md:p-8 ${isOpen ? 'hidden' : 'block'}`}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? '-100%' : 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )}
</AnimatePresence>; */
}
