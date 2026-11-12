export type ChapterId =
  | "intro"
  | "quiz"
  | "little-things"
  | "adventure"
  | "love-meter"
  | "envelope";

export interface ChapterMeta {
  id: ChapterId;
  number: string;
  label: string;
  shortLabel: string;
}

export interface QuizOption {
  id: string;
  label: string;
  response: string;
  tone: "sweet" | "playful" | "cheeky";
}

export interface QuizQuestion {
  id: string;
  question: string;
  hint?: string;
  options: QuizOption[];
}

export type AdoreIllustrationKey =
  | "smile"
  | "excitement"
  | "tantrum"
  | "magic"
  | "expressions"
  | "memories"
  | "personality"
  | "you";

export interface AdoreCardItem {
  id: string;
  title: string;
  previewTag: string;
  message: string;
  accent: "pink" | "peach" | "lavender" | "blue";
  illustration: AdoreIllustrationKey;
}

export type AdventureId = "paris" | "drive" | "beach" | "cosy";

export interface AdventureChoice {
  id: AdventureId;
  title: string;
  subtitle: string;
  stampLabel: string;
  badgeText: string;
  description: string;
  personalNote: string;
  accent: "pink" | "lavender" | "blue" | "peach";
}

export interface LoveMilestone {
  min: number;
  max: number;
  statusTag: string;
  headline: string;
  subtext: string;
  isErrorMax?: boolean;
}

export interface MusicConfig {
  title: string;
  artist: string;
  audioSrc: string;
  caption: string;
  spotifyUrl?: string;
}

export interface LoveContentConfig {
  recipientNickname: string;
  petName: string;
  senderName: string;
  music: MusicConfig;
  siteMeta: {
    title: string;
    description: string;
    ogSubtitle: string;
  };
  loader: {
    eyebrow: string;
    message: string;
  };
  chapters: ChapterMeta[];
  intro: {
    prologue: string;
    headline: string;
    subtitle: string;
    ctaLabel: string;
    footnote: string;
  };
  quiz: {
    eyebrow: string;
    title: string;
    subtitle: string;
    questions: QuizQuestion[];
    completionTitle: string;
    completionMessage: string;
    nextButtonLabel: string;
    retakeLabel: string;
  };
  littleThings: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: AdoreCardItem[];
    allOpenedNote: string;
    nextButtonLabel: string;
  };
  adventure: {
    eyebrow: string;
    title: string;
    subtitle: string;
    choices: AdventureChoice[];
    allVisitedNote: string;
    nextButtonLabel: string;
  };
  loveMeter: {
    eyebrow: string;
    title: string;
    subtitle: string;
    initialValue: number;
    milestones: LoveMilestone[];
    nudgeLabel: string;
    nextButtonLabel: string;
  };
  envelope: {
    eyebrow: string;
    title: string;
    tapPrompt: string;
    sealText: string;
    letterParagraphs: string[];
    letterClosing: string;
    letterSignature: string;
    surpriseButtonLabel: string;
    surpriseBadge: string;
    surpriseMessage: string;
    replayLabel: string;
  };
}
