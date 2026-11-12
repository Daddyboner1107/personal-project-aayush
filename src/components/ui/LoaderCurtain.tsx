"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { loveContent } from "@/config/love-content";
import { silkEase } from "@/lib/motion";

interface LoaderCurtainProps {
  onComplete: () => void;
}

export function LoaderCurtain({ onComplete }: LoaderCurtainProps) {
  const prefersReduced = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = prefersReduced ? 350 : 1450;
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [prefersReduced]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loader-curtain"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -18,
            transition: { duration: 0.6, ease: silkEase },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFF9F4] px-6 text-center"
          role="status"
          aria-live="polite"
        >
          {/* Soft ambient pastel glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#F9D5DF]/45 blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: silkEase }}
            className="relative flex flex-col items-center"
          >
            {/* Hand-crafted blooming storybook heart SVG */}
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              aria-hidden="true"
              className="mb-5"
            >
              <motion.circle
                cx="38"
                cy="38"
                r="33"
                stroke="#E3B4A4"
                strokeWidth="1.5"
                strokeDasharray="4 5"
                initial={{ rotate: 0, opacity: 0.5 }}
                animate={{ rotate: 360, opacity: 1 }}
                transition={{
                  rotate: { duration: 14, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.6 },
                }}
              />
              <motion.path
                d="M38 54C38 54 19 42.2 19 29.5C19 23.8 23.4 19.5 28.9 19.5C32.5 19.5 35.8 21.5 38 24.4C40.2 21.5 43.5 19.5 47.1 19.5C52.6 19.5 57 23.8 57 29.5C57 42.2 38 54 38 54Z"
                fill="#F9D5DF"
                stroke="#C98E7C"
                strokeWidth="2"
                strokeLinejoin="round"
                initial={{ pathLength: 0, scale: 0.85 }}
                animate={{ pathLength: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: silkEase }}
              />
            </svg>

            <p className="text-[11px] font-semibold tracking-[0.26em] text-[#B07160] uppercase">
              {loveContent.loader.eyebrow}
            </p>
            <p className="mt-2 font-serif text-xl italic text-[#3B262E] sm:text-2xl">
              {loveContent.loader.message}
            </p>

            {/* Delicate loading bar */}
            <div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-[#F9D5DF]/50">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: prefersReduced ? 0.25 : 1.25,
                  ease: silkEase,
                }}
                className="h-full w-full rounded-full bg-[#C98E7C]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
