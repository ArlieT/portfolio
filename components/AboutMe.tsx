'use client';

import { motion } from 'framer-motion';

function AboutMe() {
  return (
    <motion.div
      mode="wait"
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-2 right-2 md:bottom-4 md:right-4"
    >
      <p className="font-variation text-xs leading-relaxed tracking-wide md:text-sm lg:text-lg [&>span]:[display:block]">
        <span className="font-bold opacity-55">About Me</span>
        <span>Born in 2000</span>
        <span>in Sanfernando, Philippines</span>
        <span>Web Developer</span>
        <span>I am pursuing new expressions </span>
        <span>through my passion/experiments</span>
      </p>
    </motion.div>
  );
}

export default AboutMe;
