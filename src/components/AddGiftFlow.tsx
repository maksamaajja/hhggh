"use client";

import { useState } from "react";
import { useToast } from "./Toast";
import { useLang } from "./i18n";
import { GiftIcon, SendIcon, XIcon } from "./icons";
import Sheet from "./Sheet";

export type AddedGift = { id: number; url: string; price: string };

export default function AddGiftFlow({
  onClose,
  onAdd,
}: {
  onClose: () => void;
  onAdd: (gift: AddedGift) => void;
}) {
  const { t } = useLang();
  const toast = useToast();
  const [step, setStep] = useState(0);
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [instrOpen, setInstrOpen] = useState(false);

  const total = 3;
  const titles = [t("wiz.s1t"), t("wiz.s2t"), t("wiz.s3t")];
  const descs = [t("wiz.s1d"), t("wiz.s2d"), t("wiz.s3d")];
  const instrs = [t("wiz.i1"), t("wiz.i2"), t("wiz.i3")];

  const handleNext = () => {
    if (step === 1 && !url.trim()) {
      toast(t("wiz.urlErr"), "🔗");
      return;
    }
    if (step === 2 && (!price.trim() || Number(price) <= 0)) {
      toast(t("wiz.priceErr"), "💰");
      return;
    }
    if (step === 2) {
      onAdd({ id: Date.now(), url: url.trim(), price: price.trim() });
      toast(t("wiz.doneToast"), "🎁");
      onClose();
      return;
    }
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    if (step === 0) onClose();
    else setStep((s) => s - 1);
  };

  const nextLabel = step === 2 ? t("wiz.save") : t("wiz.next");

  return (
    <div className="animate-screen fixed inset-0 z-[60] flex flex-col bg-app-bg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(10,132,255,0.14),transparent_55%)]" />

      <header className="relative z-10 flex items-center gap-3 px-4 pt-5">
        <button
          type="button"
          aria-label={t("wiz.back")}
          onClick={onClose}
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-app-surface transition active:scale-90"
        >
          <XIcon className="h-4.5 w-4.5" />
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate text-lg font-bold">{t("wiz.title")}</p>
          <p className="text-xs font-semibold text-app-gray tabular-nums">
            {t("wiz.step")
              .replace("{n}", String(step + 1))
              .replace("{m}", String(total))}
          </p>
        </div>
      </header>

      <div className="relative z-10 mx-4 mt-4 flex gap-1.5">
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
              i <= step ? "bg-app-blue shadow-[0_0_8px_rgba(10,132,255,0.6)]" : "bg-white/10"
            }`}
          />
        ))}
      </div>

      <main className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto px-6 pb-4 text-center">
        <div key={step} className="animate-screen flex w-full max-w-sm flex-col items-center">
          <div className="tile-3d mb-6 flex h-20 w-20 items-center justify-center rounded-[26px] bg-app-surface">
            {step === 0 ? (
              <SendIcon className="h-9 w-9 text-app-blue" />
            ) : step === 2 ? (
              <GiftIcon className="h-9 w-9 text-app-green" />
            ) : (
              <span className="text-3xl font-extrabold text-app-blue tabular-nums">
                {step + 1}
              </span>
            )}
          </div>

          <h2 className="text-xl font-bold leading-snug">{titles[step]}</h2>
          <p className="mt-2 text-sm leading-relaxed text-app-gray">{descs[step]}</p>

          {step === 0 && (
            <button
              type="button"
              onClick={() => window.open("https://t.me/PortallBot1", "_blank")}
              className="btn-3d mt-6 cursor-pointer rounded-2xl bg-app-blue px-6 py-3.5 text-sm font-bold text-white active:scale-none"
            >
              {t("wiz.openManager")}
            </button>
          )}

          {step === 1 && (
            <input
              type="url"
              inputMode="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={t("wiz.urlPh")}
              className="mt-6 h-13 w-full cursor-text rounded-2xl bg-app-surface px-4 py-3.5 text-sm text-white outline-none placeholder:text-app-gray focus:ring-2 focus:ring-app-blue/40"
            />
          )}

          {step === 2 && (
            <input
              type="number"
              inputMode="decimal"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder={t("wiz.pricePh")}
              className="mt-6 h-13 w-full cursor-text rounded-2xl bg-app-surface px-4 py-3.5 text-center text-lg font-bold text-white tabular-nums outline-none placeholder:text-sm placeholder:font-medium placeholder:text-app-gray focus:ring-2 focus:ring-app-blue/40"
            />
          )}

          <button
            type="button"
            onClick={() => setInstrOpen(true)}
            className="mt-6 cursor-pointer rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-app-blue transition active:scale-95 hover:bg-white/10"
          >
            {t("wiz.instrBtn")}
          </button>
        </div>
      </main>

      <footer className="relative z-10 grid shrink-0 grid-cols-2 gap-2 border-t border-white/10 bg-app-bg px-4 pb-[max(env(safe-area-inset-bottom),16px)] pt-3">
        <button
          type="button"
          onClick={handleBack}
          className="btn-3d cursor-pointer rounded-2xl bg-app-elevated py-3.5 text-sm font-bold text-white active:scale-none"
        >
          {t("wiz.back")}
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="btn-3d cursor-pointer rounded-2xl bg-app-blue py-3.5 text-sm font-bold text-white active:scale-none"
        >
          {nextLabel}
        </button>
      </footer>

      <Sheet
        open={instrOpen}
        onClose={() => setInstrOpen(false)}
        title={t("wiz.instrTitle").replace("{n}", String(step + 1))}
        overlayZ="z-[70]"
      >
        <p className="whitespace-pre-line pb-2 text-sm leading-relaxed text-app-gray">
          {instrs[step]}
        </p>
      </Sheet>
    </div>
  );
}
