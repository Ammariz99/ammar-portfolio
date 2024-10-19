"use client";
import { motion } from "framer-motion"; // Destructure motion from framer-motion


/**
 * Animation variants for the stairs.
 * - `initial`: Defines the starting position of the stairs.
 * - `animate`: Defines the ending position of the stairs.
 * - `exit`: Defines the exit transition when the component is removed.
 */
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};


/**
 * Calculate the reverse index for staggered animation delay.
 *
 * @param {number} index - The current index of the step.
 * @returns {number} The reverse index to calculate staggered delay.
 */
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

/**
 * Stairs component that renders a sequence of animated divs representing steps.
 *
 * Each div is animated using the framer-motion library. The animation includes
 * staggered delays for each step, creating a flowing staircase effect.
 *
 * @returns {JSX.Element} The JSX for the animated stairs.
 */
const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs, each representing a step of stairs
      Each div will have the same animation defined by stairAnimation object
      The delay for each div is calculated dynamically based on its reversed index
      Creating a staggered effect with decreasing delay for each step */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: index * 0.1, // Delay each step by 0.1 seconds
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
