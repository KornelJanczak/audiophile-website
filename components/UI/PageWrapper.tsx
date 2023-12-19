"use client";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

const PageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
    >
      {children}
    </motion.section>
  );
};

export default PageWrapper;
