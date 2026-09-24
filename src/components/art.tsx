import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export function BlueFrogHeart(props: P) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...props}>
      <defs>
        <radialGradient id="bfb-body" cx="38%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#5FB6FF" />
          <stop offset="55%" stopColor="#1E86F0" />
          <stop offset="100%" stopColor="#0B4FB0" />
        </radialGradient>
        <radialGradient id="bfb-heart" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF7A8A" />
          <stop offset="100%" stopColor="#D81B36" />
        </radialGradient>
        <radialGradient id="bfb-iris" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#8CF5D0" />
          <stop offset="100%" stopColor="#18A878" />
        </radialGradient>
        <radialGradient id="bfb-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2E90FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#2E90FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bfb-gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="94" fill="url(#bfb-halo)" />
      <ellipse cx="100" cy="180" rx="54" ry="9" fill="#000" opacity="0.35" />
      <circle cx="100" cy="112" r="62" fill="url(#bfb-body)" />
      <ellipse
        cx="78"
        cy="82"
        rx="26"
        ry="16"
        fill="url(#bfb-gloss)"
        transform="rotate(-18 78 82)"
      />
      <ellipse
        cx="66"
        cy="166"
        rx="17"
        ry="10"
        fill="#0B4FB0"
        transform="rotate(-12 66 166)"
      />
      <ellipse
        cx="134"
        cy="166"
        rx="17"
        ry="10"
        fill="#0B4FB0"
        transform="rotate(12 134 166)"
      />
      <circle cx="74" cy="84" r="30" fill="#F2FAFF" />
      <circle cx="126" cy="84" r="30" fill="#F2FAFF" />
      <circle cx="74" cy="86" r="21" fill="url(#bfb-iris)" />
      <circle cx="126" cy="86" r="21" fill="url(#bfb-iris)" />
      <circle cx="76" cy="88" r="12" fill="#0A0A12" />
      <circle cx="128" cy="88" r="12" fill="#0A0A12" />
      <circle cx="81" cy="82" r="5" fill="#fff" />
      <circle cx="133" cy="82" r="5" fill="#fff" />
      <circle cx="71" cy="94" r="3" fill="#fff" opacity="0.85" />
      <circle cx="123" cy="94" r="3" fill="#fff" opacity="0.85" />
      <path
        d="M88 112c4 5 8 7 12 7s8-2 12-7"
        stroke="#0A3D8C"
        strokeOpacity="0.5"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M100 158c-16-9.5-26-18-26-28.5 0-7.7 5.9-13.5 13.5-13.5 5 0 9.6 2.6 12.5 7 2.9-4.4 7.5-7 12.5-7 7.6 0 13.5 5.8 13.5 13.5C126 140 116 148.5 100 158z"
        fill="url(#bfb-heart)"
      />
      <path
        d="M85 123c4-5 10-7 15-6"
        stroke="#fff"
        strokeOpacity="0.55"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse
        cx="62"
        cy="140"
        rx="15"
        ry="10"
        fill="#1577DE"
        transform="rotate(-25 62 140)"
      />
      <ellipse
        cx="138"
        cy="140"
        rx="15"
        ry="10"
        fill="#1577DE"
        transform="rotate(25 138 140)"
      />
    </svg>
  );
}

