"use client";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

/**
 * PageTransition component provides a smooth transition effect between page navigations.
 * It uses Framer Motion for animating the transition effect and the Next.js `usePathname`
 * hook to detect when the route changes, applying a fade-out effect.
 *
 * @component
 * @param {Object} props - React props passed to the component.
 * @param {React.ReactNode} props.children - The content of the page to be rendered with the transition effect.
 * @returns {JSX.Element} The PageTransition component that wraps around the content of the page.
 */
const PageTransition = ({ children }) => {
  const pathname = usePathname(); // Retrieve the current path to detect route changes

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />

        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
