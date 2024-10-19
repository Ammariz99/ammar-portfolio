"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

/**
 * StairTransition component that handles the page transition animation using stairs.
 *
 * The component utilizes AnimatePresence from framer-motion to manage
 * exit and enter animations for the stair effect while navigating between pages.
 *
 * @returns {JSX.Element} The JSX for the stair transition.
 */
const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen top-0 fixed left-0 right-0 pointer-events-none z-40 flex ">
            <Stairs />
          </div>
          <motion.div
            className="h-screen w-screen fixed bg-primary top-0  pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          ></motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
