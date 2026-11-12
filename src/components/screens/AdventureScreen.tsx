"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Sparkles, CheckCircle2, RotateCcw } from "lucide-react";
import { loveContent } from "@/config/love-content";
import type { AdventureChoice, AdventureId } from "@/types/love";
import { AdventureSceneIllustration } from "@/components/illustrations/AdventureScenes";
import { silkEase, softSpring } from "@/lib/motion";
import { soundEngine } from "@/lib/sound";

interface AdventureScreenProps {
  onNextChapter: () => void;
}

const cardAccent: Record<AdventureChoice["accent"], string> = {
  pink: "border-[#F4B8C8] bg-[#FDEBF0]",
  lavender: "border-[#D3C3F0] bg-[#F3EEFC]",
  blue: "border-[#BED8EE] bg-[#EDF5FC]",
  peach: "border-[#F2BE8D] bg-[#FFF1E6]",
};

export function AdventureScreen({ onNextChapter }: AdventureScreenProps) {
  const { adventure } = loveContent;
  const [selectedId, setSelectedId] = useState<AdventureId | null>(null);
  const [visitedIds, setVisitedIds] = useState<AdventureId[]>([]);

  const selectedChoice = adventure.choices.find((c) => c.id === selectedId);
  const allVisited = visitedIds.length === adventure.choices.length;

  const handleSelect = (id: AdventureId) => {
    soundEngine.playPop();
    setSelectedId(id);
    setVisitedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  return (
    <section
      aria-label="Choose Our Little Adventure"
      className="relative mx-auto flex min-h-dvh w-full max-w-4xl flex-col justify-center px-5 pt-24 pb-28 sm:px-8"
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#B07160] uppercase">
          {adventure.eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-3xl leading-tight font-semibold text-[#3B262E] sm:text-5xl">
          {adventure.title}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[#755863] sm:text-base">
          {adventure.subtitle}
        </p>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E3B4A4]/45 bg-[#FFFDFB] px-4 py-1.5 text-xs font-semibold text-[#3B262E]">
          <MapPin className="h-3.5 w-3.5 text-[#B07160]" />
          <span>
            {visitedIds.length} of {adventure.choices.length} postcards explored
          </span>
        </div>
      </div>

      {/* 4 Choice Cards */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {adventure.choices.map((choice, index) => {
          const isSelected = choice.id === selectedId;
          const isVisited = visitedIds.includes(choice.id);

          return (
            <motion.button
              key={choice.id}
              type="button"
              onClick={() => handleSelect(choice.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={softSpring}
              className={`flex min-h-[84px] w-full items-center justify-between gap-4 rounded-[1.5rem] border p-4 text-left transition-all sm:p-5 ${
                isSelected
                  ? `${cardAccent[choice.accent]} shadow-storybook`
                  : "border-[#E3B4A4]/45 bg-[#FFFDFB] hover:border-[#C98E7C]/70"
              }`}
            >
              <div className="flex items-start gap-3.5">
                <span
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    isSelected
                      ? "bg-[#3B262E] text-[#FFFDFB]"
                      : "bg-[#FDEBF0] text-[#B07160]"
                  }`}
                >
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#3B262E]">
                    {choice.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-[#755863] sm:text-sm">
                    {choice.subtitle}
                  </p>
                </div>
              </div>

              {isVisited && (
                <CheckCircle2
                  aria-label="Visited"
                  className="h-5 w-5 shrink-0 text-[#B07160]"
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Illustrated Postcard Scene Reveal */}
      <AnimatePresence mode="wait">
        {selectedChoice && (
          <motion.div
            key={selectedChoice.id}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.42, ease: silkEase }}
            className="mt-7 overflow-hidden rounded-[2rem] border border-[#E3B4A4]/50 bg-[#FFFDFB] p-4 shadow-storybook-lg sm:p-7"
          >
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
              <div className="md:col-span-7">
                <AdventureSceneIllustration id={selectedChoice.id} />
              </div>

              <div className="flex flex-col justify-between md:col-span-5">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#E3B4A4]/60 bg-[#FFF9F4] px-3 py-1 text-[11px] font-semibold tracking-wider text-[#B07160] uppercase">
                      <Sparkles className="h-3 w-3" />
                      {selectedChoice.stampLabel}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#3B262E] sm:text-3xl">
                    {selectedChoice.title}
                  </h3>

                  <p className="mt-1 font-hand text-lg text-[#B07160]">
                    {selectedChoice.badgeText}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[#755863] sm:text-base">
                    {selectedChoice.description}
                  </p>

                  <div className="mt-4 rounded-2xl border border-[#E3B4A4]/40 bg-[#FFF9F4] p-4">
                    <p className="font-hand text-xl leading-snug text-[#3B262E]">
                      &ldquo;{selectedChoice.personalNote}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playTap();
                      const nextIdx =
                        (adventure.choices.findIndex(
                          (c) => c.id === selectedChoice.id
                        ) +
                          1) %
                        adventure.choices.length;
                      handleSelect(adventure.choices[nextIdx].id);
                    }}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#E3B4A4]/60 bg-[#FFFDFB] px-4 py-2 text-xs font-semibold text-[#3B262E] transition-colors hover:bg-[#FDEBF0]"
                  >
                    <RotateCcw className="h-3.5 w-3.5 text-[#B07160]" />
                    <span>Try another escape</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next Chapter CTA */}
      <div className="mt-9 flex flex-col items-center gap-3 text-center">
        {allVisited && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-hand text-xl text-[#B07160] sm:text-2xl"
          >
            {adventure.allVisitedNote}
          </motion.p>
        )}

        <motion.button
          type="button"
          onClick={onNextChapter}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={softSpring}
          className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#C98E7C]/60 bg-[#F9D5DF] px-7 py-3 text-sm font-semibold text-[#3B262E] shadow-storybook transition-colors hover:bg-[#F5C6D4]"
        >
          {adventure.nextButtonLabel}
        </motion.button>
      </div>
    </section>
  );
}
