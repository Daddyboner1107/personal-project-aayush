"use client";

import { motion } from "framer-motion";
import { Music2, Compass, Heart, Pause } from "lucide-react";
import type { ChapterId } from "@/types/love";
import { loveContent } from "@/config/love-content";

interface TopBarProps {
  activeChapter: ChapterId;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenMenu: () => void;
  onGoHome: () => void;
}

export function TopBar({
  activeChapter,
  soundEnabled,
  onToggleSound,
  onOpenMenu,
  onGoHome,
}: TopBarProps) {
  const currentMeta = loveContent.chapters.find((c) => c.id === activeChapter);
  const { music } = loveContent;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-center justify-between px-4 py-3.5 sm:px-8 sm:py-5">
      {/* Left emblem */}
      <motion.button
        type="button"
        onClick={onGoHome}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        className="pointer-events-auto inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#E3B4A4]/45 bg-[#FFFDFB]/90 px-4 py-2 text-sm font-medium text-[#3B262E] shadow-sm transition-colors hover:border-[#C98E7C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C98E7C]"
        aria-label="Return to introduction"
      >
        <Heart className="h-3.5 w-3.5 fill-[#F4B8C8] text-[#C98E7C]" />
        <span className="font-serif text-base font-semibold tracking-wide">
          {loveContent.recipientNickname}
        </span>
      </motion.button>

      {/* Center subtle chapter label on tablet/desktop */}
      {currentMeta && activeChapter !== "intro" && (
        <div className="pointer-events-none hidden items-center gap-2 rounded-full border border-[#E3B4A4]/35 bg-[#FFFDFB]/80 px-4 py-1.5 text-xs font-medium tracking-[0.16em] text-[#755863] uppercase md:inline-flex">
          <span className="text-[#B07160]">{currentMeta.number}</span>
          <span aria-hidden="true">·</span>
          <span>{currentMeta.label}</span>
        </div>
      )}

      {/* Right controls: Snowman Song Toggle + Chapter Drawer trigger */}
      <div className="pointer-events-auto flex items-center gap-2">
        <motion.button
          type="button"
          onClick={onToggleSound}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
          aria-pressed={soundEnabled}
          aria-label={
            soundEnabled
              ? `Pause ${music.title} by ${music.artist}`
              : `Play ${music.title} by ${music.artist}`
          }
          className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C98E7C] ${
            soundEnabled
              ? "border-[#C98E7C] bg-[#FDEBF0] text-[#3B262E] shadow-xs"
              : "border-[#E3B4A4]/45 bg-[#FFFDFB]/90 text-[#755863] hover:text-[#3B262E]"
          }`}
        >
          {soundEnabled ? (
            <>
              <span
                aria-hidden="true"
                className="flex h-3.5 items-end gap-[2px]"
              >
                {[0, 0.2, 0.4].map((delay, i) => (
                  <motion.span
                    key={i}
                    animate={{ height: ["35%", "100%", "45%"] }}
                    transition={{
                      duration: 0.85,
                      repeat: Infinity,
                      delay,
                      ease: "easeInOut",
                    }}
                    className="w-[2.5px] rounded-full bg-[#B07160]"
                  />
                ))}
              </span>
              <span className="max-w-[105px] truncate sm:max-w-none">
                {music.title} · {music.artist}
              </span>
              <Pause className="h-3 w-3 shrink-0 text-[#B07160]" />
            </>
          ) : (
            <>
              <Music2 className="h-3.5 w-3.5 shrink-0 text-[#B07160]" />
              <span>{music.title}</span>
            </>
          )}
        </motion.button>

        <motion.button
          type="button"
          onClick={onOpenMenu}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Open chapter map"
          className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-[#E3B4A4]/45 bg-[#FFFDFB]/90 px-3.5 py-2 text-xs font-medium text-[#3B262E] shadow-sm transition-colors hover:border-[#C98E7C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C98E7C]"
        >
          <Compass className="h-4 w-4 text-[#B07160]" />
          <span className="hidden sm:inline">Chapters</span>
        </motion.button>
      </div>
    </header>
  );
}
