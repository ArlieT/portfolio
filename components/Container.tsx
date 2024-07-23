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
        <motion.main
          key={pathname}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          className={cn('h-full w-full p-4 md:p-8', {
            'p-0 md:p-0': pathname.includes('/work'),
          })}
        >
          {children}
        </motion.main>
      )}
    </AnimatePresence>
  );
}

export default Container;
