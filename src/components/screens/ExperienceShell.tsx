"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import type { ChapterId } from "@/types/love";
import { screenTransitionVariants } from "@/lib/motion";
import { soundEngine } from "@/lib/sound";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoaderCurtain } from "@/components/ui/LoaderCurtain";
import { AmbientBackdrop } from "@/components/ui/AmbientBackdrop";
import { TopBar } from "@/components/ui/TopBar";
import { ChapterNav } from "@/components/ui/ChapterNav";
import { IntroScreen } from "@/components/screens/IntroScreen";
import { LoveQuizScreen } from "@/components/screens/LoveQuizScreen";
import { LittleThingsScreen } from "@/components/screens/LittleThingsScreen";
import { AdventureScreen } from "@/components/screens/AdventureScreen";
import { LoveMeterScreen } from "@/components/screens/LoveMeterScreen";
import { SecretEnvelopeScreen } from "@/components/screens/SecretEnvelopeScreen";

interface ExperienceShellProps {
  hasTrackFile: boolean;
}

export function ExperienceShell({ hasTrackFile }: ExperienceShellProps) {
  const [loaderDone, setLoaderDone] = useState(false);
  const [activeChapter, setActiveChapter] = useState<ChapterId>("intro");
  const [visitedChapters, setVisitedChapters] = useState<ChapterId[]>(["intro"]);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    soundEngine.configureTrack(hasTrackFile);
  }, [hasTrackFile]);

  const navigateToChapter = useCallback((nextId: ChapterId) => {
    soundEngine.playPageTurn();
    setActiveChapter(nextId);
    setVisitedChapters((prev) =>
      prev.includes(nextId) ? prev : [...prev, nextId]
    );
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundEngine.setEnabled(next);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-dvh w-full overflow-x-clip bg-[#FFF9F4] text-[#3B262E]">
        <CustomCursor />
        {!loaderDone && <LoaderCurtain onComplete={() => setLoaderDone(true)} />}
        <AmbientBackdrop />

        <TopBar
          activeChapter={activeChapter}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          onOpenMenu={() => {
            soundEngine.playTap();
            setMenuOpen(true);
          }}
          onGoHome={() => navigateToChapter("intro")}
        />

        <main className="relative z-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter}
              variants={screenTransitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              {activeChapter === "intro" && (
                <IntroScreen onEnter={() => navigateToChapter("quiz")} />
              )}
              {activeChapter === "quiz" && (
                <LoveQuizScreen
                  onNextChapter={() => navigateToChapter("little-things")}
                />
              )}
              {activeChapter === "little-things" && (
                <LittleThingsScreen
                  onNextChapter={() => navigateToChapter("adventure")}
                />
              )}
              {activeChapter === "adventure" && (
                <AdventureScreen
                  onNextChapter={() => navigateToChapter("love-meter")}
                />
              )}
              {activeChapter === "love-meter" && (
                <LoveMeterScreen
                  onNextChapter={() => navigateToChapter("envelope")}
                />
              )}
              {activeChapter === "envelope" && (
                <SecretEnvelopeScreen
                  onReplayWorld={() => navigateToChapter("intro")}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <ChapterNav
          activeChapter={activeChapter}
          visitedChapters={visitedChapters}
          menuOpen={menuOpen}
          onCloseMenu={() => setMenuOpen(false)}
          onSelectChapter={navigateToChapter}
        />
      </div>
    </MotionConfig>
  );
}
