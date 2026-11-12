"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { loveContent } from "@/config/love-content";
import { HeroUniverse } from "@/components/illustrations/HeroUniverse";
import { fadeUpItem, silkEase, softSpring, staggerContainer } from "@/lib/motion";

interface IntroScreenProps {
  onEnter: () => void;
}

export function IntroScreen({ onEnter }: IntroScreenProps) {
  const { intro } = loveContent;

  return (
    <section
      aria-label="Welcome to Mi Amore"
      className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-16 text-center sm:px-8"
    >
      <HeroUniverse />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-2xl flex-col items-center"
      >
        <motion.div
          variants={fadeUpItem}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E3B4A4]/50 bg-[#FFFDFB]/85 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-[#B07160] uppercase shadow-sm"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#C98E7C]" />
          <span>Chapter 01 · A Little Universe</span>
        </motion.div>

        <motion.p
          variants={fadeUpItem}
          className="max-w-lg text-base leading-relaxed text-[#755863] sm:text-xl"
        >
          {intro.prologue}
        </motion.p>

        {/* Expressive storybook reveal of MI AMORE ♡ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.75, ease: silkEase }}
          className="mt-7 mb-4"
        >
          <h1 className="font-serif text-5xl font-semibold tracking-tight text-[#3B262E] sm:text-7xl md:text-8xl">
            <span className="inline-block bg-gradient-to-b from-[#3B262E] to-[#6D4754] bg-clip-text text-transparent">
              {intro.headline}
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.6, ease: silkEase }}
          className="font-serif text-xl italic text-[#755863] sm:text-2xl"
        >
          {intro.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, ...softSpring }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <motion.button
            type="button"
            onClick={onEnter}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={softSpring}
            className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-[#C98E7C]/60 bg-[#F9D5DF] px-8 py-3.5 text-base font-semibold text-[#3B262E] shadow-storybook transition-colors hover:bg-[#F5C6D4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C98E7C]"
          >
            {intro.ctaLabel}
          </motion.button>

          <p className="font-hand text-lg text-[#B07160]">{intro.footnote}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
