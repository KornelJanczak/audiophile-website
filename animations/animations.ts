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
      duration: 0.3,
    },
  },
};
