"use client";
import { motion } from "framer-motion";
import React from "react";
import { scrollVariants } from "@/animations/animations";

const ScrollWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <motion.div
      variants={scrollVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollWrapper;
