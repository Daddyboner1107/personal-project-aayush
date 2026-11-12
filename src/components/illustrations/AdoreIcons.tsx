import type { AdoreIllustrationKey } from "@/types/love";

export function AdoreIcon({ kind }: { kind: AdoreIllustrationKey }) {
  switch (kind) {
    case "smile":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
          <circle
            cx="32"
            cy="32"
            r="24"
            fill="#FDEBF0"
            stroke="#C98E7C"
            strokeWidth="1.8"
          />
          <circle cx="24" cy="27" r="2.5" fill="#3B262E" />
          <circle cx="40" cy="27" r="2.5" fill="#3B262E" />
          <circle cx="20" cy="34" r="3.5" fill="#F4B8C8" opacity="0.8" />
          <circle cx="44" cy="34" r="3.5" fill="#F4B8C8" opacity="0.8" />
          <path
            d="M23 36C25.5 41.5 38.5 41.5 41 36"
            stroke="#3B262E"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "excitement":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
          <path
            d="M32 10L36.8 23.6L51 25L39.8 34.4L43.2 48.5L32 40.8L20.8 48.5L24.2 34.4L13 25L27.2 23.6L32 10Z"
            fill="#FDE2CF"
            stroke="#C98E7C"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="15" cy="14" r="2.5" fill="#F4B8C8" />
          <circle cx="51" cy="15" r="2" fill="#D3C3F0" />
          <circle cx="49" cy="49" r="2.5" fill="#C98E7C" />
        </svg>
      );
    case "tantrum":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
          <path
            d="M18 44H47C52.5 44 56 39.8 56 34.5C56 29.7 52.3 25.8 47.6 25.3C45.8 19.3 40.2 15 33.6 15C26.4 15 20.5 20.1 19.2 26.8C14.1 27.6 10 31.9 10 37.2C10 41.1 13.6 44 18 44Z"
            fill="#EFE9FA"
            stroke="#9E86C8"
            strokeWidth="1.8"
          />
          <path
            d="M25 29L29 31M40 29L36 31"
            stroke="#3B262E"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M29 37C31 35 34 35 36 37"
            stroke="#3B262E"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M49 14L51 18L55 19L51 20L49 24L47 20L43 19L47 18L49 14Z"
            fill="#F4B8C8"
          />
        </svg>
      );
    case "magic":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
          <path
            d="M15 49L42 22"
            stroke="#C98E7C"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M44 12L46.4 18.6L53 21L46.4 23.4L44 30L41.6 23.4L35 21L41.6 18.6L44 12Z"
            fill="#DCEBF7"
            stroke="#7BA2C7"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="22" r="2.5" fill="#F4B8C8" />
          <circle cx="49" cy="39" r="2.5" fill="#FDE2CF" />
          <circle cx="31" cy="46" r="2" fill="#D3C3F0" />
        </svg>
      );
    case "expressions":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
          <rect
            x="14"
            y="14"
            width="36"
            height="36"
            rx="12"
            fill="#FDE2CF"
            stroke="#C98E7C"
            strokeWidth="1.8"
          />
          <path
            d="M24 27C25.5 25 28 25 29.5 27"
            stroke="#3B262E"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="40" cy="27.5" r="2.3" fill="#3B262E" />
          <path
            d="M27 37C30 40 35 40 38 37"
            stroke="#3B262E"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M47 10L50 15H44L47 10Z"
            fill="#F4B8C8"
          />
        </svg>
      );
    case "memories":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
          <rect
            x="14"
            y="12"
            width="36"
            height="42"
            rx="6"
            fill="#FFFDFB"
            stroke="#C98E7C"
            strokeWidth="1.8"
          />
          <rect x="19" y="17" width="26" height="22" rx="4" fill="#FDEBF0" />
          <path
            d="M32 34C32 34 25 29.6 25 25.1C25 23 26.6 21.5 28.6 21.5C30 21.5 31.3 22.3 32 23.4C32.7 22.3 34 21.5 35.4 21.5C37.4 21.5 39 23 39 25.1C39 29.6 32 34 32 34Z"
            fill="#F4B8C8"
            stroke="#C98E7C"
            strokeWidth="1.5"
          />
          <path
            d="M23 46H41"
            stroke="#E3B4A4"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "personality":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
          <circle cx="32" cy="20" r="9" fill="#F9D5DF" />
          <circle cx="44" cy="30" r="9" fill="#E6DDF7" />
          <circle cx="38" cy="43" r="9" fill="#FDE2CF" />
          <circle cx="26" cy="43" r="9" fill="#DCEBF7" />
          <circle cx="20" cy="30" r="9" fill="#F9D5DF" />
          <circle
            cx="32"
            cy="32"
            r="8"
            fill="#FFF9F4"
            stroke="#C98E7C"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "you":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
          <circle cx="32" cy="32" r="23" fill="#DCEBF7" opacity="0.65" />
          <path
            d="M32 48C32 48 16 38 16 26.5C16 21.5 19.9 17.6 24.8 17.6C28 17.6 30.8 19.4 32 22C33.2 19.4 36 17.6 39.2 17.6C44.1 17.6 48 21.5 48 26.5C48 38 32 48 32 48Z"
            fill="#F4B8C8"
            stroke="#C98E7C"
            strokeWidth="1.9"
            strokeLinejoin="round"
          />
          <path
            d="M46 13L47.5 16.5L51 18L47.5 19.5L46 23L44.5 19.5L41 18L44.5 16.5L46 13Z"
            fill="#C98E7C"
          />
        </svg>
      );
  }
}
