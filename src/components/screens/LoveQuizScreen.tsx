"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, RotateCcw, ArrowRight, Sparkles, Check } from "lucide-react";
import { loveContent } from "@/config/love-content";
import type { QuizOption } from "@/types/love";
import { silkEase, softSpring } from "@/lib/motion";
import { soundEngine } from "@/lib/sound";

interface LoveQuizScreenProps {
  onNextChapter: () => void;
}

export function LoveQuizScreen({ onNextChapter }: LoveQuizScreenProps) {
  const { quiz } = loveContent;
  const total = quiz.questions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMap, setSelectedMap] = useState<Record<string, QuizOption>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = quiz.questions[currentIndex];
  const selectedOption = selectedMap[currentQuestion.id];

  const handleSelectOption = (option: QuizOption) => {
    soundEngine.playPop();
    setSelectedMap((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));
  };

  const handleAdvance = () => {
    soundEngine.playTap();
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      soundEngine.playChime();
      setIsCompleted(true);
    }
  };

  const handleRetake = () => {
    soundEngine.playTap();
    setSelectedMap({});
    setCurrentIndex(0);
    setIsCompleted(false);
  };

  const toneBadgeStyles: Record<QuizOption["tone"], string> = {
    sweet: "bg-[#FDEBF0] text-[#B07160] border-[#F4B8C8]",
    playful: "bg-[#FDE2CF]/70 text-[#8F5A45] border-[#F2BE8D]",
    cheeky: "bg-[#EFE9FA] text-[#6D5699] border-[#D3C3F0]",
  };

  return (
    <section
      aria-label="A Little Love Quiz"
      className="relative mx-auto flex min-h-dvh w-full max-w-2xl flex-col justify-center px-5 pt-24 pb-28 sm:px-8"
    >
      {/* Header */}
      <div className="mb-7 text-center">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#B07160] uppercase">
          {quiz.eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-3xl leading-tight font-semibold text-[#3B262E] sm:text-5xl">
          {quiz.title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-[#755863] sm:text-base">
          {quiz.subtitle}
        </p>
      </div>

      {/* Progress indicator */}
      {!isCompleted && (
        <div className="mb-6 flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-2" aria-hidden="true">
            {quiz.questions.map((q, idx) => {
              const answered = Boolean(selectedMap[q.id]);
              const isCurrent = idx === currentIndex;
              return (
                <motion.span
                  key={q.id}
                  layout
                  className={`h-2.5 rounded-full transition-colors ${
                    isCurrent
                      ? "w-7 bg-[#C98E7C]"
                      : answered
                        ? "w-2.5 bg-[#F4B8C8]"
                        : "w-2.5 bg-[#E3B4A4]/35"
                  }`}
                />
              );
            })}
          </div>
          <p className="text-xs font-medium tracking-wider text-[#755863] uppercase">
            Question {currentIndex + 1} of {total}
          </p>
        </div>
      )}

      {/* Main Quiz Card or Completion Card */}
      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.98 }}
            transition={{ duration: 0.36, ease: silkEase }}
            className="rounded-[2rem] border border-[#E3B4A4]/45 bg-[#FFFDFB] p-6 shadow-storybook sm:p-9"
          >
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FDEBF0] font-serif text-base font-semibold text-[#B07160]">
                  {currentIndex + 1}
                </span>
                {currentIndex > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playTap();
                      setCurrentIndex((i) => i - 1);
                    }}
                    className="min-h-[36px] rounded-full px-3 text-xs font-medium text-[#755863] transition-colors hover:bg-[#FDEBF0]/60 hover:text-[#3B262E]"
                  >
                    ← Back
                  </button>
                )}
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#3B262E] sm:text-3xl">
                {currentQuestion.question}
              </h3>
              {currentQuestion.hint && (
                <p className="mt-1.5 font-hand text-lg text-[#B07160]">
                  {currentQuestion.hint}
                </p>
              )}
            </div>

            {/* Multiple-choice pills */}
            <div className="space-y-3" role="radiogroup" aria-label={currentQuestion.question}>
              {currentQuestion.options.map((option) => {
                const isSelected = selectedOption?.id === option.id;

                return (
                  <motion.button
                    key={option.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelectOption(option)}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.985 }}
                    transition={softSpring}
                    className={`flex min-h-[54px] w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left text-sm font-medium transition-all sm:px-5 sm:text-base ${
                      isSelected
                        ? "border-[#C98E7C] bg-[#FDEBF0]/90 text-[#3B262E] shadow-sm"
                        : "border-[#E3B4A4]/35 bg-[#FFF9F4]/70 text-[#3B262E] hover:border-[#C98E7C]/65 hover:bg-[#FFFDFB]"
                    }`}
                  >
                    <span>{option.label}</span>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isSelected
                          ? "border-[#C98E7C] bg-[#C98E7C] text-[#FFFDFB]"
                          : "border-[#E3B4A4]/60 bg-[#FFFDFB]"
                      }`}
                    >
                      {isSelected && <Check className="h-3.5 w-3.5" />}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Personalised animated reaction */}
            <AnimatePresence mode="wait">
              {selectedOption && (
                <motion.div
                  key={selectedOption.id}
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={softSpring}
                  className="mt-6 rounded-2xl border border-[#E3B4A4]/45 bg-[#FFF9F4] p-4 sm:p-5"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${toneBadgeStyles[selectedOption.tone]}`}
                    >
                      <Sparkles className="h-3 w-3" />
                      {selectedOption.tone}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#3B262E] sm:text-base">
                    {selectedOption.response}
                  </p>

                  <div className="mt-4 flex justify-end">
                    <motion.button
                      type="button"
                      onClick={handleAdvance}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#3B262E] px-5 py-2.5 text-sm font-semibold text-[#FFFDFB] transition-colors hover:bg-[#4F343F]"
                    >
                      <span>
                        {currentIndex < total - 1
                          ? "Next question"
                          : "See our verdict"}
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="quiz-completed"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={softSpring}
            className="rounded-[2rem] border border-[#E3B4A4]/50 bg-[#FFFDFB] p-7 text-center shadow-storybook-lg sm:p-10"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#FDEBF0]">
              <Heart className="h-8 w-8 fill-[#F4B8C8] text-[#C98E7C]" />
            </div>

            <h3 className="font-serif text-3xl font-semibold text-[#3B262E] sm:text-4xl">
              {quiz.completionTitle}
            </h3>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-[#755863]">
              {quiz.completionMessage}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <motion.button
                type="button"
                onClick={onNextChapter}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full border border-[#C98E7C]/60 bg-[#F9D5DF] px-7 py-3 text-sm font-semibold text-[#3B262E] shadow-sm transition-colors hover:bg-[#F5C6D4] sm:w-auto"
              >
                {quiz.nextButtonLabel}
              </motion.button>

              <motion.button
                type="button"
                onClick={handleRetake}
                whileTap={{ scale: 0.96 }}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[#E3B4A4]/50 bg-[#FFF9F4] px-5 py-3 text-sm font-medium text-[#755863] transition-colors hover:text-[#3B262E] sm:w-auto"
              >
                <RotateCcw className="h-4 w-4" />
                {quiz.retakeLabel}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
