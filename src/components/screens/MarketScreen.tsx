"use client";

import { useEffect, useMemo, useState } from "react";
import { CardPattern, GiftArt, type GiftKind, type PatternKind } from "../art";
import {
  ActivityIcon,
  CardIcon,
  ChevronDownIcon,
  CloverIcon,
  HeartIcon,
  LinesIcon,
  StarIcon,
} from "../icons";
import { FilterBar, IconButton, SearchBar } from "../controls";
import Sheet from "../Sheet";
import { useToast } from "../Toast";
import { useLang } from "../i18n";

type CatalogGift = {
  id: number;
  name: string;
  art: GiftKind;
  bg: string;
  pattern: PatternKind;
  patternColor: string;
  collection: string;
  price: number;
  currency: "gram" | "stars";
  owners: number;
};

const catalog: CatalogGift[] = [
  { id: 1, name: "Spicy Onion", art: "chips", bg: "bg-gradient-to-br from-[#8BC34A] to-[#4E7A22]", pattern: "dollar", patternColor: "#2F5A12", collection: "Оригинал", price: 4.2, currency: "gram", owners: 1284 },
  { id: 2, name: "Crystals", art: "gem", bg: "bg-gradient-to-br from-[#4DD0E1] to-[#007C8F]", pattern: "music", patternColor: "#034E5C", collection: "Ультра", price: 18.5, currency: "gram", owners: 432 },
  { id: 3, name: "Eternal Rose", art: "rose", bg: "bg-gradient-to-br from-[#FB7185] to-[#9F1239]", pattern: "heart", patternColor: "#7F1030", collection: "Классика", price: 150, currency: "stars", owners: 5621 },
  { id: 4, name: "Teddy Bear", art: "bear", bg: "bg-gradient-to-br from-[#FCD34D] to-[#B45309]", pattern: "star", patternColor: "#7C3A06", collection: "Ультра", price: 12.8, currency: "gram", owners: 890 },
  { id: 5, name: "Birthday Cake", art: "cake", bg: "bg-gradient-to-br from-[#C4B5FD] to-[#5B21B6]", pattern: "dot", patternColor: "#3B0F7A", collection: "Классика", price: 7.5, currency: "gram", owners: 2301 },
  { id: 6, name: "Rocket", art: "rocket", bg: "bg-gradient-to-br from-[#60A5FA] to-[#1E3A8A]", pattern: "star", patternColor: "#0F2454", collection: "Мастера", price: 25.0, currency: "gram", owners: 312 },
  { id: 7, name: "Gold Ring", art: "ring", bg: "bg-gradient-to-br from-[#FDE68A] to-[#D97706]", pattern: "dot", patternColor: "#854D0E", collection: "Ультра", price: 30.0, currency: "gram", owners: 178 },
  { id: 8, name: "Perfume", art: "perfume", bg: "bg-gradient-to-br from-[#E9D5FF] to-[#6D28D9]", pattern: "bubble", patternColor: "#4C1D95", collection: "Мастера", price: 220, currency: "stars", owners: 654 },
  { id: 9, name: "Jingle Bell", art: "bell", bg: "bg-gradient-to-br from-[#F87171] to-[#7F1D1D]", pattern: "snow", patternColor: "#5C1010", collection: "Сезонное", price: 9.9, currency: "gram", owners: 1502 },
  { id: 10, name: "Wacky Soda", art: "soda", bg: "bg-gradient-to-br from-[#F9A8D4] to-[#BE185D]", pattern: "bubble", patternColor: "#831843", collection: "Оригинал", price: 3.5, currency: "gram", owners: 3102 },
  { id: 11, name: "Spicy Pizza", art: "pizza", bg: "bg-gradient-to-br from-[#FDBA74] to-[#C2410C]", pattern: "flame", patternColor: "#7C2D12", collection: "Оригинал", price: 6.0, currency: "gram", owners: 1990 },
  { id: 12, name: "Cat UFO", art: "cat", bg: "bg-gradient-to-br from-[#A5B4FC] to-[#3730A3]", pattern: "star", patternColor: "#1E1B4B", collection: "Мастера", price: 350, currency: "stars", owners: 89 },
];

const collections = ["Оригинал", "Ультра", "Классика", "Мастера", "Сезонное"];

