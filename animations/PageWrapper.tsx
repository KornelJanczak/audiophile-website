"use client";
import { motion } from "framer-motion";
import React from "react";

const PageWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default PageWrapper;
