'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/_util/helpers';
import Underline from './Helpers';
import { useSidebar } from './SidebarProvider';
import ThemeToggle from './ThemeToggle';

function Header() {
  const { isOpen, toggleSidebar } = useSidebar();

  const circleVariantsX = {
    initial: { width: 30, opacity: 0 },
    hover: { width: 30, x: -12, opacity: 1 },
  };

  const circleVariantsY = {
    initial: { height: 1, opacity: 0 },
    hover: { height: 30, y: -12, opacity: 1 },
  };

  const moveLeft = {
    initial: { x: 0 },
    hover: { x: -18 },
  };

  const moveRight = {
    initial: { x: 0 },
    hover: { x: 18 },
  };

  const moveTop = {
    initial: { y: 0 },
    hover: { y: -18 },
  };

  const moveBottom = {
    initial: { y: 0 },
    hover: { y: 18 },
  };

  const nameVariants = {
    hidden: {
      opacity: 0,
      width: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      width: 'auto',
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  return (
    <header className="c/max-h-[128px] fixed top-0 z-[999] max-h-[12%] w-full text-foreground backdrop-blur-[1px]">
      <div className="C/overflow-hidden flex w-full items-center justify-between p-6 md:p-14">
        <Link
          onClick={() => {
            if (isOpen) {
              toggleSidebar();
            }
          }}
          href="/"
          className="flex w-fit flex-col justify-center gap-2 text-xl md:flex-row"
        >
          <div className="overlay-invert-accent size-8 rounded-full bg-foreground" />
          <motion.div
            variants={nameVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            className={cn('', isOpen ? 'visible' : 'hidden')}
          >
            <div className="prevent-uppercase group overflow-x-hidden font-feixen transition-all">
              <h1 className="name overlay-invert-accent text-sm font-bold md:text-2xl">
                Arlie Torres / <span className="text-sm">Web Developer</span>
              </h1>
              <Underline />
            </div>
          </motion.div>
        </Link>

        <div className="overlay-invert-accent flex items-center justify-center gap-x-5 text-foreground">
          <ThemeToggle />
          <motion.button
            onClick={toggleSidebar}
            className="items-center justify-center transition-all"
            whileHover="hover"
            animate={isOpen ? 'hover' : 'rest'}
            initial="rest"
            variants={{
              hover: {
                rotate: 45,
                transition: {
                  delay: 0.1,
                  duration: 0.2,
                },
              },
              rest: {
                rotate: 180,
                transition: {
                  delay: 0.1,
                  duration: 0.2,
                },
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-8 w-8 lg:size-12"
              style={{ fill: 'currentColor' }}
            >
              <title>Menu</title>
              <motion.circle
                cx="12"
                cy="12"
                r="3"
                opacity="1"
                className="opacity"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <motion.circle
                cx="24"
                cy="12"
                r="3"
                opacity="1"
                variants={moveTop}
                initial="initial"
                whileHover="hover"
                animate={!isOpen ? 'initial' : 'hover'}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <motion.circle
                cx="36"
                cy="12"
                r="3"
                opacity="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <motion.circle
                cx="36"
                cy="24"
                r="3"
                opacity="1"
                variants={moveRight}
                animate={!isOpen ? 'initial' : 'hover'}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <motion.circle
                cx="36"
                cy="36"
                r="3"
                opacity="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <motion.circle
                cx="24"
                cy="36"
                r="3"
                opacity="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                variants={moveBottom}
                animate={!isOpen ? 'initial' : 'hover'}
              />
              <motion.circle
                cx="12"
                cy="36"
                r="3"
                opacity="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <motion.circle
                cx="12"
                cy="24"
                r="3"
                opacity="1"
                variants={moveLeft}
                animate={!isOpen ? 'initial' : 'hover'}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <motion.rect
                variants={circleVariantsX}
                animate={!isOpen ? 'initial' : 'hover'}
                x="21"
                y="21"
                width="6px"
                height="6px"
                rx="3"
                ry="3"
                opacity="0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <motion.rect
                variants={circleVariantsY}
                animate={!isOpen ? 'initial' : 'hover'}
                x="21"
                y="21"
                width="6px"
                height="6px"
                rx="3"
                ry="3"
                opacity="0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <motion.rect
                variants={{
                  initial: { opacity: 1 },
                  hover: { opacity: 0 },
                }}
                animate={!isOpen ? 'initial' : 'hover'}
                x="21"
                y="21"
                width="6px"
                height="6px"
                rx="3"
                ry="3"
                opacity="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </header>
  );
}

export default Header;
