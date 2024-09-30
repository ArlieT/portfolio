'use client';

import { motion } from 'framer-motion';

function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    transition: { type: 'spring', stiffness: 100 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative h-fit w-full"
    >
      <motion.p className="c/font-variation leading-relaxed tracking-wide md:text-sm lg:text-lg [&>span]:[display:block]">
        <motion.span variants={itemVariants} className="font-bold opacity-55">
          About Me
        </motion.span>
        <motion.span variants={itemVariants}>Born in 2000</motion.span>
        <motion.span variants={itemVariants}>
          in Sanfernando, Philippines
        </motion.span>
        <motion.span variants={itemVariants}>Web Developer</motion.span>
        <motion.span variants={itemVariants}>
          I am pursuing new expressions{' '}
        </motion.span>
        <motion.span variants={itemVariants}>
          through my passion/experiments.
        </motion.span>
      </motion.p>
    </motion.div>
  );
}

export default AboutMe;
