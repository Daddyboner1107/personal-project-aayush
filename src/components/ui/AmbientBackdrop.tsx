export function AmbientBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Pastel atmospheric washes */}
      <div className="absolute -top-28 -left-24 h-[26rem] w-[26rem] rounded-full bg-[#F9D5DF]/40 blur-3xl" />
      <div className="absolute top-1/4 -right-28 h-[24rem] w-[24rem] rounded-full bg-[#E6DDF7]/42 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-[#FDE2CF]/42 blur-3xl" />
      <div className="absolute right-1/4 bottom-12 h-64 w-64 rounded-full bg-[#DCEBF7]/38 blur-3xl" />

      {/* Subtle paper grain overlay */}
      <div className="paper-grain absolute inset-0 opacity-75" />

      {/* Delicate fixed CSS twinkling corner stars */}
      <svg
        className="animate-twinkle absolute top-20 left-[8%] h-4 w-4 text-[#C98E7C]/60"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
      </svg>
      <svg
        className="animate-twinkle absolute top-32 right-[10%] h-3.5 w-3.5 text-[#B07160]/55"
        style={{ animationDelay: "1.2s" }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
      </svg>
      <svg
        className="animate-twinkle absolute bottom-28 left-[14%] h-3 w-3 text-[#C98E7C]/50"
        style={{ animationDelay: "2.1s" }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
      </svg>
      <svg
        className="animate-twinkle absolute right-[15%] bottom-36 h-4 w-4 text-[#D3C3F0]"
        style={{ animationDelay: "0.7s" }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
      </svg>
    </div>
  );
}