export function RainbowFrog(props: P) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="frog-rainbow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="25%" stopColor="#FFB347" />
          <stop offset="45%" stopColor="#FFE66D" />
          <stop offset="65%" stopColor="#4ADE80" />
          <stop offset="85%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <radialGradient id="frog-rainbow-belly" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFF7C2" />
          <stop offset="100%" stopColor="#FFE98A" />
        </radialGradient>
        <radialGradient id="frog-rainbow-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="172" rx="52" ry="10" fill="#000" opacity="0.28" />
      <circle cx="100" cy="100" rx="88" fill="url(#frog-rainbow-glow)" />
      <ellipse cx="66" cy="158" rx="20" ry="11" fill="#38BDF8" transform="rotate(-24 66 158)" />
      <ellipse cx="138" cy="154" rx="20" ry="11" fill="#A78BFA" transform="rotate(30 138 154)" />
      <ellipse cx="100" cy="112" rx="56" ry="52" fill="url(#frog-rainbow)" />
      <ellipse cx="100" cy="124" rx="34" ry="29" fill="url(#frog-rainbow-belly)" />
      <path d="M48 88c-12-6-20-20-16-32 12-4 26 4 32 16" fill="url(#frog-rainbow)" stroke="#FF6B6B" strokeWidth="2" />
      <path d="M154 100c12 2 22 12 22 24-12 6-26 2-34-8" fill="url(#frog-rainbow)" stroke="#A78BFA" strokeWidth="2" />
      <circle cx="74" cy="64" r="25" fill="url(#frog-rainbow)" />
      <circle cx="126" cy="64" r="25" fill="url(#frog-rainbow)" />
      <circle cx="74" cy="64" r="16" fill="#fff" />
      <circle cx="126" cy="64" r="16" fill="#fff" />
      <circle cx="77" cy="66" r="8.5" fill="#141416" />
      <circle cx="129" cy="66" r="8.5" fill="#141416" />
      <circle cx="80.5" cy="62.5" r="3" fill="#fff" />
      <circle cx="132.5" cy="62.5" r="3" fill="#fff" />
      <path d="M85 92c4.5 8 10 12 15 12s10.5-4 15-12" fill="none" stroke="#5B3DF5" strokeWidth="3.4" strokeLinecap="round" />
      <g fill="#141416" opacity="0.85">
        <path d="M40 48c0-2.8 2.2-5 5-5s5 2.2 5 5v9l3.5-3a4.6 4.6 0 0 1 6 7l-8.6 8.4A8.4 8.4 0 0 1 41 76h-1A5 5 0 0 1 35 71V53c0-2.8 2.2-5 5-5z" transform="translate(-6 -10) scale(0.85)" />
        <path d="M40 48c0-2.8 2.2-5 5-5s5 2.2 5 5v9l3.5-3a4.6 4.6 0 0 1 6 7l-8.6 8.4A8.4 8.4 0 0 1 41 76h-1A5 5 0 0 1 35 71V53c0-2.8 2.2-5 5-5z" transform="translate(112 -22) scale(0.95)" />
      </g>
      <g fill="#FFE66D">
        <path d="M160 48l2.4 6.2 6.2 2.4-6.2 2.4L160 65l-2.4-6.2-6.2-2.4 6.2-2.4L160 48z" />
        <path d="M40 34l1.8 4.6 4.6 1.8-4.6 1.8L40 47l-1.8-4.6-4.6-1.8 4.6-1.8L40 34z" />
      </g>
    </svg>
  );
}

export function PepeChair(props: P) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="pepe-chair-red" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF5A5A" />
          <stop offset="100%" stopColor="#B41F2C" />
        </linearGradient>
        <linearGradient id="pepe-chair-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C93340" />
          <stop offset="100%" stopColor="#7E1420" />
        </linearGradient>
        <linearGradient id="pepe-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B6E37A" />
          <stop offset="100%" stopColor="#7FBF4E" />
        </linearGradient>
        <radialGradient id="pepe-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF5A5A" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FF5A5A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="176" rx="70" ry="11" fill="#000" opacity="0.3" />
      <circle cx="100" cy="104" r="84" fill="url(#pepe-glow)" />
      <path d="M44 88c0-18 14-32 32-32h48c18 0 32 14 32 32v52c0 8-6 14-14 14H58c-8 0-14-6-14-14V88z" fill="url(#pepe-chair-red)" />
      <path d="M56 96c0-11 9-20 20-20h48c11 0 20 9 20 20v44c0 5-4 9-9 9H65c-5 0-9-4-9-9V96z" fill="url(#pepe-chair-dark)" />
      <rect x="34" y="104" width="22" height="48" rx="11" fill="url(#pepe-chair-red)" />
      <rect x="144" y="104" width="22" height="48" rx="11" fill="url(#pepe-chair-red)" />
      <rect x="48" y="148" width="104" height="22" rx="10" fill="url(#pepe-chair-red)" />
      <rect x="56" y="166" width="14" height="14" rx="4" fill="#5E0F18" />
      <rect x="130" y="166" width="14" height="14" rx="4" fill="#5E0F18" />
      <ellipse cx="100" cy="96" rx="40" ry="36" fill="url(#pepe-skin)" />
      <path d="M68 84c6-18 20-28 32-28s26 10 32 28" fill="url(#pepe-skin)" />
      <ellipse cx="84" cy="94" rx="13" ry="11" fill="#fff" />
      <ellipse cx="116" cy="94" rx="13" ry="11" fill="#fff" />
      <path d="M71 90c4-8 10-12 13-12s9 4 13 12" fill="none" stroke="#5E9B36" strokeWidth="4" strokeLinecap="round" />
      <path d="M103 90c4-8 9-12 13-12s9 4 13 12" fill="none" stroke="#5E9B36" strokeWidth="4" strokeLinecap="round" />
      <circle cx="86" cy="97" r="5" fill="#141416" />
      <circle cx="118" cy="97" r="5" fill="#141416" />
      <circle cx="87.8" cy="95.4" r="1.6" fill="#fff" />
      <circle cx="119.8" cy="95.4" r="1.6" fill="#fff" />
      <path d="M82 114c5 6 11 9 18 9s13-3 18-9" fill="none" stroke="#3F7324" strokeWidth="3.6" strokeLinecap="round" />
      <ellipse cx="72" cy="108" rx="7" ry="5" fill="#E8927C" opacity="0.45" />
      <ellipse cx="128" cy="108" rx="7" ry="5" fill="#E8927C" opacity="0.45" />
      <ellipse cx="74" cy="146" rx="16" ry="10" fill="#7FBF4E" transform="rotate(-14 74 146)" />
      <ellipse cx="126" cy="146" rx="16" ry="10" fill="#7FBF4E" transform="rotate(14 126 146)" />
      <ellipse cx="84" cy="164" rx="16" ry="9" fill="#5E9B36" />
      <ellipse cx="116" cy="164" rx="16" ry="9" fill="#5E9B36" />
    </svg>
  );
}

