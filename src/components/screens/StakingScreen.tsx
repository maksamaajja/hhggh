"use client";

import { useState } from "react";
import { StakingBox } from "../art";
import { InfoIcon, MinusIcon, PlusIcon } from "../icons";
import Sheet from "../Sheet";
import { useToast } from "../Toast";
import { useLang } from "../i18n";
import { GramIcon, StarIcon } from "../icons";

const STAKE_LIMIT = 50;

export default function StakingScreen() {
  const toast = useToast();
  const { t } = useLang();
  const [tab, setTab] = useState<"gifts" | "gram">("gram");
  const [stake, setStake] = useState(0);
  const [depositOpen, setDepositOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [amount, setAmount] = useState(10);

  const progress = Math.min(100, Math.round((stake / STAKE_LIMIT) * 100));
  const remaining = Math.max(0, STAKE_LIMIT - stake);

  const confirmDeposit = () => {
    const next = Math.min(STAKE_LIMIT, stake + amount);
    const delta = next - stake;
    if (delta <= 0) {
      toast(t("staking.limitHit"), "🔒");
      return;
    }
    setStake(next);
    setDepositOpen(false);
    toast(t("staking.deposited").replace("{n}", String(delta)), "🎁");
  };

  return (
    <div className="px-4 pb-6 pt-1">
      <div className="mb-5 flex rounded-2xl bg-app-surface p-1">
        <button
          type="button"
          onClick={() => setTab("gifts")}
          className={`flex-1 cursor-pointer touch-manipulation rounded-xl py-2.5 text-sm font-semibold transition ${
            tab === "gifts" ? "bg-app-elevated text-white shadow" : "text-app-gray"
          }`}
        >
          {t("staking.gifts")}
        </button>
        <button
          type="button"
          onClick={() => setTab("gram")}
          className={`flex-1 cursor-pointer touch-manipulation rounded-xl py-2.5 text-sm font-semibold transition ${
            tab === "gram" ? "bg-app-elevated text-white shadow" : "text-app-gray"
          }`}
        >
          {t("staking.gram")}
        </button>
      </div>

      {tab === "gifts" ? (
        <div className="flex flex-col items-center px-4 pb-10 pt-6 text-center">
          <div className="animate-float mb-4">
            <StakingBox className="h-36 w-36" />
          </div>
          <h3 className="text-lg font-bold">{t("staking.title")}</h3>
          <p className="mt-1.5 max-w-xs text-sm leading-snug text-app-gray">
            {t("staking.giftsHint")}
          </p>
          <button
            type="button"
            onClick={() => setTab("gram")}
            className="mt-5 cursor-pointer rounded-full bg-app-green px-6 py-3 text-sm font-bold text-black transition active:scale-95"
          >
            {t("staking.openGram")}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-[#17351F] to-[#102018] p-5 text-center">
            <div
              aria-hidden="true"
              className="tile-3d animate-float absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-app-bg ring-1 ring-app-blue/45"
            >
              <GramIcon className="h-6 w-6 drop-shadow-[0_3px_6px_rgba(10,132,255,0.6)]" />
            </div>
            <div
              aria-hidden="true"
              className="tile-3d animate-float absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-app-bg ring-1 ring-app-yellow/45"
              style={{ animationDelay: "0.6s" }}
            >
              <StarIcon className="h-5 w-5 text-app-yellow drop-shadow-[0_3px_6px_rgba(255,214,10,0.5)]" />
            </div>
            <div className="flex justify-center">
              <div className="animate-float">
                <StakingBox className="h-32 w-32" />
              </div>
            </div>
            <h2 className="mt-2 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-xl font-bold leading-snug">
              <span>{t("staking.title")}</span>
              <span className="text-app-green">19% APR</span>
              <button
                type="button"
                aria-label="Что такое APR"
                onClick={() => setInfoOpen(true)}
                className="cursor-pointer transition hover:opacity-80 active:scale-90"
              >
                <InfoIcon className="h-4 w-4 text-app-gray" />
              </button>
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-snug text-app-gray">
              {t("staking.aprInfo")}
            </p>
            <button
              type="button"
              onClick={() => setDepositOpen(true)}
              className="btn-3d mt-4 w-full cursor-pointer rounded-2xl bg-app-green py-3.5 text-sm font-bold text-black active:scale-none"
            >
              {t("staking.deposit")}
            </button>
          </section>

          <section className="flex items-start gap-3 rounded-3xl border border-app-yellow/20 bg-app-surface p-4">
            <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-app-yellow" />
            <div>
              <h3 className="text-sm font-semibold leading-snug">{t("staking.tipTitle")}</h3>
              <p className="mt-1 text-xs leading-relaxed text-app-gray">
                {remaining > 0
                  ? t("staking.tipRemaining").replace("{n}", String(remaining))
                  : t("staking.tipActive")}
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-app-surface p-4">
            <div className="mb-3 flex items-end justify-between gap-3">
              <div>
                <p className="text-xs text-app-gray">{t("staking.progress")}</p>
                <p className="mt-0.5 text-lg font-bold tabular-nums">
                  {stake} <span className="text-sm font-semibold text-app-gray">/ {STAKE_LIMIT} GRAM</span>
                </p>
              </div>
              <span className="rounded-full bg-app-blue/15 px-2.5 py-1 text-xs font-bold text-app-blue tabular-nums">
                {progress}%
              </span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="progress-fill h-full rounded-full bg-gradient-to-r from-app-green to-[#6EF09A]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-2xl bg-white/5">
              <div className="border-r border-white/10 p-3.5">
                <p className="text-xs text-app-gray">{t("staking.yourStake")}</p>
                <p className="mt-1 text-lg font-bold tabular-nums">{stake} GRAM</p>
              </div>
              <div className="p-3.5">
                <p className="text-xs text-app-gray">{t("staking.stakeLimit")}</p>
                <p className="mt-1 text-lg font-bold tabular-nums text-app-blue">50 GRAM</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setDepositOpen(true)}
              className="btn-3d mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-app-blue py-3 text-sm font-bold text-white active:scale-none"
            >
              <PlusIcon className="h-4 w-4" />
              {t("staking.fill")}
            </button>
          </section>
        </div>
      )}

      <Sheet
        open={depositOpen}
        onClose={() => setDepositOpen(false)}
        title={t("staking.depositSheet")}
        footer={
          <button
            type="button"
            onClick={confirmDeposit}
            className="btn-3d w-full cursor-pointer rounded-2xl bg-app-green py-3.5 text-sm font-bold text-black active:scale-none"
          >
            {t("staking.depositBtn").replace("{n}", String(amount))}
          </button>
        }
      >
        <div className="pb-2 text-center">
          <p className="text-sm text-app-gray">{t("staking.available")}</p>
          <p className="mt-1 text-3xl font-extrabold tabular-nums text-app-green">
            {remaining} GRAM
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Меньше"
              onClick={() => setAmount((a) => Math.max(1, a - 1))}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 transition active:scale-90"
            >
              <MinusIcon className="h-5 w-5" />
            </button>
            <div className="min-w-[7rem] rounded-3xl bg-white/5 px-5 py-3">
              <p className="text-3xl font-extrabold tabular-nums">{amount}</p>
              <p className="text-xs text-app-gray">GRAM</p>
            </div>
            <button
              type="button"
              aria-label="Больше"
              onClick={() => setAmount((a) => Math.min(Math.max(remaining, 1), a + 1))}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 transition active:scale-90"
            >
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {[1, 5, 10, 25].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setAmount(Math.min(Math.max(remaining, 1), v))}
                className={`cursor-pointer rounded-full px-3.5 py-2 text-xs font-bold transition active:scale-95 ${
                  amount === v ? "bg-app-green text-black" : "bg-white/10 text-white"
                }`}
              >
                +{v}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-white/5 p-3.5 text-left">
            <div className="flex items-center justify-between text-sm">
              <span className="text-app-gray">{t("staking.rewardYear")}</span>
              <span className="font-bold text-app-green tabular-nums">
                +{((amount * 19) / 100).toFixed(2)} GRAM
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-app-gray">APR</span>
              <span className="font-bold">19%</span>
            </div>
          </div>
        </div>
      </Sheet>

      <Sheet open={infoOpen} onClose={() => setInfoOpen(false)} title={t("staking.aprWhat")}>
        <div className="space-y-3 pb-3 text-sm leading-relaxed text-app-gray">
          <p>
            <span className="font-bold text-white">APR</span> — {t("staking.aprP1")}
          </p>
          <p>{t("staking.aprP2")}</p>
          <div className="rounded-2xl bg-app-green/10 p-4 text-app-green">
            <b>{t("staking.aprExample")}</b>
          </div>
          <p className="text-xs">{t("staking.aprDisclaimer")}</p>
        </div>
      </Sheet>
    </div>
  );
}
