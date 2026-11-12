"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, AlertTriangle } from "lucide-react";
import { loveContent } from "@/config/love-content";
import { softSpring, bouncySpring } from "@/lib/motion";
import { soundEngine } from "@/lib/sound";

interface LoveMeterScreenProps {
  onNextChapter: () => void;
}

export function LoveMeterScreen({ onNextChapter }: LoveMeterScreenProps) {
  const { loveMeter } = loveContent;
  const [value, setValue] = useState<number>(loveMeter.initialValue);
  const lastMilestoneRef = useRef<string>("");

  const activeMilestone =
    loveMeter.milestones.find((m) => value >= m.min && value <= m.max) ??
    loveMeter.milestones[0];

  const isMax = Boolean(activeMilestone.isErrorMax);

  useEffect(() => {
    if (lastMilestoneRef.current && lastMilestoneRef.current !== activeMilestone.statusTag) {
      if (activeMilestone.isErrorMax) {
        soundEngine.playChime([523.25, 659.25, 783.99, 1046.5, 1318.5], 0.06);
      } else {
        soundEngine.playTap();
      }
    }
    lastMilestoneRef.current = activeMilestone.statusTag;
  }, [activeMilestone]);

  const handleSliderChange = (nextVal: number) => {
    setValue(nextVal);
  };

  const handleNudgeMax = () => {
    soundEngine.playChime([523.25, 659.25, 783.99, 1046.5], 0.06);
    setValue(100);
  };

  const heartScale = 0.85 + (value / 100) * 0.42;

  return (
    <section
      aria-label="The Love Meter"
      className="relative mx-auto flex min-h-dvh w-full max-w-2xl flex-col justify-center px-5 pt-24 pb-28 sm:px-8"
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#B07160] uppercase">
          {loveMeter.eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-3xl leading-tight font-semibold text-[#3B262E] sm:text-5xl">
          {loveMeter.title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-[#755863] sm:text-base">
          {loveMeter.subtitle}
        </p>
      </div>

      {/* Interactive Meter Card */}
      <div
        className={`relative overflow-hidden rounded-[2rem] border p-6 transition-colors duration-500 sm:p-9 ${
          isMax
            ? "border-[#C98E7C] bg-[#FDEBF0] shadow-storybook-lg"
            : "border-[#E3B4A4]/50 bg-[#FFFDFB] shadow-storybook"
        }`}
      >
        {/* Dynamic reactive heart gauge */}
        <div className="mb-6 flex flex-col items-center">
          <div className="relative flex h-28 w-28 items-center justify-center">
            <motion.div
              animate={{
                scale: isMax ? [1.22, 1.32, 1.22] : heartScale,
              }}
              transition={
                isMax
                  ? { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
                  : bouncySpring
              }
              className="relative flex items-center justify-center"
            >
              <Heart
                className="h-20 w-20 transition-colors duration-300"
                style={{
                  fill: value > 70 ? "#F09FB6" : value > 35 ? "#F9D5DF" : "#FDE2CF",
                  color: "#C98E7C",
                  strokeWidth: 1.75,
                }}
              />
              <span className="absolute font-serif text-lg font-bold text-[#3B262E]">
                {isMax ? "∞%" : `${value}%`}
              </span>
            </motion.div>

            {/* Celebratory sparkle dots at high values */}
            {value >= 75 && (
              <>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="absolute top-2 right-2 text-[#B07160]"
                >
                  <Sparkles className="h-4 w-4" />
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
                  className="absolute bottom-2 left-2 text-[#B07160]"
                >
                  <Sparkles className="h-4 w-4" />
                </motion.span>
              </>
            )}
          </div>
        </div>

        {/* Tactile Custom Slider */}
        <div className="relative mb-7">
          <div className="relative flex h-10 items-center">
            {/* Visual track underneath */}
            <div className="pointer-events-none absolute inset-x-0 h-4 overflow-hidden rounded-full border border-[#E3B4A4]/40 bg-[#FFF9F4]">
              <div
                className="h-full rounded-full transition-all duration-150"
                style={{
                  width: `${value}%`,
                  background:
                    "linear-gradient(90deg, #DCEBF7 0%, #E6DDF7 35%, #FDE2CF 68%, #F4B8C8 100%)",
                }}
              />
            </div>

            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={value}
              onChange={(e) => handleSliderChange(Number(e.target.value))}
              aria-label="Love meter percentage"
              className="love-slider relative z-10 w-full touch-pan-y"
            />
          </div>

          <div className="mt-1.5 flex justify-between text-[11px] font-medium text-[#755863]">
            <span>0% (suspicious)</span>
            <span>50% (cute)</span>
            <span>100% (maximum)</span>
          </div>
        </div>

        {/* Dynamic Funny Milestone Readout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.statusTag}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={softSpring}
            className={`rounded-2xl border p-5 text-center ${
              isMax
                ? "border-[#C98E7C] bg-[#FFFDFB]"
                : "border-[#E3B4A4]/40 bg-[#FFF9F4]"
            }`}
          >
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#F9D5DF]/70 px-3 py-1 text-[11px] font-semibold tracking-wider text-[#3B262E] uppercase">
              {isMax ? (
                <AlertTriangle className="h-3.5 w-3.5 text-[#B07160]" />
              ) : (
                <Sparkles className="h-3.5 w-3.5 text-[#B07160]" />
              )}
              <span>{activeMilestone.statusTag}</span>
            </div>

            <h3
              className={`font-serif font-semibold text-[#3B262E] ${
                isMax ? "text-xl tracking-wide sm:text-2xl" : "text-2xl sm:text-3xl"
              }`}
            >
              {activeMilestone.headline}
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#755863]">
              {activeMilestone.subtext}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Quick presets / Nudge button */}
        {!isMax && (
          <div className="mt-5 flex justify-center">
            <motion.button
              type="button"
              onClick={handleNudgeMax}
              whileTap={{ scale: 0.96 }}
              className="inline-flex min-h-[42px] items-center gap-1.5 rounded-full border border-[#E3B4A4]/60 bg-[#FFF9F4] px-4 py-2 text-xs font-semibold text-[#B07160] transition-colors hover:bg-[#FDEBF0] hover:text-[#3B262E]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>{loveMeter.nudgeLabel}</span>
            </motion.button>
          </div>
        )}
      </div>

      {/* Next Chapter CTA */}
      <div className="mt-9 flex justify-center">
        <motion.button
          type="button"
          onClick={onNextChapter}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={softSpring}
          className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#C98E7C]/60 bg-[#F9D5DF] px-7 py-3 text-sm font-semibold text-[#3B262E] shadow-storybook transition-colors hover:bg-[#F5C6D4]"
        >
          {loveMeter.nextButtonLabel}
        </motion.button>
      </div>
    </section>
  );
}