const collectionDropdown = {
  label: "Коллекция",
  options: ["Коллекция", ...collections],
};
const modelDropdown = {
  label: "Модель",
  options: ["Модель", "Все модели", "Чипсы", "Кристалл", "Роза", "Кольцо"],
};
const backgroundDropdown = {
  label: "Фон",
  options: ["Фон", "Все фоны", "Тёмный", "Неон", "Золото"],
};

function priceLabel(gift: CatalogGift) {
  return gift.currency === "stars"
    ? `⭐ ${gift.price}`
    : `${gift.price.toFixed(1)} GRAM`;
}

function PromoBanners({ onSoon }: { onSoon: (msg: string) => void }) {
  return (
    <div className="no-scrollbar mb-4 flex gap-3 overflow-x-auto pb-1">
      <button
        type="button"
        onClick={() => onSoon("Промо «Earn» скоро откроется")}
        className="relative h-[124px] w-[124px] shrink-0 cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-[#4ADE80] via-[#22C55E] to-[#15803D] text-left transition hover:brightness-110 active:scale-[0.97]"
      >
        <svg viewBox="0 0 124 124" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <rect x="14" y="36" width="52" height="32" rx="6" fill="#86EFAC" opacity="0.9" />
          <rect x="20" y="42" width="40" height="20" rx="4" fill="#166534" />
          <text x="40" y="57" textAnchor="middle" fontSize="14" fontWeight="800" fill="#BBF7D0" fontFamily="Arial">$</text>
          <rect x="48" y="58" width="48" height="30" rx="6" fill="#BBF7D0" opacity="0.85" transform="rotate(-12 72 73)" />
          <rect x="54" y="64" width="36" height="18" rx="4" fill="#15803D" transform="rotate(-12 72 73)" />
          <text x="72" y="78" textAnchor="middle" fontSize="12" fontWeight="800" fill="#FDE68A" fontFamily="Arial" transform="rotate(-12 72 73)">$</text>
          <path d="M86 18l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z" fill="#FDE68A" />
          <path d="M28 16l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" fill="#FDE68A" />
          <circle cx="92" cy="96" r="18" fill="#2E9BFF" />
          <path d="M92 86l6 14-6 4-6-4 6-14z" fill="#fff" />
          <path d="M86 100h12l-2 6H88l-2-6z" fill="#E8283C" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => onSoon("Stars & Premium — раздел в разработке")}
        className="shine relative h-[124px] min-w-[210px] flex-1 cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-r from-[#1565E8] via-[#3B82F6] to-[#6366F1] text-left transition hover:brightness-110 active:scale-[0.97]"
      >
        <div className="relative z-10 flex h-full flex-col justify-center px-5">
          <p className="text-[26px] font-extrabold leading-[1.05] tracking-tight text-white">
            Stars &amp;
            <br />
            Premium
          </p>
        </div>
        <svg viewBox="0 0 220 124" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <path d="M150 28l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z" fill="#EAF4FF" opacity="0.95" />
          <path d="M186 70l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" fill="#fff" opacity="0.85" />
          <path d="M120 90l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" fill="#fff" opacity="0.7" />
          <circle cx="230" cy="62" r="56" fill="#C084FC" />
          <circle cx="214" cy="62" r="40" fill="#E879F9" />
        </svg>
      </button>
    </div>
  );
}