export function StakingBox(props: P) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="stake-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6EF09A" />
          <stop offset="100%" stopColor="#2FBE6B" />
        </linearGradient>
        <linearGradient id="stake-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2FBE6B" />
          <stop offset="100%" stopColor="#158A4A" />
        </linearGradient>
        <linearGradient id="stake-side" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1FA75A" />
          <stop offset="100%" stopColor="#0E6B39" />
        </linearGradient>
        <linearGradient id="stake-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE9A0" />
          <stop offset="45%" stopColor="#FFD24A" />
          <stop offset="100%" stopColor="#E09B1A" />
        </linearGradient>
        <radialGradient id="stake-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#30D158" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#30D158" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="176" rx="62" ry="11" fill="#000" opacity="0.32" />
      <circle cx="100" cy="100" r="86" fill="url(#stake-glow)" />
      <path d="M100 40 156 72 100 104 44 72 100 40z" fill="url(#stake-top)" />
      <path d="M44 72 100 104v56L44 128V72z" fill="url(#stake-front)" />
      <path d="M156 72 100 104v56l56-32V72z" fill="url(#stake-side)" />
      <path d="M44 72 100 104l56-32" fill="none" stroke="#8CFFB8" strokeOpacity="0.4" strokeWidth="2" />
      <g transform="translate(72 116) skewY(29.74)">
        <text
          x="0"
          y="0"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="Arial Black, Arial, sans-serif"
          fontWeight="900"
          fontSize="32"
          fill="url(#stake-gold)"
          stroke="#6B4300"
          strokeWidth="1.2"
          paintOrder="stroke"
        >
          S
        </text>
      </g>
      <g fill="url(#stake-gold)">
        <path d="M40 48l2.6 6.6 6.6 2.6-6.6 2.6L40 66.4l-2.6-6.6-6.6-2.6 6.6-2.6L40 48z" />
        <path d="M164 44l2.2 5.6 5.6 2.2-5.6 2.2-2.2 5.6-2.2-5.6-5.6-2.2 5.6-2.2 2.2-5.6z" />
        <path d="M166 120l1.8 4.6 4.6 1.8-4.6 1.8-1.8 4.6-1.8-4.6-4.6-1.8 4.6-1.8 1.8-4.6z" />
      </g>
    </svg>
  );
}

export type GiftKind =
  | "chips"
  | "gem"
  | "rose"
  | "bear"
  | "cake"
  | "rocket"
  | "ring"
  | "perfume"
  | "bell"
  | "soda"
  | "pizza"
  | "cat"
  | "glass"
  | "bow"
  | "diamond"
  | "crown"
  | "heart"
  | "potion"
  | "star"
  | "box";

export type PatternKind = "dollar" | "music" | "heart" | "star" | "bubble" | "snow" | "dot" | "flame";

