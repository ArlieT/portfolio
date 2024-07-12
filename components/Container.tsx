"use client";
import { cn } from "@/_util/helpers";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useSidebar } from "./SidebarProvider";

const Container = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSidebar();
  const variants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        when: "beforeChildren",
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
  console.log(pathname);
  return (
    <main
      className={cn(
        `h-[calc(100svh-87px)] w-full p-4 md:h-[calc(100svh-128px)] md:p-8 ${isOpen ? "hidden" : "block"}`,
        {
          "p-0 md:p-0": pathname.includes("/work"),
        },
      )}
    >
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            key={pathname}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            className="h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Container;
// <AnimatePresence>
//   {!isOpen && (
//     <motion.div
//       className={`h-full w-full border border-blue-500 p-6 md:p-8 ${isOpen ? "hidden" : "block"}`}
//       initial={{ opacity: 1, y: 0 }}
//       animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? "-100%" : 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {children}
//     </motion.div>
//   )}
// </AnimatePresence>
