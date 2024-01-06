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
      duration: 0.45,
    },
  },
};

export const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
      duration: 0.45,
    },
  }),
};
