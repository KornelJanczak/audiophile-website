import { Variants } from "framer-motion";
export const scrollVariants: Variants = {
  offscreen: {
    y: 90,
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      // type: "spring",
      // bounce: 0.4,
      // delay: 0.2,
      duration: 0.3,
    },
  },
};
