"use client";

import { motion } from "framer-motion";
import type { AdventureId } from "@/types/love";

export function AdventureSceneIllustration({ id }: { id: AdventureId }) {
  switch (id) {
    case "paris":
      return (
        <svg
          viewBox="0 0 420 230"
          fill="none"
          className="h-auto w-full rounded-[1.5rem]"
          aria-label="Illustrated Paris café at dusk"
        >
          <rect width="420" height="230" rx="24" fill="#FDEBF0" />
          <circle cx="320" cy="64" r="46" fill="#FDE2CF" opacity="0.8" />
          {/* Distant Eiffel silhouette */}
          <path
            d="M312 162C317 142 321 116 323 82H327C329 116 333 142 338 162H331C329 152 321 152 319 162H312Z"
            fill="#E3B4A4"
            opacity="0.65"
          />
          <path d="M316 132H334" stroke="#E3B4A4" strokeWidth="2.5" opacity="0.65" />

          {/* Cobblestone ground */}
          <rect x="0" y="162" width="420" height="68" fill="#F8EAE3" />

          {/* Cafe awning */}
          <path d="M40 52H228L244 86H24L40 52Z" fill="#F4B8C8" />
          <path d="M68 52H96L94 86H64L68 52Z" fill="#FFFDFB" />
          <path d="M126 52H154L154 86H126L126 52Z" fill="#FFFDFB" />
          <path d="M184 52H212L216 86H186L184 52Z" fill="#FFFDFB" />
          <path
            d="M24 86C34 94 46 94 56 86C66 94 78 94 88 86C98 94 110 94 120 86C130 94 142 94 152 86C162 94 174 94 184 86C194 94 206 94 216 86C226 94 238 94 244 86"
            stroke="#C98E7C"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Glowing bistro bulbs */}
          {[55, 95, 135, 175, 215].map((cx, i) => (
            <motion.circle
              key={cx}
              cx={cx}
              cy={42}
              r={4.5}
              fill="#FFF3C4"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Bistro table & two cups + croissant */}
          <rect x="116" y="148" width="90" height="8" rx="4" fill="#C98E7C" />
          <path d="M161 156V196M145 196H177" stroke="#B07160" strokeWidth="3.5" strokeLinecap="round" />

          {/* Cup 1 & Cup 2 */}
          <rect x="128" y="135" width="16" height="13" rx="3" fill="#FFFDFB" stroke="#C98E7C" strokeWidth="1.6" />
          <rect x="178" y="135" width="16" height="13" rx="3" fill="#FFFDFB" stroke="#C98E7C" strokeWidth="1.6" />
          {/* Croissant */}
          <ellipse cx="161" cy="143" rx="10" ry="5.5" fill="#F2BE8D" stroke="#C98E7C" strokeWidth="1.4" />

          {/* Animated steam curls */}
          <motion.path
            d="M135 130C132 124 139 119 135 113"
            stroke="#C98E7C"
            strokeWidth="1.8"
            strokeLinecap="round"
            animate={{ y: [0, -5, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.8, repeat: Infinity }}
          />
          <motion.path
            d="M186 130C189 124 182 119 186 113"
            stroke="#C98E7C"
            strokeWidth="1.8"
            strokeLinecap="round"
            animate={{ y: [0, -5, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: 0.7 }}
          />
        </svg>
      );

    case "drive":
      return (
        <svg
          viewBox="0 0 420 230"
          fill="none"
          className="h-auto w-full rounded-[1.5rem]"
          aria-label="Illustrated midnight drive with music"
        >
          <rect width="420" height="230" rx="24" fill="#3C3252" />
          <circle cx="348" cy="54" r="22" fill="#FFF3D6" />
          <circle cx="356" cy="49" r="19" fill="#3C3252" />

          {/* Twinkling stars */}
          {[
            [56, 44],
            [114, 30],
            [178, 56],
            [248, 36],
            [292, 72],
            [82, 86],
          ].map(([cx, cy], idx) => (
            <motion.circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={2.2}
              fill="#FFF9F4"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.25, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.4 }}
            />
          ))}

          {/* Distant rolling hills */}
          <path
            d="M0 156C60 132 130 138 205 154C275 168 345 130 420 148V230H0V156Z"
            fill="#4F426B"
          />

          {/* Ribbon road */}
          <path d="M0 176H420V230H0V176Z" fill="#2D253E" />
          <motion.path
            d="M20 202H65M95 202H140M170 202H215M245 202H290M320 202H365"
            stroke="#FDE2CF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="36 28"
            animate={{ x: [-30, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          />

          {/* Headlight glow */}
          <path
            d="M258 176L380 158V194L258 182Z"
            fill="#FFF3C4"
            opacity="0.22"
          />

          {/* Cute pastel car */}
          <path
            d="M138 176H262C264 166 258 158 245 157L222 140C215 135 205 133 190 133H166C155 133 145 139 140 150L132 162C130 170 132 176 138 176Z"
            fill="#F9D5DF"
            stroke="#FFF9F4"
            strokeWidth="2"
          />
          <path
            d="M153 153L164 140H202L217 153H153Z"
            fill="#DCEBF7"
          />
          <circle cx="164" cy="178" r="12" fill="#3B262E" stroke="#FFF9F4" strokeWidth="2.5" />
          <circle cx="236" cy="178" r="12" fill="#3B262E" stroke="#FFF9F4" strokeWidth="2.5" />

          {/* Floating music notes */}
          <motion.g
            animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.6, repeat: Infinity }}
          >
            <path
              d="M178 106V88L192 84V102"
              stroke="#FDE2CF"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="175" cy="107" r="3.5" fill="#FDE2CF" />
            <circle cx="189" cy="103" r="3.5" fill="#FDE2CF" />
          </motion.g>
          <motion.g
            animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
          >
            <path
              d="M214 96V82L224 79"
              stroke="#F9D5DF"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="211" cy="97" r="3" fill="#F9D5DF" />
          </motion.g>
        </svg>
      );

    case "beach":
      return (
        <svg
          viewBox="0 0 420 230"
          fill="none"
          className="h-auto w-full rounded-[1.5rem]"
          aria-label="Illustrated beach under a starry night sky"
        >
          <rect width="420" height="230" rx="24" fill="#2A3E59" />
          {/* Moon reflection */}
          <circle cx="210" cy="68" r="24" fill="#FFF7DF" opacity="0.92" />

          {/* Constellation lines & stars */}
          <path
            d="M72 52L108 38L138 62L168 42"
            stroke="#DCEBF7"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.55"
          />
          {[
            [72, 52],
            [108, 38],
            [138, 62],
            [168, 42],
            [290, 44],
            [338, 64],
            [368, 38],
            [48, 86],
          ].map(([cx, cy], idx) => (
            <motion.circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={2.2}
              fill="#FFF9F4"
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: idx * 0.3 }}
            />
          ))}

          {/* Shooting star */}
          <motion.path
            d="M285 32L325 56"
            stroke="#FFF3D6"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ opacity: [0, 1, 0], x: [-12, 16], y: [-6, 8] }}
            transition={{ duration: 3.4, repeat: Infinity, repeatDelay: 1.5 }}
          />

          {/* Calm ocean */}
          <rect x="0" y="130" width="420" height="46" fill="#4B6F93" />
          <motion.path
            d="M150 144H270M168 156H252M186 167H234"
            stroke="#FFF7DF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.55"
            animate={{ opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 2.8, repeat: Infinity }}
          />

          {/* Soft shoreline wave + sand */}
          <path
            d="M0 172C95 162 165 182 250 172C325 164 375 176 420 170V230H0V172Z"
            fill="#F4DEC9"
          />
          <motion.path
            d="M0 172C95 162 165 182 250 172C325 164 375 176 420 170"
            stroke="#FFFDFB"
            strokeWidth="3.5"
            strokeLinecap="round"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />

          {/* Little heart drawn in sand */}
          <path
            d="M312 206C312 206 303 200.5 303 195C303 192.4 305.1 190.5 307.6 190.5C309.3 190.5 311 191.4 312 192.9C313 191.4 314.7 190.5 316.4 190.5C318.9 190.5 321 192.4 321 195C321 200.5 312 206 312 206Z"
            stroke="#C98E7C"
            strokeWidth="1.8"
            fill="none"
          />
        </svg>
      );

    case "cosy":
      return (
        <svg
          viewBox="0 0 420 230"
          fill="none"
          className="h-auto w-full rounded-[1.5rem]"
          aria-label="Illustrated cosy rainy day indoors"
        >
          <rect width="420" height="230" rx="24" fill="#FDE2CF" />
          {/* Window looking out at soft rain */}
          <rect
            x="140"
            y="28"
            width="140"
            height="112"
            rx="16"
            fill="#DCEBF7"
            stroke="#FFFDFB"
            strokeWidth="6"
          />
          <path d="M210 28V140M140 84H280" stroke="#FFFDFB" strokeWidth="4" />

          {/* Animated rain streaks inside window */}
          {[162, 186, 232, 258].map((x, idx) => (
            <motion.line
              key={x}
              x1={x}
              y1="44"
              x2={x - 5}
              y2="58"
              stroke="#8FB3D4"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ y: [0, 56], opacity: [0, 0.9, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: idx * 0.35,
              }}
            />
          ))}

          {/* String of fairy lights */}
          <path
            d="M28 42C100 66 320 66 392 42"
            stroke="#C98E7C"
            strokeWidth="1.5"
          />
          {[68, 128, 210, 292, 352].map((cx, i) => (
            <motion.circle
              key={cx}
              cx={cx}
              cy={i === 2 ? 59 : 53}
              r={4.5}
              fill="#FFF5C8"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.1, repeat: Infinity, delay: i * 0.25 }}
            />
          ))}

          {/* Cosy couch/blanket fort & cushions */}
          <rect x="64" y="152" width="292" height="58" rx="24" fill="#F9D5DF" />
          <rect x="92" y="138" width="52" height="36" rx="14" fill="#E6DDF7" />
          <rect x="276" y="138" width="52" height="36" rx="14" fill="#FFFDFB" />
          {/* Draped warm blanket */}
          <path
            d="M116 154C158 144 262 144 304 154V208H116V154Z"
            fill="#FFF9F4"
            stroke="#E3B4A4"
            strokeWidth="2"
          />

          {/* Two warm cocoa mugs */}
          <rect x="182" y="176" width="22" height="19" rx="5" fill="#F4B8C8" stroke="#C98E7C" strokeWidth="1.6" />
          <rect x="216" y="176" width="22" height="19" rx="5" fill="#DCEBF7" stroke="#C98E7C" strokeWidth="1.6" />
          <motion.path
            d="M193 170C190 164 196 159 193 154"
            stroke="#C98E7C"
            strokeWidth="1.6"
            strokeLinecap="round"
            animate={{ y: [0, -4, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
          <motion.path
            d="M227 170C230 164 224 159 227 154"
            stroke="#C98E7C"
            strokeWidth="1.6"
            strokeLinecap="round"
            animate={{ y: [0, -4, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 0.6 }}
          />
        </svg>
      );
  }
}
