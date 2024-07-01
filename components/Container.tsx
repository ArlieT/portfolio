"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useSidebar } from "./SidebarProvider";

const Container = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSidebar();

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className={`c/border c/border-red-500 h-full ${isOpen ? "hidden" : "block"}`}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? "-100%" : 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Container;
