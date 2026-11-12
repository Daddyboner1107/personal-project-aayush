"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export function HeroUniverse() {
  const prefersReduced = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 20 });

  const cloudLeftX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const cloudLeftY = useTransform(smoothY, [-1, 1], [-10, 10]);

  const cloudRightX = useTransform(smoothX, [-1, 1], [16, -16]);
  const cloudRightY = useTransform(smoothY, [-1, 1], [10, -10]);

  const flowerX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const heartY = useTransform(smoothY, [-1, 1], [-12, 12]);

  useEffect(() => {
    if (prefersReduced || typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    const handleMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(nx);
      mouseY.set(ny);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [prefersReduced, mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Top-left floating pastel cloud */}
      <motion.div
        style={prefersReduced ? undefined : { x: cloudLeftX, y: cloudLeftY }}
        className="animate-float-gentle-x absolute top-16 -left-6 w-36 opacity-85 sm:top-20 sm:left-[6%] sm:w-52"
      >
        <svg viewBox="0 0 220 110" fill="none" className="h-auto w-full">
          <path
            d="M42 88H178C196.8 88 210 74.5 210 57.5C210 41.6 198.1 28.6 182.6 27.1C177.2 13.5 163.8 4 148 4C135.4 4 124.4 10.1 117.7 19.6C112.1 15.4 105.1 13 97.5 13C79 13 64 27.6 63.4 45.9C45.3 47.2 31 61.8 31 79.8C31 84.5 35.8 88 42 88Z"
            fill="#FFFDFB"
            stroke="#E3B4A4"
            strokeWidth="1.8"
          />
          <circle cx="95" cy="52" r="2.5" fill="#C98E7C" />
          <circle cx="115" cy="52" r="2.5" fill="#C98E7C" />
          <path
            d="M101 57C103.5 59.5 106.5 59.5 109 57"
            stroke="#C98E7C"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Top-right floating lavender/cream cloud */}
      <motion.div
        style={prefersReduced ? undefined : { x: cloudRightX, y: cloudRightY }}
        className="animate-float-slow absolute top-20 -right-8 w-40 opacity-85 sm:top-24 sm:right-[7%] sm:w-56"
      >
        <svg viewBox="0 0 230 112" fill="none" className="h-auto w-full">
          <path
            d="M45 92H184C202 92 216 78.2 216 60.5C216 44.3 203.9 31.1 188 29.7C182.1 15.8 168.5 6 152.5 6C139.2 6 127.6 12.6 121 22.8C115 18.2 107.6 15.5 99.5 15.5C80.5 15.5 65.1 30.7 64.5 49.4C46.5 50.8 32 65.5 32 83.2C32 88.2 38 92 45 92Z"
            fill="#F4EEFC"
            stroke="#D3C3F0"
            strokeWidth="1.8"
          />
          <circle cx="152" cy="55" r="2.5" fill="#9E86C8" />
          <circle cx="171" cy="55" r="2.5" fill="#9E86C8" />
          <path
            d="M158 60C160.5 62.5 163.5 62.5 166 60"
            stroke="#9E86C8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Bouncing little hearts */}
      <motion.div
        style={prefersReduced ? undefined : { y: heartY }}
        className="animate-heart-bounce absolute top-[26%] left-[12%] sm:left-[18%]"
      >
        <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
          <path
            d="M18 30C18 30 6 22.4 6 14.3C6 10.6 8.9 7.8 12.5 7.8C14.8 7.8 16.9 9.1 18 11C19.1 9.1 21.2 7.8 23.5 7.8C27.1 7.8 30 10.6 30 14.3C30 22.4 18 30 18 30Z"
            fill="#F9D5DF"
            stroke="#C98E7C"
            strokeWidth="1.7"
          />
        </svg>
      </motion.div>

      <motion.div
        style={prefersReduced ? undefined : { y: heartY }}
        className="animate-heart-bounce absolute top-[32%] right-[11%] sm:right-[18%]"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 36 36"
          fill="none"
          style={{ animationDelay: "1.1s" }}
        >
          <path
            d="M18 30C18 30 6 22.4 6 14.3C6 10.6 8.9 7.8 12.5 7.8C14.8 7.8 16.9 9.1 18 11C19.1 9.1 21.2 7.8 23.5 7.8C27.1 7.8 30 10.6 30 14.3C30 22.4 18 30 18 30Z"
            fill="#FDE2CF"
            stroke="#C98E7C"
            strokeWidth="1.7"
          />
        </svg>
      </motion.div>

      {/* Tiny sparkling stars */}
      <svg
        className="animate-twinkle absolute top-[18%] left-[44%] h-4 w-4 text-[#C98E7C]/80"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L14 9.5L21.5 12L14 14.5L12 22L10 14.5L2.5 12L10 9.5L12 2Z" />
      </svg>
      <svg
        className="animate-twinkle absolute bottom-[24%] left-[24%] h-3.5 w-3.5 text-[#D3C3F0]"
        style={{ animationDelay: "1.5s" }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L14 9.5L21.5 12L14 14.5L12 22L10 14.5L2.5 12L10 9.5L12 2Z" />
      </svg>
      <svg
        className="animate-twinkle absolute right-[23%] bottom-[26%] h-4 w-4 text-[#F4B8C8]"
        style={{ animationDelay: "0.8s" }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L14 9.5L21.5 12L14 14.5L12 22L10 14.5L2.5 12L10 9.5L12 2Z" />
      </svg>

      {/* Animated storybook flowers along bottom corners */}
      <motion.div
        style={prefersReduced ? undefined : { x: flowerX }}
        className="animate-sway-flower absolute bottom-4 left-3 w-20 opacity-90 sm:bottom-8 sm:left-[8%] sm:w-28"
      >
        <svg viewBox="0 0 110 120" fill="none" className="h-auto w-full">
          <path
            d="M55 115C55 95 52 76 55 56"
            stroke="#8FB39A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M54 90C41 88 33 78 34 69C43 70 52 78 54 90Z"
            fill="#C7DEC9"
            stroke="#8FB39A"
            strokeWidth="1.6"
          />
          <path
            d="M55 83C67 80 75 71 74 62C65 63 57 72 55 83Z"
            fill="#C7DEC9"
            stroke="#8FB39A"
            strokeWidth="1.6"
          />
          <circle cx="55" cy="31" r="12" fill="#F9D5DF" />
          <circle cx="71" cy="43" r="12" fill="#FDE2CF" />
          <circle cx="65" cy="61" r="12" fill="#F9D5DF" />
          <circle cx="45" cy="61" r="12" fill="#FDE2CF" />
          <circle cx="39" cy="43" r="12" fill="#F9D5DF" />
          <circle
            cx="55"
            cy="48"
            r="10"
            fill="#FFF3D6"
            stroke="#C98E7C"
            strokeWidth="1.6"
          />
        </svg>
      </motion.div>

      <motion.div
        style={prefersReduced ? undefined : { x: flowerX }}
        className="animate-sway-flower absolute right-3 bottom-4 w-20 opacity-90 sm:right-[8%] sm:bottom-8 sm:w-28"
      >
        <svg
          viewBox="0 0 110 120"
          fill="none"
          className="h-auto w-full"
          style={{ animationDelay: "1.4s" }}
        >
          <path
            d="M55 115C55 95 58 76 55 56"
            stroke="#8FB39A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M56 92C68 89 76 79 75 70C66 71 58 80 56 92Z"
            fill="#C7DEC9"
            stroke="#8FB39A"
            strokeWidth="1.6"
          />
          <circle cx="55" cy="31" r="12" fill="#E6DDF7" />
          <circle cx="71" cy="43" r="12" fill="#DCEBF7" />
          <circle cx="65" cy="61" r="12" fill="#E6DDF7" />
          <circle cx="45" cy="61" r="12" fill="#DCEBF7" />
          <circle cx="39" cy="43" r="12" fill="#E6DDF7" />
          <circle
            cx="55"
            cy="48"
            r="10"
            fill="#FFF3D6"
            stroke="#C98E7C"
            strokeWidth="1.6"
          />
        </svg>
      </motion.div>
    </div>
  );
}
