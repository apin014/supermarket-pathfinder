import React from "react";
import { motion } from "framer-motion";
import './Components.css'

const Path = ({ coordinates }) => {

  const path = "M" + coordinates?.map((c) => c.join(",")).join("L");

  const pathVariants = {
    initial: {
      pathLength: 0,
    },
    animate: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity, // Set repeat property to Infinity for infinite loop
        repeatType: "mirror", // Set repeatType property to "loop" for infinite loop
        repeatDelay: 1
      },
    }
  }

  return (
    <motion.path
      id="my-path"
      d={path}
      stroke="black"
      strokeWidth="4"
      fill="transparent"
      initial={pathVariants.initial}
      animate={pathVariants.animate}
      strokeLinecap="round"
      transition={pathVariants.animate.transition}
      // style={{transform: 'scale(1.36)'}}
    />
  );
};

export default Path;