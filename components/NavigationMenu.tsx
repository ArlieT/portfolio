"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSidebar } from "./SidebarProvider";

const NavigationMenu = () => {
  const router = useRouter();
  const { isOpen, toggleSidebar } = useSidebar();

  const containerVariants = {
    hidden: {
      opacity: 0.5,
      y: "-120%",
      transition: {
        duration: 0.3,
        delay: 0.4,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // when: "beforeChildren",
        // staggerChildren: 0.1,
        delay: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.2,
        // duration: 0.5,
      },
    }),
  };

  const handleRoute = (route: string) => {
    router.push(route);
    toggleSidebar();
  };

  const menuItems = [
    { label: "HOME", route: "/", before: "01" },
    { label: "WORK", route: "works", before: "02" },
    { label: "ABOUT ME", route: "about", before: "03" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav className="c/translate-y-[-72px] absolute left-0 top-0 z-[999] flex h-full w-full items-center justify-center border border-blue-500 font-feixen text-3xl text-foreground md:text-[3.5rem]">
          <div className="nav-menu relative flex h-1/2 w-1/2 items-center justify-center">
            <div className="flex h-full min-w-full flex-col items-center justify-center gap-6 overflow-hidden p-4 [&>*]:block [&>button>span]:transition-all [&>button>span]:duration-200 [&>button>span]:ease-out">
              {menuItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleRoute(item.route)}
                  variants={itemVariants}
                  custom={index}
                  initial="hidden"
                  animate={isOpen ? "visible" : "hidden"}
                  style={{ display: "inline-block" }}
                  before={item.before}
                  className={`before:mr-2 before:size-1 before:text-sm before:content-[attr(before)]`}
                >
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
