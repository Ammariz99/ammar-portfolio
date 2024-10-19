"use client";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Photo component renders a profile picture inside a rotating circle.
 * The circle is animated using Framer Motion and changes its stroke dash array over time.
 * The image inside is statically displayed, with a fade-in effect.
 *
 * @component
 * @returns {JSX.Element} The animated photo component with a rotating circle and a static profile image.
 */
const Photo = () => {
  return (
    <div className=" w-full h-full relative flex justify-center items-center">
      {/**adding delay to load image after page reload */}
      <motion.div
        initial={{ opacity: 0 }} // Initially hidden
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/**Circle */}
        <motion.svg
          className="absolute w-[298px] xl:w-[498px] h-[298px] xl:h-[498px] "
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: 360 }} // Continuous rotation
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }} // Infinite linear rotation
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"  // Circle stroke color
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }} // Initial stroke pattern
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], // Stroke dash animation
            }}
            transition={{
              duration: 20, // Length of the animation cycle
              repeat: Infinity, // Loop the animation infinitely
              repeatType: "reverse", // Reverse the animation on each repeat
            }}
          />
        </motion.svg>
        {/** Static Image inside the rotating circle */}

        <div className="relative w-[250px] h-[250px] xl:w-[450px] xl:h-[450px] ml-7 mt-5 mix-blend-lighten">
          <Image
            src="/assets/profile-pic.png"
            priority  // Preloads the image
            quality={100}
            fill // Fills the container
            sizes="(max-width: 1280px) 300px, 480px"
            alt=""
            className="object-contain rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
