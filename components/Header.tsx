"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Underline } from "./Helpers";
import { useSidebar } from "./SidebarProvider";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  const circleVariantsX = {
    initial: { width: 1 },
    hover: { width: 30, x: -12 },
  };

  const circleVariantsY = {
    initial: { height: 1 },
    hover: { height: 30, y: -12 },
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
      width: "auto",
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  return (
    <header className="sticky top-0 z-[999] w-full bg-gray-50/5 bg-opacity-5 text-black text-foreground backdrop-blur-[1px] dark:bg-inherit">
      <div className="C/overflow-hidden flex w-full items-center justify-between p-6 md:p-10">
        <Link
          href={"/"}
          className="flex w-fit items-center justify-center gap-2 text-xl"
        >
          <div className="size-8 rounded-full bg-foreground"></div>
          <motion.div
            variants={nameVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            className="hidden md:flex"
          >
            <div className="prevent-uppercase group overflow-x-hidden font-feixen transition-all">
              <h1 className="name text-2xl font-bold">
                Arlie Torres / <span className="text-sm">Web Developer</span>
              </h1>
              <Underline />
            </div>
          </motion.div>
        </Link>

        <div className="flex items-center justify-center gap-x-5 text-foreground">
          <ThemeToggle />
          <motion.button
            onClick={toggleSidebar}
            className="flex items-center justify-center transition-all"
            style={{
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            {isOpen ? (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                variants={{ hover: { rotate: 90 } }}
              >
                <title>Menu</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            ) : (
              <motion.div
                initial="initial"
                whileHover="hover"
                style={{ display: "inline-block" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="32"
                  height="32"
                  style={{ fill: "currentColor" }}
                >
                  <title>Menu</title>
                  <motion.circle
                    cx="12"
                    cy="12"
                    r="3"
                    opacity="1"
                    className={"opacity"}
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
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <motion.rect
                    // initial="initial"
                    variants={circleVariantsX}
                    x="21"
                    y="21"
                    width="6px"
                    height="6px"
                    rx="3"
                    ry="3"
                    opacity="0.75"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></motion.rect>
                  <motion.rect
                    variants={circleVariantsY}
                    x="21"
                    y="21"
                    width="6px"
                    height="6px"
                    rx="3"
                    ry="3"
                    opacity="0.75"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></motion.rect>
                  <motion.rect
                    variants={{
                      initial: { opacity: 1 },
                      hover: { opacity: 0 },
                    }}
                    x="21"
                    y="21"
                    width="6px"
                    height="6px"
                    rx="3"
                    ry="3"
                    opacity="0.75"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  ></motion.rect>
                </svg>
              </motion.div>
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