export function CardPattern({
  kind,
  id,
  color,
}: {
  kind: PatternKind;
  id: string;
  color: string;
}) {
  const glyphs: Record<PatternKind, string[]> = {
    dollar: ["$", "💰", "$", "$"],
    music: ["♪", "♫", "♬", "♪"],
    heart: ["♥", "♡", "♥", "♥"],
    star: ["✦", "★", "✦", "✧"],
    bubble: ["●", "○", "●", "○"],
    snow: ["❄", "❅", "❄", "❆"],
    dot: ["•", "◦", "•", "•"],
    flame: ["◆", "▲", "◆", "▲"],
  };
  const g = glyphs[kind];
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <pattern id={`pat-${id}`} width="56" height="56" patternUnits="userSpaceOnUse">
          <text x="6" y="20" fontSize="16" fill={color} opacity="0.55">
            {g[0]}
          </text>
          <text x="34" y="48" fontSize="14" fill={color} opacity="0.45">
            {g[1]}
          </text>
          <text x="36" y="14" fontSize="11" fill={color} opacity="0.35">
            {g[2]}
          </text>
          <text x="10" y="46" fontSize="12" fill={color} opacity="0.4">
            {g[3]}
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#pat-${id})`} />
    </svg>
  );
}

export function GiftArt({ kind, ...props }: { kind: GiftKind } & P) {
  switch (kind) {
    case "chips":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="chips-bag" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF7BB0" />
              <stop offset="45%" stopColor="#F0338B" />
              <stop offset="100%" stopColor="#C41B6A" />
            </linearGradient>
            <linearGradient id="chips-shine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
              <stop offset="40%" stopColor="#fff" stopOpacity="0" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="118" rx="36" ry="7" fill="#000" opacity="0.3" />
          <path
            d="M30 28c6-6 14-6 20 0 6-6 14-6 20 0 6-6 14-6 20 0l4 8-6 72c-.4 5-4.6 9-9.6 9H41.6c-5 0-9.2-4-9.6-9L26 36l4-8z"
            fill="url(#chips-bag)"
          />
          <path d="M34 34h52l-1.5 14H35.5L34 34z" fill="#FFB1D0" opacity="0.5" />
          <rect x="32" y="52" width="56" height="34" rx="6" fill="#F4F0E6" />
          <rect x="32" y="52" width="56" height="34" rx="6" fill="url(#chips-shine)" />
          <text
            x="60"
            y="64"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontWeight="700"
            fontSize="7"
            fill="#111113"
            letterSpacing="0.5"
          >
            SNAZZLE UP
          </text>
          <rect x="36" y="68" width="48" height="14" rx="3" fill="#111113" />
          <text
            x="60"
            y="78.5"
            textAnchor="middle"
            fontFamily="Arial Black, Arial, sans-serif"
            fontWeight="900"
            fontSize="9"
            fill="#FFD84D"
          >
            SPICY ONION
          </text>
          <circle cx="60" cy="100" r="10" fill="#2E9BFF" />
          <circle cx="60" cy="100" r="6" fill="#7ED4FF" />
          <path d="M38 44v60" stroke="#fff" strokeOpacity="0.25" strokeWidth="5" strokeLinecap="round" />
          <path d="M26 36h68" stroke="#C41B6A" strokeWidth="3" />
        </svg>
      );
    case "gem":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="gem-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#B8F0FF" />
              <stop offset="100%" stopColor="#1E88FF" />
            </linearGradient>
            <linearGradient id="gem-b" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7EDCF5" />
              <stop offset="100%" stopColor="#0A55D0" />
            </linearGradient>
            <linearGradient id="gem-c" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#E6FBFF" />
              <stop offset="100%" stopColor="#4AA8FF" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="118" rx="30" ry="6" fill="#000" opacity="0.3" />
          <path d="M60 10 88 48 60 120 32 48 60 10z" fill="url(#gem-a)" />
          <path d="M60 10 88 48H32L60 10z" fill="url(#gem-c)" />
          <path d="M60 10v110" stroke="#fff" strokeOpacity="0.35" strokeWidth="2" />
          <path d="M32 48h56" stroke="#fff" strokeOpacity="0.4" strokeWidth="2" />
          <path d="M60 10 44 48l16 72 16-72L60 10z" fill="url(#gem-b)" opacity="0.85" />
          <path d="M48 36l8-14" stroke="#fff" strokeOpacity="0.85" strokeWidth="4" strokeLinecap="round" />
          <path d="M72 70l4-8" stroke="#fff" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "rose":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <radialGradient id="rose-c" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FF8FA3" />
              <stop offset="100%" stopColor="#D01F35" />
            </radialGradient>
            <linearGradient id="rose-stem" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ADE80" />
              <stop offset="100%" stopColor="#15803D" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="118" rx="26" ry="6" fill="#000" opacity="0.3" />
          <path d="M60 64v48" stroke="url(#rose-stem)" strokeWidth="6" strokeLinecap="round" />
          <path d="M60 90c-14-4-22-14-24-24 14 2 22 10 24 24z" fill="#22C55E" />
          <path d="M60 102c14-4 22-14 24-24-14 2-22 10-24 24z" fill="#16A34A" />
          <circle cx="60" cy="52" r="30" fill="url(#rose-c)" />
          <path d="M60 30c12 4 20 14 20 26 0 14-10 24-24 24-8 0-14-4-18-10 10 4 22-2 26-14 3-10-2-20-4-26z" fill="#FF6B81" opacity="0.7" />
          <path d="M46 44c6-8 16-10 24-6" fill="none" stroke="#FFC2CF" strokeOpacity="0.7" strokeWidth="4" strokeLinecap="round" />
          <circle cx="60" cy="54" r="10" fill="#B01020" />
          <path d="M54 50c4-4 10-4 14 0" fill="none" stroke="#FF8FA3" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "bear":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="bear-fur" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D8A35C" />
              <stop offset="100%" stopColor="#9A6428" />
            </linearGradient>
            <radialGradient id="bear-belly" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#F5DEB8" />
              <stop offset="100%" stopColor="#E2C290" />
            </radialGradient>
          </defs>
          <ellipse cx="60" cy="118" rx="34" ry="6" fill="#000" opacity="0.3" />
          <circle cx="34" cy="36" r="14" fill="url(#bear-fur)" />
          <circle cx="86" cy="36" r="14" fill="url(#bear-fur)" />
          <circle cx="34" cy="36" r="7" fill="#E2C290" />
          <circle cx="86" cy="36" r="7" fill="#E2C290" />
          <ellipse cx="60" cy="58" rx="34" ry="30" fill="url(#bear-fur)" />
          <ellipse cx="60" cy="64" rx="16" ry="13" fill="url(#bear-belly)" />
          <circle cx="48" cy="54" r="5" fill="#141416" />
          <circle cx="72" cy="54" r="5" fill="#141416" />
          <circle cx="49.5" cy="52.5" r="1.8" fill="#fff" />
          <circle cx="73.5" cy="52.5" r="1.8" fill="#fff" />
          <ellipse cx="60" cy="62" rx="7" ry="5" fill="#141416" />
          <path d="M60 66c0 4-4 7-8 7M60 66c0 4 4 7 8 7" fill="none" stroke="#5C3A14" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="60" cy="96" rx="28" ry="24" fill="url(#bear-fur)" />
          <ellipse cx="60" cy="98" rx="16" ry="14" fill="url(#bear-belly)" />
          <ellipse cx="30" cy="90" rx="12" ry="16" fill="url(#bear-fur)" transform="rotate(20 30 90)" />
          <ellipse cx="90" cy="90" rx="12" ry="16" fill="url(#bear-fur)" transform="rotate(-20 90 90)" />
          <ellipse cx="42" cy="116" rx="14" ry="9" fill="#9A6428" />
          <ellipse cx="78" cy="116" rx="14" ry="9" fill="#9A6428" />
          <path d="M46 88c8 6 20 6 28 0" fill="none" stroke="#C41B6A" strokeWidth="5" strokeLinecap="round" />
          <circle cx="60" cy="90" r="5" fill="#FF3B5C" />
        </svg>
      );
    case "cake":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="cake-base" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFD6E0" />
              <stop offset="100%" stopColor="#F7A8C0" />
            </linearGradient>
            <linearGradient id="cake-mid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF3C4" />
              <stop offset="100%" stopColor="#F7D06A" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="118" rx="36" ry="6" fill="#000" opacity="0.3" />
          <rect x="26" y="78" width="68" height="34" rx="8" fill="url(#cake-base)" />
          <rect x="34" y="54" width="52" height="28" rx="7" fill="url(#cake-mid)" />
          <path d="M26 84c6 6 12 6 18 0s12-6 18 0 12 6 18 0 12-6 14-4v10H26v-6z" fill="#FF8FB0" />
          <rect x="57" y="30" width="6" height="26" rx="3" fill="#F8FAFC" />
          <ellipse cx="60" cy="26" rx="7" ry="10" fill="#FFB020" />
          <ellipse cx="60" cy="24" rx="3.5" ry="6" fill="#FFE56A" />
          <circle cx="44" cy="66" r="4" fill="#FF5C8A" />
          <circle cx="76" cy="66" r="4" fill="#2E9BFF" />
          <circle cx="60" cy="66" r="4" fill="#30D158" />
          <path d="M36 92h48" stroke="#fff" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "rocket":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="rocket-body" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
            <linearGradient id="rocket-flame" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFE56A" />
              <stop offset="100%" stopColor="#FF5C1A" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="120" rx="24" ry="5" fill="#000" opacity="0.3" />
          <path d="M60 14c14 14 20 32 20 52v22H40V66c0-20 6-38 20-52z" fill="url(#rocket-body)" />
          <path d="M60 14c14 14 20 32 20 52v22H60V14z" fill="#E2E8F0" />
          <path d="M40 70 26 96v10l14-12V70zM80 70l14 26v10l-14-12V70z" fill="#E8283C" />
          <circle cx="60" cy="56" r="11" fill="#2E9BFF" stroke="#0A4FB8" strokeWidth="3" />
          <circle cx="57" cy="53" r="3.5" fill="#B8F0FF" />
          <path d="M50 96h20l-4 16c-2 6-10 6-12 0l-4-16z" fill="url(#rocket-flame)" />
          <path d="M54 98h12l-2 12c-1 4-7 4-8 0l-2-12z" fill="#FFE56A" />
        </svg>
      );
    case "ring":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="ring-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFE9A0" />
              <stop offset="50%" stopColor="#F5B942" />
              <stop offset="100%" stopColor="#C9861A" />
            </linearGradient>
            <linearGradient id="ring-dia" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E6FBFF" />
              <stop offset="100%" stopColor="#7ED4FF" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="118" rx="30" ry="6" fill="#000" opacity="0.3" />
          <ellipse cx="60" cy="82" rx="34" ry="36" fill="none" stroke="url(#ring-gold)" strokeWidth="14" />
          <ellipse cx="60" cy="82" rx="34" ry="36" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="4" strokeDasharray="18 40" />
          <path d="M60 24 76 46 60 62 44 46 60 24z" fill="url(#ring-dia)" />
          <path d="M60 24 76 46H44L60 24z" fill="#fff" opacity="0.7" />
          <path d="M44 46h32L60 62 44 46z" fill="#4AA8FF" />
          <path d="M52 36l6-8" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M48 46 60 62l12-16" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="2" />
        </svg>
      );
    case "perfume":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="perf-glass" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="perf-cap" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFE9A0" />
              <stop offset="100%" stopColor="#C9861A" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="118" rx="28" ry="6" fill="#000" opacity="0.3" />
          <rect x="50" y="18" width="20" height="16" rx="4" fill="url(#perf-cap)" />
          <rect x="54" y="32" width="12" height="12" fill="#C4B5FD" />
          <path d="M38 52c0-6 6-10 12-10h20c6 0 12 4 12 10v48c0 8-6 14-14 14H52c-8 0-14-6-14-14V52z" fill="url(#perf-glass)" stroke="#fff" strokeOpacity="0.5" strokeWidth="2" />
          <path d="M40 78h40v24c0 6-5 11-11 11H51c-6 0-11-5-11-11V78z" fill="#A855F7" />
          <path d="M46 56v16" stroke="#fff" strokeOpacity="0.55" strokeWidth="5" strokeLinecap="round" />
          <circle cx="74" cy="64" r="4" fill="#fff" opacity="0.5" />
          <path d="M90 40l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" fill="#E9D5FF" />
        </svg>
      );
    case "bell":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="bell-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFE9A0" />
              <stop offset="55%" stopColor="#FFC94A" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="118" rx="30" ry="6" fill="#000" opacity="0.3" />
          <circle cx="60" cy="28" r="8" fill="none" stroke="url(#bell-g)" strokeWidth="6" />
          <path d="M34 88c0-28 10-48 26-56 16 8 26 28 26 56H34z" fill="url(#bell-g)" />
          <path d="M30 88h60c2 0 4 2 4 4s-2 6-6 6H32c-4 0-6-4-6-6s2-4 4-4z" fill="#F59E0B" />
          <circle cx="60" cy="104" r="10" fill="#FFC94A" stroke="#D97706" strokeWidth="3" />
          <path d="M46 50c4 12 6 24 6 36" fill="none" stroke="#fff" strokeOpacity="0.45" strokeWidth="5" strokeLinecap="round" />
          <path d="M96 48l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" fill="#fff" opacity="0.8" />
        </svg>
      );
    case "soda":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="soda-can" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF8FB0" />
              <stop offset="45%" stopColor="#F0338B" />
              <stop offset="100%" stopColor="#C41B6A" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="118" rx="26" ry="6" fill="#000" opacity="0.3" />
          <rect x="38" y="24" width="44" height="84" rx="12" fill="url(#soda-can)" />
          <rect x="38" y="24" width="44" height="12" rx="6" fill="#CBD5E1" />
          <ellipse cx="60" cy="28" rx="16" ry="5" fill="#94A3B8" />
          <ellipse cx="60" cy="28" rx="8" ry="2.5" fill="#64748B" />
          <path d="M42 50c10 6 26 6 36 0" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round" />
          <path d="M50 66h20l-3 28H53l-3-28z" fill="#fff" opacity="0.85" />
          <circle cx="60" cy="80" r="7" fill="#F0338B" />
          <path d="M44 40v60" stroke="#fff" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round" />
          <circle cx="78" cy="44" r="3" fill="#fff" opacity="0.6" />
        </svg>
      );
    case "pizza":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="pizza-crust" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5D08A" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <radialGradient id="pizza-cheese" cx="50%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#FFE56A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </radialGradient>
          </defs>
          <ellipse cx="60" cy="118" rx="32" ry="6" fill="#000" opacity="0.3" />
          <path d="M60 18c22 0 40 10 40 10L78 108c-4 6-16 6-20 0L20 28s18-10 40-10z" fill="url(#pizza-crust)" />
          <path d="M60 30c16 0 30 7 30 7L74 100c-3 4-11 4-14 0L30 37s14-7 30-7z" fill="url(#pizza-cheese)" />
          <circle cx="52" cy="50" r="7" fill="#E8283C" />
          <circle cx="72" cy="58" r="6" fill="#E8283C" />
          <circle cx="58" cy="78" r="6.5" fill="#E8283C" />
          <circle cx="48" cy="44" r="3" fill="#FF8FA3" opacity="0.6" />
          <path d="M44 64c4 2 8 2 12 0M66 74c3 2 7 2 10 0" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M40 42h8M70 46h6" stroke="#fff" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "cat":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="cat-fur" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C4B5FD" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <radialGradient id="ufo-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7DF0C8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#7DF0C8" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="60" cy="118" rx="34" ry="6" fill="#000" opacity="0.3" />
          <ellipse cx="60" cy="96" rx="40" ry="14" fill="#64748B" />
          <ellipse cx="60" cy="92" rx="40" ry="12" fill="#94A3B8" />
          <ellipse cx="60" cy="78" rx="24" ry="22" fill="url(#ufo-glow)" />
          <path d="M40 56 34 34l16 8M80 56l6-22-16 8" fill="url(#cat-fur)" />
          <ellipse cx="60" cy="62" rx="30" ry="26" fill="url(#cat-fur)" />
          <ellipse cx="60" cy="70" rx="16" ry="12" fill="#EDE9FE" />
          <circle cx="48" cy="60" r="7" fill="#fff" />
          <circle cx="72" cy="60" r="7" fill="#fff" />
          <circle cx="49" cy="61" r="4" fill="#141416" />
          <circle cx="73" cy="61" r="4" fill="#141416" />
          <circle cx="50.5" cy="59.5" r="1.5" fill="#fff" />
          <circle cx="74.5" cy="59.5" r="1.5" fill="#fff" />
          <path d="M56 72h8l-4 5-4-5z" fill="#F472B6" />
          <path d="M60 77c-2 3-6 4-9 3M60 77c2 3 6 4 9 3" fill="none" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="60" cy="96" rx="34" ry="10" fill="#CBD5E1" />
          <circle cx="38" cy="96" r="4" fill="#FF5C8A" />
          <circle cx="60" cy="98" r="4" fill="#FFE56A" />
          <circle cx="82" cy="96" r="4" fill="#2E9BFF" />
        </svg>
      );
    case "glass":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="gift-pink" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF9EC4" />
              <stop offset="100%" stopColor="#F0488B" />
            </linearGradient>
            <linearGradient id="gift-glass" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.45" />
              <stop offset="45%" stopColor="#fff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="116" rx="30" ry="6" fill="#000" opacity="0.3" />
          <path d="M36 24h48l-6 68c-.5 5.5-5 9.5-10.5 9.5h-15c-5.5 0-10-4-10.5-9.5L36 24z" fill="url(#gift-glass)" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" />
          <path d="M40 50h40l-4.6 42c-.4 4-3.7 7-7.7 7H52.3c-4 0-7.3-3-7.7-7L40 50z" fill="url(#gift-pink)" />
          <ellipse cx="60" cy="50" rx="20" ry="4.5" fill="#FFC2DC" />
          <path d="M78 18 70 54" stroke="#FF5E8A" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
      );
    case "bow":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="gift-bow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7DFF9E" />
              <stop offset="100%" stopColor="#12A54A" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="116" rx="34" ry="7" fill="#000" opacity="0.3" />
          <path d="M58 62 34 104h22l8-24 8 24h22L74 62H58z" fill="#0B7A36" />
          <path d="M58 58C40 40 18 42 16 58c-2 16 20 24 40 10l2-10z" fill="url(#gift-bow)" />
          <path d="M62 58c18-18 40-16 42 0 2 16-20 24-40 10l-2-10z" fill="url(#gift-bow)" />
          <ellipse cx="60" cy="58" rx="12" ry="11" fill="#17B855" stroke="#0B7A36" strokeWidth="2" />
        </svg>
      );
    case "diamond":
      return <GiftArt kind="gem" {...props} />;
    case "crown":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="gift-crown" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFE9A0" />
              <stop offset="100%" stopColor="#E09B1A" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="114" rx="32" ry="6" fill="#000" opacity="0.3" />
          <path d="M24 78 18 38l22 14 20-26 20 26 22-14-6 40H24z" fill="url(#gift-crown)" />
          <rect x="26" y="78" width="68" height="16" rx="6" fill="#C98412" />
          <circle cx="60" cy="86" r="5" fill="#FF5E8A" />
          <circle cx="40" cy="86" r="4" fill="#2E9BFF" />
          <circle cx="80" cy="86" r="4" fill="#30D158" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <radialGradient id="gift-heart" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FF8FA3" />
              <stop offset="100%" stopColor="#D91E36" />
            </radialGradient>
          </defs>
          <ellipse cx="60" cy="114" rx="30" ry="6" fill="#000" opacity="0.3" />
          <path d="M60 104C36 90 22 76 22 58c0-12 9-21 21-21 8 0 14 4 17 10 3-6 9-10 17-10 12 0 21 9 21 21 0 18-14 32-38 46z" fill="url(#gift-heart)" />
          <path d="M38 48c4-6 10-8 16-7" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    case "potion":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="gift-potion" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="116" rx="28" ry="6" fill="#000" opacity="0.3" />
          <rect x="52" y="16" width="16" height="10" rx="3" fill="#B4846C" />
          <rect x="54" y="24" width="12" height="22" rx="3" fill="#E8F4FF" fillOpacity="0.35" stroke="#fff" strokeOpacity="0.5" strokeWidth="2" />
          <circle cx="60" cy="74" r="32" fill="#E8F4FF" fillOpacity="0.28" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" />
          <path d="M30 78a30 30 0 0 0 60 0c0-4-40-4-60 0z" fill="url(#gift-potion)" />
          <ellipse cx="60" cy="76" rx="28" ry="7" fill="#D8B4FE" />
          <circle cx="48" cy="70" r="5" fill="#E9D5FF" opacity="0.7" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="gift-star" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF1A8" />
              <stop offset="100%" stopColor="#F5A524" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="114" rx="30" ry="6" fill="#000" opacity="0.3" />
          <path d="M60 16 74 48l34 3-26 22 8 34-30-18-30 18 8-34-26-22 34-3L60 16z" fill="url(#gift-star)" stroke="#D9840E" strokeWidth="2" strokeLinejoin="round" />
          <path d="M48 40l8-14" stroke="#fff" strokeOpacity="0.7" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "box":
    default:
      return (
        <svg viewBox="0 0 120 130" aria-hidden="true" {...props}>
          <defs>
            <linearGradient id="gift-box" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#C92A3C" />
            </linearGradient>
            <linearGradient id="gift-ribbon" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFE9A0" />
              <stop offset="100%" stopColor="#E0A21A" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="116" rx="34" ry="6" fill="#000" opacity="0.3" />
          <rect x="30" y="56" width="60" height="52" rx="7" fill="url(#gift-box)" />
          <rect x="26" y="44" width="68" height="16" rx="6" fill="#FF8585" />
          <rect x="53" y="44" width="14" height="64" fill="url(#gift-ribbon)" />
          <path d="M60 44c-10-2-20-12-16-20 4-7 14-5 16 4 2-9 12-11 16-4 4 8-6 18-16 20z" fill="url(#gift-ribbon)" />
          <circle cx="60" cy="44" r="6" fill="#FFD24A" />
        </svg>
      );
  }
}
