"use client";

import { useState } from "react";
import { GamepadIcon, SparklesIcon, StarIcon } from "../icons";
import { useToast } from "../Toast";
import { useLang } from "../i18n";

export default function GamesScreen() {
  const toast = useToast();
  const { t } = useLang();
  const [taps, setTaps] = useState(0);
  const [pulse, setPulse] = useState(0);

  const onTap = () => {
    const next = taps + 1;
    setTaps(next);
    setPulse((p) => p + 1);
    if (next % 10 === 0) {
      toast(t("games.tapToast").replace("{n}", String(next)), "🎮");
    }
  };

  return (
    <div className="flex flex-col items-center px-6 pb-10 pt-12 text-center">
      <button
        type="button"
        onClick={onTap}
        aria-label="Играть"
        className="group relative mb-5 cursor-pointer touch-manipulation select-none"
      >
        <span className="absolute inset-0 animate-ping rounded-[40px] bg-app-green/25" />
        <span className="relative flex h-32 w-32 items-center justify-center rounded-[40px] bg-gradient-to-br from-[#1f1f22] to-black shadow-2xl shadow-black/60 ring-1 ring-white/12 transition group-active:scale-90">
          <GamepadIcon className="h-16 w-16 text-app-green transition group-hover:scale-110" />
        </span>
        <span
          key={pulse}
          className="animate-toast absolute -right-2 -top-2 rounded-full bg-app-yellow px-2.5 py-1 text-xs font-extrabold text-black"
        >
          +1
        </span>
      </button>

      <p className="text-3xl font-extrabold tabular-nums">{taps}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-app-gray">{t("games.taps")}</p>

      <h2 className="mt-6 text-lg font-bold">{t("games.title")}</h2>
      <p className="mt-1.5 max-w-xs text-sm leading-snug text-app-gray">{t("games.desc")}</p>

      <div className="mt-6 flex w-full max-w-xs flex-col gap-2">
        <button
          type="button"
          onClick={() => toast(t("games.dailyToast"), "📦")}
          className="flex cursor-pointer items-center justify-between rounded-2xl bg-app-surface px-4 py-3.5 text-sm font-semibold transition active:scale-95"
        >
          <span className="flex items-center gap-2.5">
            <SparklesIcon className="h-4.5 w-4.5 text-app-yellow" />
            {t("games.daily")}
          </span>
          <span className="text-xs text-app-gray">{t("games.soon")}</span>
        </button>
        <button
          type="button"
          onClick={() => toast(t("games.ratingToast").replace("{n}", String(1000 + taps)), "🏆")}
          className="flex cursor-pointer items-center justify-between rounded-2xl bg-app-surface px-4 py-3.5 text-sm font-semibold transition active:scale-95"
        >
          <span className="flex items-center gap-2.5">
            <StarIcon className="h-4.5 w-4.5 text-app-yellow" />
            {t("games.rating")}
          </span>
          <span className="text-xs text-app-gray">#1000+</span>
        </button>
      </div>
    </div>
  );
}
