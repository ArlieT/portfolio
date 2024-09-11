'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Underline from './Helpers';
import { useSidebar } from './SidebarProvider';

function NavigationMenu() {
  const router = useRouter();
  const { isOpen, toggleSidebar } = useSidebar();
  const [isOpenWithDelay, setIsOpenWithDelay] = useState(false);

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
        duration: 0.2,
      },
    }),
    exit: (index: number) => ({
      y: '-100%',
      opacity: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.1,
      },
    }),
  };

  const handleRoute = (route: string) => {
    router.push(route);
    toggleSidebar();
  };

  const menuItems = [
    { label: 'HOME', route: '/', before: '01' },
    { label: 'WORK', route: '/works', before: '02' },
    { label: 'ABOUT ME', route: '/about', before: '03' },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsOpenWithDelay(isOpen);
    }, 300);
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpenWithDelay && (
        <motion.nav className="c/translate-y-[-72px] absolute left-0 top-0 z-[999] flex h-full min-h-[calc(100svh-87px)] w-full items-center text-4xl text-foreground md:min-h-[calc(100svh-128px)] md:justify-center md:text-[3.5rem] lg:text-[4.5rem]">
          <div className="nav-menu flex items-center justify-center md:w-1/2">
            <div className="flex h-full w-full flex-col items-start gap-4 overflow-hidden p-4 text-left md:items-center md:gap-6 lg:gap-10 [&>*]:block [&>div>span]:duration-200 [&>div>span]:ease-out [&>div_*]:transition-all">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.route}
                  onClick={() => handleRoute(item.route)}
                  variants={itemVariants}
                  custom={index}
                  initial="hidden"
                  animate={isOpen ? 'visible' : 'hidden'}
                  exit="exit"
                  before={item.before}
                  className="before:font-variation w-full text-left before:mr-2 before:size-1 before:text-sm before:font-normal before:tracking-widest before:content-[attr(before)]"
                >
                  <Link href={item.route} id="link">
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isOpen ? 'visible' : 'hidden'}
                custom={menuItems.length}
                className="font-variation !flex w-full gap-x-4 text-sm md:gap-x-6 md:text-xl"
              >
                <Link
                  target="_blank"
                  href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || ''}
                  id="instagram"
                  className="group overflow-x-hidden pb-2"
                >
                  <span className="mr-2">↗</span>
                  <span>Instagram</span>
                  <Underline className="bottom-0.5" />
                </Link>
                <Link
                  target="_blank"
                  href={process.env.NEXT_PUBLIC_GITHUB_URL || ''}
                  id="github"
                  className="group overflow-x-hidden"
                >
                  <span className="mr-2">↗</span>
                  <span>Github</span>
                  <Underline className="bottom-0.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default NavigationMenu;
