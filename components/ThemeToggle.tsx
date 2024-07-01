import { ThemeContext } from "@/_lib/themeContext";
import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import { PiMoonBold, PiSunBold } from "react-icons/pi"; // Import your icons

const sunVariants = {
  initial: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const moonVariants = {
  initial: { opacity: 1, y: 0 },

  exit: { opacity: 0, y: 20 },
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = use(ThemeContext);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    toggleTheme(savedTheme);

    setTimeout(() => {
      setInitialLoad(false); // Mark initial load as complete
    }, 0);
  }, []);

  return (
    <button
      onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
      className="flex h-8 w-8 items-center justify-center overflow-hidden"
    >
      {initialLoad ? null : (
        <>
          <motion.div
            key="sun"
            initial="initial"
            animate={theme === "light" ? "animate" : "exit"}
            variants={sunVariants}
            className="absolute"
          >
            <PiSunBold size={17} />
          </motion.div>
          <motion.div
            key="moon"
            initial="initial"
            animate={theme === "dark" ? "animate" : "exit"}
            exit="exit"
            variants={moonVariants}
          >
            <PiMoonBold size={17} className="-scale-x-100" />
          </motion.div>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
