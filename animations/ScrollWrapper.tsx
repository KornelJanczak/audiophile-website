"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { scrollVariants } from "@/animations/animations";

const ScrollWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  if (!isMobile)
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

  if (isMobile) return <div className={className}>{children}</div>;
};

export default ScrollWrapper;
