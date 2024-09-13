"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transition: { delay: 1, duration: 1, ease: "easeIn" } }}
        // w-screen h-screen fixed z-30 xl:z-40 bg-white top-0 pointer-events-none
        className="w-screen h-screen fixed z-40 bg-white top-0 pointer-events-none"
      />
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
