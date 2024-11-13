'use client';
import { useInView, motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

function FadeUp({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsInView] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsInView(true);
    }
  }, [isInView, isVisible]);
  return (
    <motion.div
      ref={ref}
      className="custom-shadow relative mx-auto h-full w-full overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeUp;
