"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";
import type { ChapterId } from "@/types/love";
import { loveContent } from "@/config/love-content";
import { softSpring, silkEase } from "@/lib/motion";

interface ChapterNavProps {
  activeChapter: ChapterId;
  visitedChapters: ChapterId[];
  menuOpen: boolean;
  onCloseMenu: () => void;
  onSelectChapter: (id: ChapterId) => void;
}

export function ChapterNav({
  activeChapter,
  visitedChapters,
  menuOpen,
  onCloseMenu,
  onSelectChapter,
}: ChapterNavProps) {
  const chapters = loveContent.chapters;
  const currentIndex = chapters.findIndex((c) => c.id === activeChapter);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <>
      {/* Floating bottom chapter pill (shown once past the Intro cover) */}
      {activeChapter !== "intro" && (
        <nav
          aria-label="Storybook chapter navigation"
          className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
        >
          <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-[#E3B4A4]/50 bg-[#FFFDFB]/95 px-2.5 py-1.5 shadow-storybook">
            <motion.button
              type="button"
              disabled={!prevChapter}
              onClick={() => prevChapter && onSelectChapter(prevChapter.id)}
              whileTap={{ scale: 0.9 }}
              aria-label={
                prevChapter
                  ? `Previous chapter: ${prevChapter.label}`
                  : "No previous chapter"
              }
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#3B262E] transition-colors hover:bg-[#FDEBF0] disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>

            <div className="flex items-center gap-1.5 px-1">
              {chapters.map((chapter) => {
                const isActive = chapter.id === activeChapter;
                const isVisited = visitedChapters.includes(chapter.id);

                return (
                  <button
                    key={chapter.id}
                    type="button"
                    onClick={() => onSelectChapter(chapter.id)}
                    aria-label={`Go to ${chapter.label}`}
                    aria-current={isActive ? "step" : undefined}
                    className="group relative flex h-8 items-center justify-center px-1 focus-visible:outline-2 focus-visible:outline-[#C98E7C]"
                  >
                    <motion.span
                      layout
                      transition={softSpring}
                      className={`block h-2.5 rounded-full transition-colors ${
                        isActive
                          ? "w-7 bg-[#C98E7C]"
                          : isVisited
                            ? "w-2.5 bg-[#F4B8C8]"
                            : "w-2.5 bg-[#E3B4A4]/40 group-hover:bg-[#E3B4A4]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <motion.button
              type="button"
              disabled={!nextChapter}
              onClick={() => nextChapter && onSelectChapter(nextChapter.id)}
              whileTap={{ scale: 0.9 }}
              aria-label={
                nextChapter
                  ? `Next chapter: ${nextChapter.label}`
                  : "Final chapter reached"
              }
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#3B262E] transition-colors hover:bg-[#FDEBF0] disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </div>
        </nav>
      )}

      {/* Responsive Chapter Map Sheet / Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="chapter-sheet-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-[#3B262E]/25 p-3 backdrop-blur-[2px] sm:items-center sm:p-6"
            onClick={onCloseMenu}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Our Little World Chapters"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.32, ease: silkEase }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-[2rem] border border-[#E3B4A4]/50 bg-[#FFFDFB] p-6 shadow-storybook-lg sm:p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-[#B07160] uppercase">
                    Storybook Index
                  </p>
                  <h2 className="font-serif text-2xl font-semibold text-[#3B262E]">
                    Our Little World
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={onCloseMenu}
                  aria-label="Close chapters menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E3B4A4]/40 text-[#755863] transition-colors hover:bg-[#FDEBF0] hover:text-[#3B262E]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-2.5">
                {chapters.map((chapter) => {
                  const isActive = chapter.id === activeChapter;
                  const isVisited = visitedChapters.includes(chapter.id);

                  return (
                    <motion.button
                      key={chapter.id}
                      type="button"
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        onSelectChapter(chapter.id);
                        onCloseMenu();
                      }}
                      className={`flex min-h-[54px] w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition-colors ${
                        isActive
                          ? "border-[#C98E7C] bg-[#FDEBF0]/80 text-[#3B262E]"
                          : "border-[#E3B4A4]/30 bg-[#FFF9F4]/70 text-[#3B262E] hover:border-[#C98E7C]/60 hover:bg-[#FFFDFB]"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                            isActive
                              ? "bg-[#C98E7C] text-[#FFFDFB]"
                              : isVisited
                                ? "bg-[#F9D5DF] text-[#3B262E]"
                                : "bg-[#FDE2CF]/60 text-[#755863]"
                          }`}
                        >
                          {chapter.number}
                        </span>
                        <span className="font-medium">{chapter.label}</span>
                      </div>

                      {isActive ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#B07160]">
                          <Sparkles className="h-3.5 w-3.5" />
                          Here
                        </span>
                      ) : isVisited ? (
                        <span className="text-xs text-[#755863]">Visited</span>
                      ) : null}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
