import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/animations/animations";

const FadeInWrapper: React.FC<{
  index: number;
  children: React.ReactNode;
  className?: string;
}> = ({ index, children, className }) => {
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
};

export default FadeInWrapper;
