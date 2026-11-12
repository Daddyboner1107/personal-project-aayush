# MI AMORE — A Little World Made of Us ♡

A personal, storybook-inspired interactive romantic gift website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. Designed mobile-first for effortless sharing via WhatsApp or any mobile browser, with subtle desktop polish.

---

## Experience Chapters

1. **The Magical Introduction** — Floating clouds, twinkling stars, swaying flowers, bouncing hearts, subtle mouse parallax, and an editorial reveal of **MI AMORE ♡**.
2. **A Little Love Quiz** — 8 playful multiple-choice questions with tailored sweet, playful, and cheeky responses, progress indicators, and a verdict card.
3. **The Little Things** — 8 illustrated keepsake cards that bloom open on tap to reveal hidden notes.
4. **Choose Our Little Adventure** — 4 illustrated animated daydream postcards (*Paris Café*, *Midnight Drive*, *Starry Beach*, and *Cosy Day*) with postcard collection tracking.
5. **The Love Meter** — Tactile interactive affection slider with escalating milestone reactions culminating in `ERROR 404: NORMAL AMOUNT OF LOVE NOT FOUND.`
6. **The Secret Envelope** — Wax-sealed envelope opening animation revealing a handwritten-style love letter, floating particles, and a final lifetime-subscription surprise.

---

## Personalisation (Zero Component Edits Needed)

Every piece of personal copy—nickname, intro lines, song metadata, quiz questions/answers/reactions, keepsake messages, adventure notes, love meter milestones, and the final letter—lives in one typed file:

- [`src/config/love-content.ts`](src/config/love-content.ts)

Edit the strings in `loveContent` and rebuild or redeploy.

### Adding the Song (*Snowman* by Sia)

The header soundtrack player is pre-configured for **Snowman — Sia** (muted/off by default until tapped):

1. Place your legally obtained MP3 file at `public/audio/snowman.mp3`.
2. (Optional) Change the track title, artist, or path in `loveContent.music` inside [`src/config/love-content.ts`](src/config/love-content.ts).
3. If `public/audio/snowman.mp3` is not present yet, the player gracefully falls back to a gentle built-in music-box chime loop with zero errors.

---

## Local Development

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm

### Setup & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Checks

```bash
npx tsc --noEmit
npm run lint
npm run build
```

---

## Deploying to Vercel

This project requires **no database, no backend, and no environment variables / API keys**.

### Option 1: GitHub + Vercel Dashboard (Recommended)

1. Create a new repository on GitHub and push this project.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Keep the default **Next.js** framework preset (`npm run build`).
4. Click **Deploy**.
5. Share the resulting `https://your-project.vercel.app` link (complete with an automatic Open Graph preview card for WhatsApp).

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts to link and deploy.
