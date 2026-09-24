"use client";

import { useState } from "react";
import {
  ChevronRightIcon,
  CopyIcon,
  HamburgerIcon,
  PauseIcon,
  ProfileIcon,
  SparklesIcon,
  StarIcon,
  UsersIcon,
  WalletIcon,
} from "../icons";
import Sheet from "../Sheet";
import { useToast } from "../Toast";
import { useLang } from "../i18n";

export default function ProfileScreen({ onOpenMenu }: { onOpenMenu: () => void }) {
  const toast = useToast();
  const { t } = useLang();
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [seasonOpen, setSeasonOpen] = useState(false);
  const [cashbackOpen, setCashbackOpen] = useState(false);

  const copyInvite = async () => {
    const link = "https://t.me/gram_gifts_bot?start=ref_demo";
    try {
      await navigator.clipboard.writeText(link);
      toast(t("profile.copied"), "🔗");
    } catch {
      toast(link, "🔗");
    }
  };

  return (
    <div className="space-y-4 px-4 pb-6 pt-2">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-app-blue to-[#5856D6] shadow-lg shadow-app-blue/30 ring-2 ring-app-blue/40">
            <ProfileIcon className="h-6 w-6 text-white" />
          </span>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-bold">{t("nav.profile")}</span>
            <span className="flex items-center gap-1 text-xs font-bold text-app-yellow tabular-nums">
              #1000+
              <StarIcon className="h-3 w-3" />
            </span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setInventoryOpen(true)}
            className="tile-3d flex cursor-pointer items-center gap-1.5 rounded-full bg-app-surface px-3.5 py-2.5 text-sm font-semibold transition hover:bg-app-elevated active:scale-95"
          >
            <WalletIcon className="h-4 w-4 text-app-blue" />
            {t("profile.inv0")}
            <ChevronRightIcon className="h-4 w-4 text-app-gray" />
          </button>
          <button
            type="button"
            aria-label={t("menu.title")}
            onClick={onOpenMenu}
            className="tile-3d flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-app-surface transition hover:bg-app-elevated active:scale-95"
          >
            <HamburgerIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <section className="grid grid-cols-3 overflow-hidden rounded-3xl bg-app-surface">
        <button
          type="button"
          onClick={() => toast(t("profile.statsCost"), "💎")}
          className="border-r border-white/10 px-2 py-4 text-center transition hover:bg-white/5 active:scale-[0.98]"
        >
          <p className="text-base font-bold tabular-nums">0 GRAM</p>
          <p className="mt-1 truncate text-[11px] text-app-gray" title={t("profile.statsValue")}>
            {t("profile.statsValue")}
          </p>
        </button>
        <button
          type="button"
          onClick={() => toast(t("profile.statsBought"), "📊")}
          className="border-r border-white/10 px-2 py-4 text-center transition hover:bg-white/5 active:scale-[0.98]"
        >
          <p className="text-base font-bold tabular-nums">0/0</p>
          <p className="mt-1 text-[11px] text-app-gray">{t("profile.boughtSold")}</p>
        </button>
        <button
          type="button"
          onClick={() => toast(t("profile.statsVol"), "📈")}
          className="px-2 py-4 text-center transition hover:bg-white/5 active:scale-[0.98]"
        >
          <p className="text-base font-bold tabular-nums">0 GRAM</p>
          <p className="mt-1 text-[11px] text-app-gray">{t("profile.totalVol")}</p>
        </button>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setCashbackOpen(true)}
          className="cursor-pointer rounded-3xl bg-app-surface p-4 text-left opacity-80 transition hover:opacity-100 active:scale-[0.98]"
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold">{t("profile.cashback")}</h3>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-app-elevated text-app-gray">
              <PauseIcon className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-2 text-xs text-app-gray">{t("profile.paused")}</p>
        </button>
        <button
          type="button"
          onClick={() => setSeasonOpen(true)}
          className="shine shine cursor-pointer rounded-3xl bg-gradient-to-br from-[#FFDF6E] via-[#F5B942] to-[#C9861A] p-4 text-left text-black shadow-lg shadow-black/30 transition hover:brightness-105 active:scale-[0.98]"
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-extrabold tracking-wide">{t("profile.season")}</h3>
            <SparklesIcon className="h-5 w-5 opacity-70" />
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/15">
              <StarIcon className="h-4 w-4 text-white" />
            </span>
            <span className="text-lg font-extrabold tabular-nums">0</span>
          </div>
        </button>
      </section>

      <section className="space-y-3 pt-1">
        <h2 className="text-center text-[13px] font-extrabold uppercase leading-snug tracking-wide">
          {t("profile.inviteH")}
        </h2>
        <div className="rounded-3xl bg-app-surface p-4">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-app-blue/15 text-app-blue">
              <UsersIcon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-semibold leading-snug">{t("profile.refPaused")}</h3>
              <p className="mt-1 text-xs leading-relaxed text-app-gray">{t("profile.refDesc")}</p>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={copyInvite}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-app-blue py-4 text-sm font-bold shadow-lg shadow-app-blue/25 transition hover:brightness-110 active:scale-[0.98]"
        >
          <CopyIcon className="h-4.5 w-4.5" />
          {t("profile.invite")}
        </button>
      </section>

      <Sheet open={inventoryOpen} onClose={() => setInventoryOpen(false)} title={t("profile.inv")}>
        <div className="flex flex-col items-center py-6 text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-[26px] bg-white/5">
            <WalletIcon className="h-10 w-10 text-app-blue" />
          </div>
          <p className="font-semibold">{t("profile.invEmpty")}</p>
          <p className="mt-1 max-w-xs text-sm text-app-gray">{t("profile.invEmptySub")}</p>
          <button
            type="button"
            onClick={() => {
              setInventoryOpen(false);
              toast(t("profile.inviteToast"), "🎁");
            }}
            className="mt-5 cursor-pointer rounded-full bg-app-blue px-6 py-3 text-sm font-bold transition active:scale-95"
          >
            {t("profile.howToAdd")}
          </button>
        </div>
      </Sheet>

      <Sheet open={seasonOpen} onClose={() => setSeasonOpen(false)} title={t("profile.seasonSheet")}>
        <div className="pb-2">
          <div className="shine mb-4 rounded-3xl bg-gradient-to-br from-[#FFDF6E] via-[#F5B942] to-[#C9861A] p-5 text-black">
            <p className="text-sm font-semibold opacity-80">{t("profile.yourProgress")}</p>
            <p className="mt-1 text-4xl font-extrabold tabular-nums">0 ★</p>
            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-black/20">
              <div className="progress-fill h-full w-[4%] rounded-full bg-black/50" />
            </div>
            <p className="mt-2 text-xs font-semibold opacity-70">{t("profile.toReward")}</p>
          </div>
          <ul className="space-y-2 text-sm">
            {[
              { t: t("profile.level").replace("{n}", "1"), r: "100 ★ · Badge", done: false },
              { t: t("profile.level").replace("{n}", "2"), r: "500 ★ · 5 GRAM", done: false },
              { t: t("profile.level").replace("{n}", "3"), r: "1500 ★ · 25 GRAM", done: false },
            ].map((lvl) => (
              <li
                key={lvl.t}
                className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3"
              >
                <span className="font-semibold">{lvl.t}</span>
                <span className="text-xs text-app-gray">{lvl.r}</span>
              </li>
            ))}
          </ul>
        </div>
      </Sheet>

      <Sheet open={cashbackOpen} onClose={() => setCashbackOpen(false)} title={t("profile.cashback")}>
        <div className="flex flex-col items-center py-4 text-center">
          <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/8 text-app-gray">
            <PauseIcon className="h-7 w-7" />
          </span>
          <p className="font-semibold">{t("profile.cashbackPaused")}</p>
          <p className="mt-1.5 max-w-xs text-sm leading-snug text-app-gray">
            {t("profile.cashbackSub")}
          </p>
        </div>
      </Sheet>
    </div>
  );
}
