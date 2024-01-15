import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/animations/animations";
import { useEffect, useState } from "react";

const FadeInWrapper: React.FC<{
  index: number;
  children: React.ReactNode;
  className?: string;
}> = ({ index, children, className }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  // if (!isMobile)
    return (
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={index}
        whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
        viewport={{ once: true }}
        key={index}
      >
        {children}
      </motion.div>
    );

  if (isMobile) {
    return className ? (
      <div className={className}></div>
    ) : (
      <div>{children}</div>
    );
  }
};

export default FadeInWrapper;
