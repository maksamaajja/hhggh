"use client";

import { useEffect, useState } from "react";
import { XIcon, GlobeIcon, ShieldIcon } from "./icons";
import { useToast } from "./Toast";
import {
  useLang,
  type Lang,
  type Currency,
  CRYPTO_CURRENCIES,
  FIAT_CURRENCIES,
  FIAT_FLAGS,
} from "./i18n";

const languages: { code: Lang; flag: string; label: string }[] = [
  { code: "EN", flag: "🇺🇸", label: "EN" },
  { code: "RU", flag: "🇷🇺", label: "RU" },
  { code: "KO", flag: "🇰🇷", label: "한국" },
  { code: "ZH", flag: "🇨🇳", label: "繁體" },
  { code: "UA", flag: "🇺🇦", label: "UA" },
  { code: "FA", flag: "🇮🇷", label: "FA" },
];

function CurrencyChip({
  code,
  active,
  onSelect,
}: {
  code: Currency;
  active: boolean;
  onSelect: (c: Currency) => void;
}) {
  const label = code === "STARS" ? "Stars" : code;
  const flag = FIAT_FLAGS[code];
  return (
    <button
      type="button"
      onClick={() => onSelect(code)}
      className={`flex cursor-pointer touch-manipulation items-center gap-2 rounded-full px-4 py-2.5 text-[15px] font-bold transition active:scale-95 ${
        active
          ? "animate-pop bg-white text-black shadow-lg shadow-black/40 ring-2 ring-app-blue/50"
          : "tile-3d bg-app-surface text-white"
      }`}
    >
      {flag && (
        <span aria-hidden="true" className="text-base leading-none">
          {flag}
        </span>
      )}
      <span>{label}</span>
    </button>
  );
}

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`h-[31px] w-[51px] shrink-0 cursor-pointer rounded-full p-[2px] transition-colors duration-300 ${
        checked ? "bg-app-blue" : "bg-white/20"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
    >
      <span
        className={`block h-[27px] w-[27px] rounded-full bg-white shadow-md transition-transform duration-300 ${
          checked ? "translate-x-[20px]" : "translate-x-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
      />
    </button>
  );
}

