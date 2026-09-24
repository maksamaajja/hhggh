"use client";

import { StarIcon, TonIcon } from "./icons";

export default function Header({
  onStarClick,
  onGramClick,
}: {
  onStarClick?: () => void;
  onGramClick?: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 flex h-14 shrink-0 items-center justify-between bg-app-bg/95 px-4 backdrop-blur-md">
      <button
        type="button"
        onClick={onStarClick}
        className="tile-3d hover-lift flex cursor-pointer touch-manipulation items-center gap-1.5 rounded-full bg-app-surface px-3 py-1.5"
      >
        <StarIcon className="h-4 w-4 text-app-yellow" />
        <span className="text-sm font-bold tabular-nums">0</span>
      </button>
      <button
        type="button"
        onClick={onGramClick}
        className="tile-3d hover-lift flex cursor-pointer touch-manipulation items-center gap-1.5 rounded-full bg-app-surface px-3 py-1.5"
      >
        <TonIcon className="h-4 w-4" />
        <span className="text-sm font-bold tabular-nums">0 GRAM</span>
      </button>
    </header>
  );
}
