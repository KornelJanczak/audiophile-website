"use client";
import { HeroMobileVariants, HeroVariants } from "@/animations/animations";
import { motion } from "framer-motion";
import { ReactNode } from "react";
const HeroWrapper: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ className, children }) => {
  const mobile = window.innerWidth < 800;

  if (!mobile)
    return (
      <motion.div
        variants={HeroVariants}
        initial="initial"
        animate="animate"
        className={className}
      >
        {children}
      </motion.div>
    );

  if (mobile) {
    <div className={className}>{children}</div>;
  }
};

export default HeroWrapper;
