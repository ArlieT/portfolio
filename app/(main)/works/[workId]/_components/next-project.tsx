'use client';

import { Work } from '@/constants/works';
import { motion } from 'framer-motion';
import Link from 'next/link';

function NextProject({ work }: { work: Work }) {
  const arrowVariants = {
    hidden: { x: '-50%', width: 0, opacity: 0 },
    visible: { x: '0%', width: '100%', opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 0.5,
    },
  };

  const textVariant = {
    hidden: { x: '0%' },
    visible: { x: '5%' },
    exit: { x: '-100%', opacity: 0 },
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 0.5,
    },
  };

  return (
    <div className="relative flex w-full justify-between font-feixenBold text-base md:text-2xl">
      <Link href={`/works/${work?.key}`}>
        <motion.div
          whileHover="visible"
          whileTap="visible"
          initial="hidden"
          className="font-variation-bold flex w-fit"
          key={work?.key}
        >
          <motion.div
            key={work?.key}
            variants={arrowVariants}
            className="relative"
          >
            →
          </motion.div>
          <motion.p variants={textVariant} className="whitespace-nowrap">
            next project
          </motion.p>
        </motion.div>
      </Link>
      <div className="text-end font-feixen">
        <p className="font-variation-bold truncate text-wrap">{work?.name}</p>
        <p className="">{work?.category}</p>
      </div>
    </div>
  );
}

export default NextProject;
