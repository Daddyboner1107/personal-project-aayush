import type { LoveContentConfig } from "@/types/love";

/**
 * ============================================================================
 * MI AMORE — CENTRAL PERSONALISATION CONFIG
 * ============================================================================
 * Edit any text, quiz questions, funny reactions, love letter paragraphs,
 * or adventure notes right here. Every screen reads directly from this file.
 * ============================================================================
 */
export const loveContent: LoveContentConfig = {
  recipientNickname: "Mi Amore",
  petName: "cute little baby",
  senderName: "Your favourite human",

  music: {
    title: "Snowman",
    artist: "Sia",
    audioSrc: "/audio/snowman.mp3",
    caption: "Our little soundtrack ♡",
    spotifyUrl: "https://open.spotify.com/search/Snowman%20Sia",
  },

  siteMeta: {
    title: "MI AMORE ♡ — A Little World Made of Us",
    description:
      "A tiny magical storybook universe crafted exclusively for my Mi Amore.",
    ogSubtitle: "A tiny little world, made just for you.",
  },

  loader: {
    eyebrow: "Chapter Zero",
    message: "Gathering stars and tiny memories for Mi Amore…",
  },

  chapters: [
    { id: "intro", number: "01", label: "Our Little Universe", shortLabel: "Intro" },
    { id: "quiz", number: "02", label: "A Little Love Quiz", shortLabel: "Quiz" },
    {
      id: "little-things",
      number: "03",
      label: "The Little Things",
      shortLabel: "Secrets",
    },
    {
      id: "adventure",
      number: "04",
      label: "Our Little Adventure",
      shortLabel: "Escape",
    },
    {
      id: "love-meter",
      number: "05",
      label: "The Love Meter",
      shortLabel: "Meter",
    },
    {
      id: "envelope",
      number: "06",
      label: "The Secret Envelope",
      shortLabel: "Letter",
    },
  ],

  intro: {
    prologue:
      "Somewhere in this little universe, there's a girl who makes everything a little more beautiful.",
    headline: "MI AMORE ♡",
    subtitle: "A tiny little world, made just for you.",
    ctaLabel: "Enter my little world →",
    footnote: "Best experienced slowly, my cute little baby",
  },

  quiz: {
    eyebrow: "Chapter 02 · Storytime Check",
    title: "Okay, little miss cute. Let's see how well you know us!",
    subtitle:
      "No wrong answers allowed — though some answers may earn extra teasing.",
    questions: [
      {
        id: "q1",
        question: "Who fell first?",
        hint: "Be honest, the stars were watching.",
        options: [
          {
            id: "q1-a",
            label: "Definitely me (I couldn't help it)",
            response:
              "Bold of you to admit it so quickly, Mi Amore. I was already halfway gone before you blinked.",
            tone: "sweet",
          },
          {
            id: "q1-b",
            label: "You, obviously. Completely head over heels.",
            response:
              "Guilty as charged. One smile from you and my whole composure filed for early retirement.",
            tone: "playful",
          },
          {
            id: "q1-c",
            label: "Both of us, just pretending to be cool",
            response:
              "Two terrible actors trying to act casual while secretly smiling at our phones. Iconic.",
            tone: "cheeky",
          },
        ],
      },
      {
        id: "q2",
        question: "Who is the bigger baby?",
        hint: "Think carefully about pout frequency.",
        options: [
          {
            id: "q2-a",
            label: "Me — and I deserve snacks for it",
            response:
              "10/10 self-awareness. Honestly, my cute little baby gets unlimited cuddle privileges forever.",
            tone: "sweet",
          },
          {
            id: "q2-b",
            label: "You, especially when you want attention",
            response:
              "Excuse me, that is slander! (Okay, maybe a tiny bit true when you're ignoring me.)",
            tone: "cheeky",
          },
          {
            id: "q2-c",
            label: "We take turns being dramatic toddlers",
            response:
              "A balanced partnership: you pout first, I baby you, then I complain until you hug me back.",
            tone: "playful",
          },
        ],
      },
      {
        id: "q3",
        question: "Who gets angry over the tiniest things?",
        hint: "Remember that one tiny moment…",
        options: [
          {
            id: "q3-a",
            label: "Me, for approximately 4.5 minutes",
            response:
              "And yet you still look ridiculously adorable with your tiny grumpy eyebrows. Unfair.",
            tone: "playful",
          },
          {
            id: "q3-b",
            label: "Not me! (I am pure angelic calm)",
            response:
              "Sure, little miss innocent. Should I remind you about your tiny cute tantrums? Thought so.",
            tone: "cheeky",
          },
          {
            id: "q3-c",
            label: "You, when I take 2 seconds too long to reply",
            response:
              "Listen, two seconds without Mi Amore feels like three business days. Valid reaction.",
            tone: "sweet",
          },
        ],
      },
      {
        id: "q4",
        question: "Who misses the other more?",
        hint: "There is only one mathematically true vibe here.",
        options: [
          {
            id: "q4-a",
            label: "I miss you every single second",
            response:
              "Good, because I'm already missing you five minutes before we even say goodbye.",
            tone: "sweet",
          },
          {
            id: "q4-b",
            label: "You miss me like a lost puppy",
            response:
              "Accurate. Zero dignity left, 100% devoted to waiting for your next text.",
            tone: "playful",
          },
          {
            id: "q4-c",
            label: "It's a permanent tie of clinginess",
            response:
              "Certified clingy duo. Honestly, wouldn't trade it for anything in the universe.",
            tone: "sweet",
          },
        ],
      },
      {
        id: "q5",
        question: "Who is more dramatic?",
        hint: "Oscar committee is taking notes.",
        options: [
          {
            id: "q5-a",
            label: "Me — I bring cinema to everyday life",
            response:
              "And I happily sit in the front row with popcorn because your drama is my favourite comedy.",
            tone: "playful",
          },
          {
            id: "q5-b",
            label: "You, with your exaggerated sighs",
            response:
              "Every exaggerated sigh is a carefully crafted plea for a forehead kiss. It works, doesn't it?",
            tone: "cheeky",
          },
          {
            id: "q5-c",
            label: "Only when one of us is hangry",
            response:
              "Rule #1 of our little universe: feed the cute little baby first, ask questions later.",
            tone: "playful",
          },
        ],
      },
      {
        id: "q6",
        question: "Who would win an argument even when they're wrong?",
        hint: "Hint: cute face = automatic immunity.",
        options: [
          {
            id: "q6-a",
            label: "Me. One cute look and case closed.",
            response:
              "The legal system isn't ready for your puppy eyes. Even the judge would apologize to you.",
            tone: "cheeky",
          },
          {
            id: "q6-b",
            label: "You, by making me laugh mid-sentence",
            response:
              "That's my secret superpower — disarming your grumpy face with one terrible joke.",
            tone: "playful",
          },
          {
            id: "q6-c",
            label: "Nobody wins, we end up giggling anyway",
            response:
              "Best possible verdict: zero grudges, one hug, and instant peace.",
            tone: "sweet",
          },
        ],
      },
      {
        id: "q7",
        question: "Who needs more attention?",
        hint: "Choose wisely, needy baby.",
        options: [
          {
            id: "q7-a",
            label: "Me! Give me 100% of your focus right now",
            response:
              "Deal. Consider all of my attention permanently reserved for you, Mi Amore.",
            tone: "sweet",
          },
          {
            id: "q7-b",
            label: "You — you're literally obsessed with me",
            response:
              "Yes, and I'm not even slightly embarrassed about it. Look at you!",
            tone: "playful",
          },
          {
            id: "q7-c",
            label: "Equal parts constant reassurance please",
            response:
              "Daily reminder unlocked: you are adored, treasured, and mildly spoiled.",
            tone: "sweet",
          },
        ],
      },
      {
        id: "q8",
        question: "Who is absolutely impossible to stay mad at?",
        hint: "Final question — easy 100/100.",
        options: [
          {
            id: "q8-a",
            label: "Me, obviously. Look how cute I am.",
            response:
              "True! I try to act serious for ten seconds, you smile, and my entire brain melts.",
            tone: "sweet",
          },
          {
            id: "q8-b",
            label: "You, because you always make me smile",
            response:
              "Making you smile through a fake pout is honestly my proudest life achievement.",
            tone: "playful",
          },
          {
            id: "q8-c",
            label: "Us — we can't last five minutes apart",
            response:
              "Record for staying mad: 3 minutes and 12 seconds. Long may it stay broken.",
            tone: "sweet",
          },
        ],
      },
    ],
    completionTitle: "Official Verdict: Soulmate Certified ♡",
    completionMessage:
      "You scored 1000/8 on knowing us. Mostly because you're adorable and I'm hopelessly biased toward you.",
    nextButtonLabel: "See what I secretly adore →",
    retakeLabel: "Play quiz again",
  },

  littleThings: {
    eyebrow: "Chapter 03 · Pocketful of Secrets",
    title: "Things I secretly adore about you.",
    subtitle:
      "Tap each little keepsake card to uncover a quiet truth I keep in my heart.",
    cards: [
      {
        id: "smile",
        title: "Your smile.",
        previewTag: "Secret 01",
        message:
          "The kind that sneaks up on your face and instantly makes my whole day softer, brighter, and infinitely better.",
        accent: "pink",
        illustration: "smile",
      },
      {
        id: "excitement",
        title: "Your childish excitement.",
        previewTag: "Secret 02",
        message:
          "How your eyes light up over tiny treats, cute things, or random good news — please never grow out of that magic.",
        accent: "peach",
        illustration: "excitement",
      },
      {
        id: "tantrums",
        title: "Your little tantrums.",
        previewTag: "Secret 03",
        message:
          "Even when you're pretending to be mad at me, you're still the cutest tiny human on the planet. Zero intimidation, 100% adorable.",
        accent: "lavender",
        illustration: "tantrum",
      },
      {
        id: "effortless",
        title: "The way you make me smile without trying.",
        previewTag: "Secret 04",
        message:
          "One sleepy voice note, one random text, or just your face — and suddenly I'm grinning at my screen like an idiot.",
        accent: "blue",
        illustration: "magic",
      },
      {
        id: "expressions",
        title: "Your adorable expressions.",
        previewTag: "Secret 05",
        message:
          "Every little side-eye, tiny gasp, dramatic blink, and sleepy pout tells a whole story before you even say a word.",
        accent: "peach",
        illustration: "expressions",
      },
      {
        id: "memories",
        title: "The way you turn ordinary moments into special memories.",
        previewTag: "Secret 06",
        message:
          "Doing nothing special somehow turns into my favourite story of the week simply because you were right there with me.",
        accent: "pink",
        illustration: "memories",
      },
      {
        id: "personality",
        title: "Your cute little personality.",
        previewTag: "Secret 07",
        message:
          "A chaotic, warm, hilarious, gentle mix of sweetness and sass that nobody else in the world could ever imitate.",
        accent: "lavender",
        illustration: "personality",
      },
      {
        id: "you",
        title: "Simply being YOU.",
        previewTag: "Secret 08",
        message:
          "On your sparkling days and your quiet tired days alike — every single version of you is my favourite person.",
        accent: "blue",
        illustration: "you",
      },
    ],
    allOpenedNote:
      "You found every single secret, Mi Amore — and honestly, this list could go on forever.",
    nextButtonLabel: "Pick our little escape →",
  },

  adventure: {
    eyebrow: "Chapter 04 · Choose Your Escape",
    title: "If we could disappear anywhere right now...",
    subtitle:
      "Pick a little daydream below. You can visit one, or collect all four.",
    choices: [
      {
        id: "paris",
        title: "A little Paris café.",
        subtitle: "Warm croissants, fairy lights & soft French chatter",
        stampLabel: "Postcard · Paris",
        badgeText: "Two espressos & one shared pastry",
        description:
          "A tiny corner table under warm amber bistro lights, flaky pastries dusted with sugar, and nowhere else we need to be.",
        personalNote:
          "I'd steal the last bite of your croissant just to watch you pretend to be offended — then order two more for my cute little baby.",
        accent: "pink",
      },
      {
        id: "drive",
        title: "A midnight drive with our favourite songs.",
        subtitle: "Windows cracked, city glow & off-key duets",
        stampLabel: "Postcard · Midnight",
        badgeText: "Playlist on repeat · No destination",
        description:
          "Empty ribbon roads under velvet dark skies, dashboard warmth, cool night breeze, and every song turned into our private concert.",
        personalNote:
          "Passenger princess DJ duty is all yours — I'll drive slow on purpose just so the night takes a little longer to end.",
        accent: "lavender",
      },
      {
        id: "beach",
        title: "A beach under a sky full of stars.",
        subtitle: "Silver waves, cool sand & a million constellations",
        stampLabel: "Postcard · Starlight",
        badgeText: "Barefoot by the tide",
        description:
          "Quiet ocean whispers catching the moonlight, cool sand under our feet, and a canopy of stars stretching endlessly above us.",
        personalNote:
          "We'd count constellations, invent ridiculous names for the ones we don't know, and sit close enough to forget the chill.",
        accent: "blue",
      },
      {
        id: "cosy",
        title: "A cosy day together doing absolutely nothing.",
        subtitle: "Rain on the glass, soft blankets & lazy giggles",
        stampLabel: "Postcard · Home",
        badgeText: "Do Not Disturb · Blanket Fort",
        description:
          "Gentle rain tapping the windowpane, oversized blankets, warm mugs in hand, and zero alarms allowed all day long.",
        personalNote:
          "Honestly? Doing nothing with you beats doing everything with anyone else. Unlimited cuddles included.",
        accent: "peach",
      },
    ],
    allVisitedNote:
      "All 4 postcards collected! Wherever we go, my favourite place is always next to you.",
    nextButtonLabel: "Check the Love Meter →",
  },

  loveMeter: {
    eyebrow: "Chapter 05 · Completely Scientific Test",
    title: "How much do you love your favourite human?",
    subtitle:
      "Slide gently (or aggressively) to measure your exact affection levels.",
    initialValue: 35,
    milestones: [
      {
        min: 0,
        max: 15,
        statusTag: "Suspect Readings",
        headline: "Excuse me? Did your thumb slip?",
        subtext:
          "Nice try, tiny troublemaker. Drag that slider up immediately before I demand a hug tax.",
      },
      {
        min: 16,
        max: 35,
        statusTag: "Warming Up",
        headline: "Hmm, cute... like sharing the last fry.",
        subtext:
          "A respectable start, Mi Amore, though we both know you're holding back.",
      },
      {
        min: 36,
        max: 55,
        statusTag: "Sweetly Obvious",
        headline: "Okay, now we're talking — certified softie.",
        subtext:
          "Enough affection to forgive my terrible jokes and still reply with heart eyes.",
      },
      {
        min: 56,
        max: 75,
        statusTag: "Dangerously Cute",
        headline: "Officially obsessed (in a very charming way).",
        subtext:
          "Warning: prolonged exposure at this level causes spontaneous smiling and extra clinginess.",
      },
      {
        min: 76,
        max: 99,
        statusTag: "Cosmic Overload",
        headline: "The universe is struggling to contain this much love!",
        subtext:
          "Almost at critical sweetness capacity… push it all the way to 100%!",
      },
      {
        min: 100,
        max: 100,
        statusTag: "System Meltdown · ∞%",
        headline: "ERROR 404: NORMAL AMOUNT OF LOVE NOT FOUND.",
        subtext:
          "Sensor broken from excessive cuteness. Lifetime affection overflow confirmed for Mi Amore ♡",
        isErrorMax: true,
      },
    ],
    nudgeLabel: "Push to maximum love ♡",
    nextButtonLabel: "Open your final surprise →",
  },

  envelope: {
    eyebrow: "Chapter 06 · Kept Just For You",
    title: "One last little thing, Mi Amore.",
    tapPrompt: "Tap the wax seal to open your letter",
    sealText: "♡",
    letterParagraphs: [
      "To my Mi Amore,",
      "I don't think you realise how special you are.",
      "It's the little things about you, your smile, your expressions, your childish moments, your random moods and all those tiny things that make you YOU.",
      "I hope you never stop being this adorable little person.",
      "And I hope I always get to be the person who makes you smile, annoys you a little, and reminds you how loved you are.",
      "You're my favourite little plot twist.",
    ],
    letterClosing: "With all my love,",
    letterSignature: "Your favourite human. ♡",
    surpriseButtonLabel: "One more surprise?",
    surpriseBadge: "Official Lifetime Contract",
    surpriseMessage:
      "You're stuck with me. No returns. No refunds. Lifetime subscription. ♡",
    replayLabel: "Replay our little world",
  },
};
