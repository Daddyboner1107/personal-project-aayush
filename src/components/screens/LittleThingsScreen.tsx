"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Eye } from "lucide-react";
import { loveContent } from "@/config/love-content";
import type { AdoreCardItem } from "@/types/love";
import { AdoreIcon } from "@/components/illustrations/AdoreIcons";
import {
  fadeUpItem,
  silkEase,
  softSpring,
  staggerContainer,
} from "@/lib/motion";
import { soundEngine } from "@/lib/sound";

interface LittleThingsScreenProps {
  onNextChapter: () => void;
}

const accentStyles: Record<
  AdoreCardItem["accent"],
  { bg: string; border: string; pill: string }
> = {
  pink: {
    bg: "bg-[#FDEBF0]",
    border: "border-[#F4B8C8]",
    pill: "bg-[#F9D5DF] text-[#3B262E]",
  },
  peach: {
    bg: "bg-[#FFF1E6]",
    border: "border-[#F2BE8D]",
    pill: "bg-[#FDE2CF] text-[#3B262E]",
  },
  lavender: {
    bg: "bg-[#F3EEFC]",
    border: "border-[#D3C3F0]",
    pill: "bg-[#E6DDF7] text-[#3B262E]",
  },
  blue: {
    bg: "bg-[#EDF5FC]",
    border: "border-[#BED8EE]",
    pill: "bg-[#DCEBF7] text-[#3B262E]",
  },
};

export function LittleThingsScreen({ onNextChapter }: LittleThingsScreenProps) {
  const { littleThings } = loveContent;
  const [openedIds, setOpenedIds] = useState<string[]>([]);

  const toggleCard = (id: string) => {
    setOpenedIds((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        soundEngine.playTap();
        return prev.filter((item) => item !== id);
      }
      soundEngine.playPop();
      return [...prev, id];
    });
  };

  const revealAll = () => {
    soundEngine.playChime();
    setOpenedIds(littleThings.cards.map((c) => c.id));
  };

  const allOpened = openedIds.length === littleThings.cards.length;

  return (
    <section
      aria-label="Things I secretly adore about you"
      className="relative mx-auto flex min-h-dvh w-full max-w-5xl flex-col justify-center px-5 pt-24 pb-28 sm:px-8"
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#B07160] uppercase">
          {littleThings.eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-3xl leading-tight font-semibold text-[#3B262E] sm:text-5xl">
          {littleThings.title}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[#755863] sm:text-base">
          {littleThings.subtitle}
        </p>

        {/* Progress & quick reveal pill */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E3B4A4]/45 bg-[#FFFDFB] px-4 py-1.5 text-xs font-semibold text-[#3B262E] shadow-xs">
            <Heart className="h-3.5 w-3.5 fill-[#F4B8C8] text-[#C98E7C]" />
            <span>
              {openedIds.length} of {littleThings.cards.length} secrets opened
            </span>
          </span>

          {!allOpened && (
            <button
              type="button"
              onClick={revealAll}
              className="inline-flex min-h-[34px] items-center gap-1.5 rounded-full border border-[#E3B4A4]/45 bg-[#FFF9F4] px-3.5 py-1.5 text-xs font-medium text-[#755863] transition-colors hover:border-[#C98E7C] hover:text-[#3B262E]"
            >
              <Eye className="h-3.5 w-3.5" />
              <span>Open all</span>
            </button>
          )}
        </div>
      </div>

      {/* 8 Interactive Cards Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {littleThings.cards.map((card) => {
          const isOpen = openedIds.includes(card.id);
          const style = accentStyles[card.accent];

          return (
            <motion.button
              key={card.id}
              type="button"
              variants={fadeUpItem}
              onClick={() => toggleCard(card.id)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={softSpring}
              aria-expanded={isOpen}
              className={`group relative flex min-h-[235px] w-full flex-col justify-between overflow-hidden rounded-[1.75rem] border p-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C98E7C] ${
                isOpen
                  ? `${style.bg} ${style.border} shadow-storybook`
                  : "border-[#E3B4A4]/45 bg-[#FFFDFB] shadow-sm hover:border-[#C98E7C]/70"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {!isOpen ? (
                  <motion.div
                    key="closed"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.24, ease: silkEase }}
                    className="flex h-full flex-col justify-between"
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase ${style.pill}`}
                      >
                        {card.previewTag}
                      </span>
                      <AdoreIcon kind={card.illustration} />
                    </div>

                    <div className="mt-4">
                      <h3 className="font-serif text-xl leading-snug font-semibold text-[#3B262E]">
                        {card.title}
                      </h3>
                      <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#B07160]">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Tap to reveal</span>
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={softSpring}
                    className="flex h-full flex-col justify-between"
                  >
                    <div>
                      <div className="mb-2.5 flex items-center justify-between">
                        <span className="font-hand text-base font-semibold text-[#B07160]">
                          {card.previewTag} ♡
                        </span>
                        <Heart className="h-4 w-4 fill-[#F4B8C8] text-[#C98E7C]" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-[#3B262E]">
                        {card.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#3B262E]/90">
                        {card.message}
                      </p>
                    </div>

                    <p className="mt-4 text-[11px] font-medium tracking-wider text-[#755863] uppercase">
                      Tap to tuck away
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Completion callout & Next Chapter CTA */}
      <div className="mt-9 flex flex-col items-center gap-4 text-center">
        <AnimatePresence>
          {allOpened && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="font-hand text-xl text-[#B07160] sm:text-2xl"
            >
              {littleThings.allOpenedNote}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={onNextChapter}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={softSpring}
          className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#C98E7C]/60 bg-[#F9D5DF] px-7 py-3 text-sm font-semibold text-[#3B262E] shadow-storybook transition-colors hover:bg-[#F5C6D4]"
        >
          {littleThings.nextButtonLabel}
        </motion.button>
      </div>
    </section>
  );
}
