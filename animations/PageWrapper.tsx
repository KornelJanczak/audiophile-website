"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { scrollVariants } from "@/animations/animations";

const PageWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  // if (!isMobile)
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

  // if (isMobile) {
  //   return <>{children}</>;
  // }
};

export default PageWrapper;