function BigTabs<T extends string>({
  tabs,
  active,
  onChange,
}: {
  tabs: { id: T; label: string; accent?: boolean }[];
  active: T;
  onChange: (id: T) => void;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            aria-current={isActive ? "true" : undefined}
            className={`cursor-pointer touch-manipulation select-none whitespace-nowrap leading-none tracking-tight transition-all duration-200 active:scale-95 ${
              isActive
                ? "text-[26px] font-bold text-white"
                : tab.accent
                  ? "text-[22px] font-bold text-app-yellow/90 hover:text-app-yellow"
                  : "text-[22px] font-bold text-app-gray hover:text-white/80"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export { BigTabs };

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="skeleton aspect-square rounded-[28px]" />
      ))}
    </div>
  );
}

export default function MarketScreen() {
  const toast = useToast();
  const { t } = useLang();
  const [view, setView] = useState<"all" | "collections" | "stars">("all");
  const [query, setQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [panelOn, setPanelOn] = useState(false);
  const [listOn, setListOn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [favs, setFavs] = useState<number[]>([]);
  const [detail, setDetail] = useState<CatalogGift | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [maxGram, setMaxGram] = useState(40);
  const [favOnly, setFavOnly] = useState(false);
  const [draftCollections, setDraftCollections] = useState<string[]>([]);
  const [draftMaxGram, setDraftMaxGram] = useState(40);
  const [draftFavOnly, setDraftFavOnly] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(t);
  }, []);

  const filtersActive =
    selectedCollections.length > 0 || maxGram < 40 || favOnly;

  const visibleGifts = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = catalog.filter((g) => {
      if (q && !g.name.toLowerCase().includes(q) && !g.collection.toLowerCase().includes(q)) {
        return false;
      }
      if (view === "stars" && g.currency !== "stars") return false;
      if (view === "collections" && selectedCollections.length > 0 && !selectedCollections.includes(g.collection)) {
        return false;
      }
      if (selectedCollections.length > 0 && !selectedCollections.includes(g.collection)) return false;
      if (g.currency === "gram" && g.price > maxGram) return false;
      if (favOnly && !favs.includes(g.id)) return false;
      return true;
    });
    list = [...list].sort((a, b) => {
      const pa = a.currency === "stars" ? a.price / 10 : a.price;
      const pb = b.currency === "stars" ? b.price / 10 : b.price;
      return sortAsc ? pa - pb : pb - pa;
    });
    return list;
  }, [query, view, sortAsc, selectedCollections, maxGram, favOnly, favs]);

  const toggleFav = (id: number, name: string) => {
    setFavs((prev) => {
      const has = prev.includes(id);
      toast(has ? `«${name}» — убрано из избранного` : `«${name}» — в избранном ❤️`, has ? "💔" : "❤️");
      return has ? prev.filter((x) => x !== id) : [...prev, id];
    });
  };

  const openFilters = () => {
    setDraftCollections(selectedCollections);
    setDraftMaxGram(maxGram);
    setDraftFavOnly(favOnly);
    setFilterOpen(true);
  };

  const applyFilters = () => {
    setSelectedCollections(draftCollections);
    setMaxGram(draftMaxGram);
    setFavOnly(draftFavOnly);
    setFilterOpen(false);
    toast("Фильтры применены", "🎛️");
  };

  const resetFilters = () => {
    setDraftCollections([]);
    setDraftMaxGram(40);
    setDraftFavOnly(false);
    setSelectedCollections([]);
    setMaxGram(40);
    setFavOnly(false);
    toast("Фильтры сброшены");
  };

  return (
    <div className="px-4 pb-6 pt-1">
      <PromoBanners onSoon={(m) => toast(m, "✨")} />

      <BigTabs
        tabs={[
          { id: "all", label: t("market.all") },
          { id: "collections", label: t("market.collections") },
          { id: "stars", label: t("market.stars"), accent: true },
        ]}
        active={view}
        onChange={(v) => {
          setView(v);
          if (v === "stars") toast("Показаны подарки за Звёзды", "⭐");
        }}
      />

      <div className="mb-3">
        <SearchBar
          value={query}
          onChange={setQuery}
          trailing={
            <div className="flex items-center gap-2">
              <IconButton label="Аналитика" active={panelOn} onClick={() => setPanelOn((v) => !v)} dot>
                <ActivityIcon className="h-5 w-5" />
              </IconButton>
              <IconButton
                label={listOn ? "Сетка" : "Список"}
                active={listOn}
                onClick={() => {
                  setListOn((v) => !v);
                  toast(listOn ? "Вид: сетка" : "Вид: список", "📐");
                }}
              >
                <LinesIcon className="h-5 w-5" />
              </IconButton>
              <IconButton label="Ещё" onClick={() => toast("Дополнительные опции скоро", "⋯")}>
                <ChevronDownIcon className="h-5 w-5" />
              </IconButton>
            </div>
          }
        />
      </div>

      <div className="mb-1 flex items-center justify-between px-0.5">
        <span className="text-xs text-app-gray">
          {loading ? t("common.loading") : `${t("common.found")}: ${visibleGifts.length}`}
        </span>
        <span className="text-xs text-app-gray">
          {sortAsc ? t("common.cheap") : t("common.expensive")}
        </span>
      </div>

      <div className="mb-4 mt-2">
        <FilterBar
          filterOn={filtersActive}
          onOpenFilters={openFilters}
          sortAsc={sortAsc}
          onToggleSort={() => setSortAsc((v) => !v)}
          dropdowns={[collectionDropdown, modelDropdown, backgroundDropdown]}
          resultCount={filtersActive ? visibleGifts.length : undefined}
        />
      </div>

      {loading ? (
        <SkeletonGrid />
      ) : visibleGifts.length === 0 ? (
        <div className="flex flex-col items-center px-6 py-16 text-center">
          <GiftArt kind="box" className="mb-4 h-24 w-24 opacity-60" />
          <p className="text-base font-semibold">{t("common.empty")}</p>
          <p className="mt-1 text-sm text-app-gray">Попробуйте изменить запрос или фильтры</p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 cursor-pointer rounded-full bg-app-blue px-6 py-3 text-sm font-semibold transition hover:brightness-110 active:scale-95"
          >
            {t("common.reset")}
          </button>
        </div>
      ) : (
        <div className={listOn ? "flex flex-col gap-3" : "grid grid-cols-2 gap-3"}>
          {visibleGifts.map((gift, index) => {
            const isFav = favs.includes(gift.id);
            return (
              <div
                key={gift.id}
                className={`animate-screen ${listOn ? "" : ""}`}
                style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setDetail(gift)}
                  className={`group relative flex w-full cursor-pointer touch-manipulation select-none items-center justify-center overflow-hidden rounded-[28px] transition hover:brightness-105 active:scale-[0.97] ${gift.bg} ${
                    listOn ? "h-28 flex-row gap-4 p-4" : "aspect-square p-3"
                  }`}
                >
                  <CardPattern kind={gift.pattern} id={`g${gift.id}`} color={gift.patternColor} />
                  <span className="absolute left-3 top-3 z-10 flex gap-1.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-md">
                      <CardIcon className="h-5 w-5" />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-app-green text-white shadow-md">
                      <CloverIcon className="h-5 w-5" />
                    </span>
                  </span>
                  <span
                    role="button"
                    tabIndex={0}
                    aria-label="В избранное"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFav(gift.id, gift.name);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.stopPropagation();
                        toggleFav(gift.id, gift.name);
                      }
                    }}
                    className={`absolute right-3 top-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full shadow-md transition active:scale-90 ${
                      isFav ? "animate-pop bg-white text-app-pink" : "bg-black/35 text-white/90 backdrop-blur"
                    }`}
                  >
                    <HeartIcon filled={isFav} className="h-4.5 w-4.5" />
                  </span>
                  <GiftArt
                    kind={gift.art}
                    className={`relative z-10 ${listOn ? "h-20 w-20 shrink-0" : "mt-5 h-[70%] w-[70%]"}`}
                  />
                  {listOn && (
                    <span className="relative z-10 flex min-w-0 flex-1 flex-col items-start gap-1 text-left">
                      <span className="truncate text-base font-bold">{gift.name}</span>
                      <span className="rounded-full bg-black/30 px-2.5 py-1 text-xs font-bold backdrop-blur">
                        {priceLabel(gift)}
                      </span>
                      <span className="text-xs text-white/75">{gift.collection}</span>
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      )}

      <Sheet
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        title={t("common.filters")}
        footer={
          <div className="flex gap-2">
            <button
              type="button"
              onClick={resetFilters}
              className="flex-1 cursor-pointer rounded-2xl bg-white/10 py-3.5 text-sm font-bold transition active:scale-95"
            >
              {t("common.resetBtn")}
            </button>
            <button
              type="button"
              onClick={applyFilters}
              className="flex-[2] cursor-pointer rounded-2xl bg-app-blue py-3.5 text-sm font-bold transition hover:brightness-110 active:scale-95"
            >
              {t("common.apply")}
            </button>
          </div>
        }
      >
        <div className="space-y-5 pb-2">
          <div>
            <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-app-gray">
              {t("common.collection")}
            </p>
            <div className="flex flex-wrap gap-2">
              {collections.map((c) => {
                const active = draftCollections.includes(c);
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() =>
                      setDraftCollections((prev) =>
                        prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
                      )
                    }
                    className={`cursor-pointer rounded-full px-4 py-2.5 text-sm font-semibold transition active:scale-95 ${
                      active ? "bg-app-blue text-white" : "bg-white/8 text-white"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="mb-2.5 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-app-gray">
                Цена до
              </p>
              <p className="text-sm font-bold text-app-blue">{draftMaxGram} GRAM</p>
            </div>
            <input
              type="range"
              min={3}
              max={40}
              step={1}
              value={draftMaxGram}
              onChange={(e) => setDraftMaxGram(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-app-blue"
            />
          </div>

          <label className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl bg-white/5 px-4 py-3.5">
            <span className="text-sm font-medium">Только избранное</span>
            <input
              type="checkbox"
              checked={draftFavOnly}
              onChange={(e) => setDraftFavOnly(e.target.checked)}
              className="h-6 w-6 cursor-pointer appearance-none rounded-lg border-2 border-white/25 checked:border-app-blue checked:bg-app-blue"
            />
          </label>
        </div>
      </Sheet>

      <Sheet
        open={!!detail}
        onClose={() => setDetail(null)}
        title={detail?.name}
        footer={
          detail ? (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => toggleFav(detail.id, detail.name)}
                className={`flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-2xl transition active:scale-90 ${
                  favs.includes(detail.id) ? "bg-app-pink text-white" : "bg-white/10 text-white"
                }`}
                aria-label="Избранное"
              >
                <HeartIcon filled={favs.includes(detail.id)} className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => toast(`Предложение по «${detail.name}» отправлено`, "Offers")}
                className="flex-1 cursor-pointer rounded-2xl bg-white/10 py-3.5 text-sm font-bold transition active:scale-95"
              >
                {t("common.offer")}
              </button>
              <button
                type="button"
                onClick={() => {
                  toast(`«${detail.name}» — покупка через Telegram скоро`, "💎");
                  setDetail(null);
                }}
                className="flex-[1.4] cursor-pointer rounded-2xl bg-app-blue py-3.5 text-sm font-bold transition hover:brightness-110 active:scale-95"
              >
                {t("common.buy")} · {priceLabel(detail)}
              </button>
            </div>
          ) : null
        }
      >
        {detail && (
          <div className="pb-2">
            <div
              className={`relative mb-4 flex aspect-[1.3/1] items-center justify-center overflow-hidden rounded-[28px] ${detail.bg}`}
            >
              <CardPattern kind={detail.pattern} id={`d${detail.id}`} color={detail.patternColor} />
              <GiftArt kind={detail.art} className="animate-float relative z-10 h-40 w-40" />
            </div>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold">
                {detail.collection}
              </span>
              <span className="rounded-full bg-app-green/20 px-3 py-1.5 text-xs font-bold text-app-green">
                {t("common.inStock")}
              </span>
              {detail.currency === "stars" && (
                <span className="flex items-center gap-1 rounded-full bg-app-yellow/15 px-3 py-1.5 text-xs font-bold text-app-yellow">
                  <StarIcon className="h-3 w-3" /> За звезды
                </span>
              )}
            </div>
            <div className="grid grid-cols-3 overflow-hidden rounded-2xl bg-white/5 text-center">
              <div className="border-r border-white/10 px-2 py-3">
                <p className="text-[11px] text-app-gray">{t("common.price")}</p>
                <p className="mt-0.5 text-sm font-bold tabular-nums">{priceLabel(detail)}</p>
              </div>
              <div className="border-r border-white/10 px-2 py-3">
                <p className="text-[11px] text-app-gray">{t("common.owners")}</p>
                <p className="mt-0.5 text-sm font-bold tabular-nums">
                  {detail.owners.toLocaleString("ru")}
                </p>
              </div>
              <div className="px-2 py-3">
                <p className="text-[11px] text-app-gray">ID</p>
                <p className="mt-0.5 text-sm font-bold tabular-nums">#{detail.id}A</p>
              </div>
            </div>
          </div>
        )}
      </Sheet>
    </div>
  );
}
