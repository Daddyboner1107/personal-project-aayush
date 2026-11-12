"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export function CustomCursor() {
  const prefersReduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isPointerHover, setIsPointerHover] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const ringX = useSpring(cursorX, { stiffness: 360, damping: 28, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 360, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (prefersReduced || typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateCapability = () => {
      const fine = mediaQuery.matches;
      setEnabled(fine);
      document.documentElement.classList.toggle("has-custom-cursor", fine);
    };

    updateCapability();
    mediaQuery.addEventListener("change", updateCapability);

    return () => {
      mediaQuery.removeEventListener("change", updateCapability);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [prefersReduced]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        'button, a, input, [role="button"], [data-interactive="true"]'
      );
      setIsPointerHover(Boolean(interactive));
    };

    const onLeave = () => setVisible(false);
    const onDown = () => setIsPressed(true);
    const onUp = () => setIsPressed(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled, cursorX, cursorY]);

  if (!enabled || !visible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
    >
      {/* Soft trailing rose-gold halo */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointerHover ? 44 : 28,
          height: isPointerHover ? 44 : 28,
          scale: isPressed ? 0.82 : 1,
          backgroundColor: isPointerHover
            ? "rgba(249, 213, 223, 0.28)"
            : "rgba(255, 249, 244, 0.08)",
          borderColor: isPointerHover
            ? "rgba(176, 113, 96, 0.72)"
            : "rgba(201, 142, 124, 0.55)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="fixed top-0 left-0 rounded-full border-[1.5px]"
      />

      {/* Crisp center jewel dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPressed ? 1.4 : isPointerHover ? 0.65 : 1,
        }}
        transition={{ duration: 0.14 }}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-[#B07160]"
      />
    </div>
  );
}
