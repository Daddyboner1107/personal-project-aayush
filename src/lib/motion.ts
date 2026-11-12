import type { Variants, Transition } from "framer-motion";

export const softSpring: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 26,
  mass: 0.9,
};

export const bouncySpring: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 20,
};

export const silkEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const screenTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 18,
    scale: 0.99,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: silkEase,
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    scale: 0.99,
    transition: {
      duration: 0.35,
      ease: silkEase,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: silkEase,
    },
  },
};

export const gentlePopItem: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: softSpring,
  },
};
