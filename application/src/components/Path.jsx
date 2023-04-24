import React from "react";
import { motion } from "framer-motion";

const Path = () => {
  const startPoint = { x: 10, y: 50 };
  const endPoint = { x: 100, y: 50 };

  const pathVariants = {
    initial: {
      d: `M${startPoint.x} ${startPoint.y} L${startPoint.x} ${startPoint.y}`,
      stroke: "red",
    },
    animate: {
      d: `M${startPoint.x} ${startPoint.y} L${endPoint.x} ${endPoint.y}`,
      stroke: "blue",
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity, // Set repeat property to Infinity for infinite loop
        repeatType: "reverse", // Set repeatType property to "loop" for infinite loop
      },
    },
  };

  return (
    <svg width="1080" height="1080">
      <motion.path
        d={`M${startPoint.x} ${startPoint.y} L${startPoint.x} ${startPoint.y}`}
        fill="transparent"
        stroke="red"
        strokeWidth="5"
        animate="animate"
        variants={pathVariants}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
      />
    </svg>
  );
};

export default Path;
