"use client";
import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import { useTransform, useSpring, motion, useScroll } from "framer-motion";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const { scrollY } = useScroll();
  // scroll container
  const scrollRef = useRef(null);

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);

  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // observe when browser is resizing
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries),
    );
    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 1, mass: 10, stiffness: 5 }; // easing of smooth scroll
  const spring = useSpring(transform, physics); // apply easing to the negative scroll value

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }} // translateY of scroll container using negative scroll value
        className=""
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
