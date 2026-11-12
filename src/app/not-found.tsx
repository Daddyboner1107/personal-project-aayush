import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[#FFF9F4] px-6 py-16 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#F9D5DF]/45 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 h-64 w-64 rounded-full bg-[#E6DDF7]/45 blur-3xl"
      />

      <div className="relative z-10 max-w-md rounded-[2rem] border border-[#E3B4A4]/45 bg-[#FFFDFB] p-8 sm:p-11 shadow-storybook">
        <p className="mb-3 text-xs font-semibold tracking-[0.24em] text-[#B07160] uppercase">
          Lost Constellation · 404
        </p>
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#3B262E] sm:text-5xl">
          Oops, wrong little cloud
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#755863]">
          Looks like you wandered off the storybook map, Mi Amore. Let&apos;s
          bring you straight back to our little universe.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#C98E7C]/40 bg-[#F9D5DF] px-7 py-3 text-sm font-semibold text-[#3B262E] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
        >
          Back to Mi Amore ♡
        </Link>
      </div>
    </main>
  );
}
