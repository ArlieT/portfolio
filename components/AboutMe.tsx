import { motion } from "framer-motion";

const AboutMe = () => {
  const aboutVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-8 right-8"
    >
      <p className="font-bebas_neue text-base leading-relaxed [&>span]:[display:block]">
        <span className="font-bold opacity-55">About</span>
        <span>Born in 2000</span>
        <span>in Sanfernando, Philippines</span>
        <span>Web Developer</span>
        <span>I am pursuing new expressions </span>
        <span>through my passion/experiments</span>
      </p>
    </motion.div>
  );
};

export default AboutMe;