export default function MenuSheet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const toast = useToast();
  const { lang, setLang, t, currency, setCurrency } = useLang();
  const [notifications, setNotifications] = useState(true);
  const [onlyDeals, setOnlyDeals] = useState(false);
  const [vibration, setVibration] = useState(true);
  const [animations, setAnimations] = useState(true);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const withToast = (fn: (v: boolean) => void, on: string, off: string) => (v: boolean) => {
    fn(v);
    toast(v ? on : off, v ? "🔔" : "🔕");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Меню"
    >
      <button
        type="button"
        aria-label="Закрыть меню"
        className="absolute inset-0 animate-fade cursor-default bg-black/60"
        onClick={onClose}
      />
      <div className="animate-sheet relative max-h-[92dvh] w-full max-w-md overflow-y-auto rounded-t-[28px] bg-app-bg px-5 pb-8 pt-3 shadow-2xl shadow-black/60">
        <div className="mx-auto mb-5 h-1.5 w-10 rounded-full bg-white/25" />

        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-[32px] font-bold leading-none tracking-tight">{t("menu.title")}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 transition active:scale-90"
          >
            <XIcon className="h-4.5 w-4.5" />
          </button>
        </div>

        <section className="mb-7">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-app-gray">
            {t("menu.lang")}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {languages.map((item) => {
              const isActive = lang === item.code;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLang(item.code);
                    toast(
                      `${t("menu.langChanged")}: ${item.label}`,
                      item.flag,
                    );
                  }}
                  className={`flex cursor-pointer touch-manipulation items-center gap-2 rounded-full px-4 py-2.5 text-[15px] font-bold transition active:scale-95 ${
                    isActive
                      ? "animate-pop bg-white text-black shadow-lg shadow-black/40 ring-2 ring-app-blue/50"
                      : "bg-app-surface text-white hover:bg-app-elevated"
                  }`}
                >
                  <span aria-hidden="true" className="text-base leading-none">
                    {item.flag}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mb-7">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-app-gray">
            {t("menu.crypto")}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {CRYPTO_CURRENCIES.map((code) => (
              <CurrencyChip
                key={code}
                code={code}
                active={currency === code}
                onSelect={(c) => {
                  setCurrency(c);
                  toast(`${t("menu.currencyChanged")}: ${c}`, "💎");
                }}
              />
            ))}
          </div>
          <h3 className="mb-3 mt-5 text-xs font-bold uppercase tracking-widest text-app-gray">
            {t("menu.fiat")}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {FIAT_CURRENCIES.map((code) => (
              <CurrencyChip
                key={code}
                code={code}
                active={currency === code}
                onSelect={(c) => {
                  setCurrency(c);
                  toast(`${t("menu.currencyChanged")}: ${c}`, FIAT_FLAGS[c] ?? "💱");
                }}
              />
            ))}
          </div>
        </section>

        <section className="mb-7">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-app-gray">
            {t("menu.notif")}
          </h3>
          <div className="flex items-center justify-between gap-4 rounded-3xl bg-app-surface px-4 py-4">
            <span className="text-[15px] font-medium">{t("menu.notifRow")}</span>
            <Toggle
              checked={notifications}
              onChange={withToast(setNotifications, t("menu.notifOn"), t("menu.notifOff"))}
              label={t("menu.notifRow")}
            />
          </div>
          <label className="mt-3 flex cursor-not-allowed items-start gap-3 px-1 opacity-70">
            <input
              type="checkbox"
              disabled
              checked={onlyDeals}
              onChange={(e) => setOnlyDeals(e.target.checked)}
              className="mt-0.5 h-6 w-6 shrink-0 appearance-none rounded-lg border-2 border-white/30 bg-transparent"
            />
            <span className="text-sm leading-snug text-app-gray">{t("menu.deals")}</span>
          </label>
        </section>

        <section className="mb-7">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-app-gray">
            {t("menu.vib")}
          </h3>
          <div className="flex items-center justify-between gap-4 rounded-3xl bg-app-surface px-4 py-4">
            <span className="text-[15px] font-medium">{t("menu.vibRow")}</span>
            <Toggle
              checked={vibration}
              onChange={withToast(setVibration, t("menu.vibOn"), t("menu.vibOff"))}
              label={t("menu.vib")}
            />
          </div>
        </section>

        <section className="mb-7">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-app-gray">
            {t("menu.anim")}
          </h3>
          <div className="flex items-center justify-between gap-4 rounded-3xl bg-app-surface px-4 py-4">
            <span className="text-[15px] font-medium">{t("menu.animRow")}</span>
            <Toggle
              checked={animations}
              onChange={withToast(setAnimations, t("menu.animOn"), t("menu.animOff"))}
              label={t("menu.anim")}
            />
          </div>
        </section>

        <div className="border-t border-white/10 pt-5">
          <button
            type="button"
            onClick={() => {
              onClose();
              toast(t("menu.portalsToast"), "🌐");
              window.open("https://portals.app", "_blank");
            }}
            className="flex w-full items-center gap-3 rounded-2xl bg-app-surface px-4 py-3.5 text-left transition hover:bg-app-elevated active:scale-[0.98]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-app-elevated text-app-blue">
              <GlobeIcon className="h-5 w-5" />
            </span>
            <span className="text-base font-semibold">Portals Web</span>
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              toast(t("menu.giftAccountToast"), "🛡️");
            }}
            className="mt-3 flex w-full items-center gap-3 rounded-2xl bg-app-surface px-4 py-3.5 text-left transition hover:bg-app-elevated active:scale-[0.98]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-app-elevated text-app-teal">
              <ShieldIcon className="h-5 w-5" />
            </span>
            <span className="text-base font-semibold">Gift Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}
