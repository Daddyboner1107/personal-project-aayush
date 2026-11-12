"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, RotateCcw } from "lucide-react";
import { loveContent } from "@/config/love-content";
import { silkEase, softSpring, bouncySpring } from "@/lib/motion";
import { soundEngine } from "@/lib/sound";

interface SecretEnvelopeScreenProps {
  onReplayWorld: () => void;
}

const floatingParticles = [
  { id: 1, left: "12%", delay: 0, size: 12 },
  { id: 2, left: "26%", delay: 0.6, size: 9 },
  { id: 3, left: "48%", delay: 1.1, size: 14 },
  { id: 4, left: "70%", delay: 0.3, size: 10 },
  { id: 5, left: "86%", delay: 0.9, size: 12 },
];

export function SecretEnvelopeScreen({
  onReplayWorld,
}: SecretEnvelopeScreenProps) {
  const { envelope } = loveContent;
  const [isOpen, setIsOpen] = useState(false);
  const [surpriseVisible, setSurpriseVisible] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    soundEngine.playEnvelopeOpen();
    setIsOpen(true);
  };

  const handleSurprise = () => {
    soundEngine.playChime([587.33, 739.99, 880, 1174.66], 0.07);
    setSurpriseVisible(true);
  };

  return (
    <section
      aria-label="The Secret Envelope"
      className="relative mx-auto flex min-h-dvh w-full max-w-2xl flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-28 sm:px-8"
    >
      {/* Subtle floating particles when letter opens */}
      {isOpen && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {floatingParticles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 120 }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [-20, -240],
                x: [0, p.id % 2 === 0 ? 18 : -18],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeOut",
              }}
              style={{ left: p.left, bottom: "15%" }}
              className="absolute text-[#C98E7C]"
            >
              <Sparkles style={{ width: p.size, height: p.size }} />
            </motion.div>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 mb-8 text-center">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#B07160] uppercase">
          {envelope.eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-3xl leading-tight font-semibold text-[#3B262E] sm:text-5xl">
          {envelope.title}
        </h2>
      </div>

      {/* Closed tactile wax-sealed envelope OR opened handwritten letter */}
      <div className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="closed-envelope"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94, y: -16 }}
              transition={{ duration: 0.45, ease: silkEase }}
              className="mx-auto flex max-w-md flex-col items-center"
            >
              <motion.button
                type="button"
                onClick={handleOpenEnvelope}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={softSpring}
                aria-label="Open secret love letter envelope"
                className="group relative flex aspect-[1.45/1] w-full flex-col items-center justify-center overflow-hidden rounded-[1.75rem] border border-[#E3B4A4]/70 bg-[#FFF8F2] p-6 shadow-storybook-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C98E7C]"
              >
                {/* Envelope diagonal fold lines */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 400 276"
                  fill="none"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 0L200 156L400 0"
                    fill="#FDEBF0"
                    stroke="#E3B4A4"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 276L155 138M400 276L245 138"
                    stroke="#E3B4A4"
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                </svg>

                {/* Wax Seal */}
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 mt-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#FFFDFB] bg-[#D99382] text-[#FFFDFB] shadow-md transition-transform group-hover:scale-110"
                >
                  <Heart className="h-7 w-7 fill-[#FFFDFB] text-[#FFFDFB]" />
                </motion.div>

                <span className="relative z-10 mt-5 font-hand text-xl text-[#755863]">
                  For {loveContent.recipientNickname}
                </span>
              </motion.button>

              <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#B07160] uppercase">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{envelope.tapPrompt}</span>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="opened-letter"
              initial={{ opacity: 0, y: 36, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, ease: silkEase }}
              className="mx-auto max-w-xl"
            >
              {/* Letter Stationery Card */}
              <div className="relative rounded-[2rem] border border-[#E3B4A4]/60 bg-[#FFFDFB] p-7 shadow-storybook-lg sm:p-11">
                {/* Tiny decorative top seal */}
                <div className="mb-6 flex items-center justify-between border-b border-[#E3B4A4]/30 pb-4">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#B07160] uppercase">
                    Sealed with love
                  </span>
                  <Heart className="h-4 w-4 fill-[#F4B8C8] text-[#C98E7C]" />
                </div>

                {/* Handwritten love letter */}
                <div className="space-y-4 font-hand text-2xl leading-relaxed text-[#3B262E] sm:text-[1.7rem] sm:leading-[1.55]">
                  {envelope.letterParagraphs.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.14 + index * 0.12,
                        duration: 0.5,
                        ease: silkEase,
                      }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.95, duration: 0.5 }}
                  className="mt-8 border-t border-[#E3B4A4]/30 pt-5 text-right font-hand text-2xl text-[#B07160] sm:text-[1.7rem]"
                >
                  <p>{envelope.letterClosing}</p>
                  <p className="font-semibold text-[#3B262E]">
                    {envelope.letterSignature}
                  </p>
                </motion.div>
              </div>

              {/* Final "One more surprise?" section */}
              <div className="mt-8 flex flex-col items-center text-center">
                <AnimatePresence mode="wait">
                  {!surpriseVisible ? (
                    <motion.button
                      key="surprise-trigger"
                      type="button"
                      onClick={handleSurprise}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      transition={softSpring}
                      className="inline-flex min-h-[54px] items-center gap-2.5 rounded-full border border-[#C98E7C] bg-[#F9D5DF] px-8 py-3.5 text-base font-semibold text-[#3B262E] shadow-storybook transition-colors hover:bg-[#F5C6D4]"
                    >
                      <Sparkles className="h-4 w-4 text-[#B07160]" />
                      <span>{envelope.surpriseButtonLabel}</span>
                    </motion.button>
                  ) : (
                    <motion.div
                      key="surprise-reveal"
                      initial={{ opacity: 0, scale: 0.88, y: 14 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={bouncySpring}
                      className="w-full rounded-[1.75rem] border border-[#C98E7C] bg-[#FDEBF0] p-6 shadow-storybook sm:p-8"
                    >
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFFDFB] px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-[#B07160] uppercase">
                        <Heart className="h-3 w-3 fill-[#F4B8C8] text-[#C98E7C]" />
                        {envelope.surpriseBadge}
                      </span>

                      <p className="mt-3 font-serif text-2xl leading-snug font-semibold text-[#3B262E] sm:text-3xl">
                        {envelope.surpriseMessage}
                      </p>

                      <div className="mt-6 flex justify-center">
                        <motion.button
                          type="button"
                          onClick={onReplayWorld}
                          whileTap={{ scale: 0.96 }}
                          className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-[#E3B4A4] bg-[#FFFDFB] px-5 py-2.5 text-xs font-semibold text-[#3B262E] transition-colors hover:bg-[#FFF9F4]"
                        >
                          <RotateCcw className="h-3.5 w-3.5 text-[#B07160]" />
                          <span>{envelope.replayLabel}</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
