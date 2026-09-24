"use client";

import { useState, type ReactNode } from "react";
import { BlueFrogHeart, GiftArt, PepeChair, RainbowFrog } from "../art";
import {
  ArrowUpIcon,
  CartIcon,
  DocumentIcon,
  LinesIcon,
  PencilIcon,
  PlusIcon,
  SendIcon,
} from "../icons";
import { FilterBar, IconButton, SearchBar } from "../controls";
import type { Tab } from "../BottomNav";
import { BigTabs } from "./MarketScreen";
import { useToast } from "../Toast";
import { useLang } from "../i18n";
import AddGiftFlow, { type AddedGift } from "../AddGiftFlow";

type SubTab = "gifts" | "offers" | "history";
type OfferTab = "received" | "placed" | "collections";

function EmptyState({
  art,
  title,
  subtitle,
  actionLabel,
  onAction,
}: {
  art: ReactNode;
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-col items-center px-4 pb-10 pt-8 text-center">
      <div className="mb-5 animate-float">{art}</div>
      <h3 className="text-lg font-bold">{title}</h3>
      {subtitle && (
        <p className="mt-2 max-w-xs text-[15px] leading-snug text-app-gray">{subtitle}</p>
      )}
      {actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className="mt-5 cursor-pointer touch-manipulation rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-black shadow-lg shadow-black/30 transition hover:bg-white/90 active:scale-95"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

const marketDropdowns = [
  { label: "Коллекция", options: ["Коллекция", "Все коллекции", "Ультра", "Мастера"] },
  { label: "Модель", options: ["Модель", "Все модели", "Чипсы", "Кристалл"] },
  { label: "Фон", options: ["Фон", "Все фоны", "Тёмный", "Неон"] },
];

const actionItems = [
  { key: "add", i18n: "action.add", Icon: PlusIcon, color: "text-app-blue" },
  { key: "withdraw", i18n: "action.withdraw", Icon: ArrowUpIcon, color: "text-app-green" },
  { key: "send", i18n: "action.send", Icon: SendIcon, color: "text-app-teal" },
  { key: "sell", i18n: "action.sell", Icon: CartIcon, color: "text-app-orange" },
] as const;

function GiftActions({
  listed,
  onAddGift,
}: {
  listed: boolean;
  onAddGift: () => void;
}) {
  const toast = useToast();
  const { t } = useLang();
  const [filterOn, setFilterOn] = useState(false);
  const [sortAsc, setSortAsc] = useState(true);
  const [query, setQuery] = useState("");
  const [moreOn, setMoreOn] = useState(false);

  const handleAction = (key: string, label: string) => {
    if (key === "add") {
      onAddGift();
      return;
    }
    const messages: Record<string, string> = {
      withdraw: t("gifts.withdrawToast"),
      send: t("gifts.sendToast"),
      sell: t("gifts.sellToast"),
      cancel: t("gifts.cancelToast"),
      edit: t("gifts.editToast"),
    };
    toast(messages[key] ?? label, "✨");
  };

  return (
    <div className="mb-4 space-y-3">
      {listed ? (
        <div className="overflow-hidden rounded-3xl bg-app-surface">
          <button
            type="button"
            onClick={() => handleAction("cancel", t("action.cancel"))}
            className="flex w-full cursor-pointer touch-manipulation items-center gap-3 px-4 py-4 text-[15px] font-semibold transition hover:bg-white/5 active:scale-[0.98]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-app-elevated text-app-blue">
              <DocumentIcon className="h-5 w-5" />
            </span>
            {t("action.cancel")}
          </button>
          <div className="mx-4 h-px bg-white/10" />
          <button
            type="button"
            onClick={() => handleAction("edit", t("action.edit"))}
            className="flex w-full cursor-pointer touch-manipulation items-center gap-3 px-4 py-4 text-[15px] font-semibold transition hover:bg-white/5 active:scale-[0.98]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-app-elevated text-app-yellow">
              <PencilIcon className="h-5 w-5" />
            </span>
            {t("action.edit")}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-4 rounded-3xl bg-app-surface p-2 shadow-lg shadow-black/40 ring-1 ring-white/6">
          {actionItems.map(({ key, i18n, Icon, color }) => {
            const label = t(i18n);
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleAction(key, label)}
                className="group flex cursor-pointer touch-manipulation select-none flex-col items-center gap-2 rounded-2xl py-3 transition active:scale-95"
              >
                <span className="tile-3d flex h-11 w-11 items-center justify-center rounded-full bg-app-elevated transition group-hover:bg-white/15 group-active:scale-90">
                  <Icon className={`h-5.5 w-5.5 ${color}`} />
                </span>
                <span className="text-[12px] font-semibold text-white">{label}</span>
              </button>
            );
          })}
        </div>
      )}

      <SearchBar
        value={query}
        onChange={setQuery}
        trailing={
          <IconButton label={t("more")} active={moreOn} onClick={() => setMoreOn((v) => !v)}>
            <LinesIcon className="h-5 w-5" />
          </IconButton>
        }
      />

      <FilterBar
        filterOn={filterOn}
        onOpenFilters={() => {
          setFilterOn((v) => !v);
          toast(filterOn ? t("filters.off") : t("filters.on"), "🎛️");
        }}
        sortAsc={sortAsc}
        onToggleSort={() => setSortAsc((v) => !v)}
        dropdowns={marketDropdowns}
      />
    </div>
  );
}

function OffersView({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  const { t } = useLang();
  const [tab, setTab] = useState<OfferTab>("received");

  const content: Record<OfferTab, { title: string; action?: string }> = {
    received: { title: t("offers.received"), action: t("goMarket") },
    placed: { title: t("offers.placed"), action: t("goMarket") },
    collections: { title: t("offers.collections") },
  };
  const current = content[tab];

  return (
    <div>
      <div className="mb-2 flex flex-wrap gap-x-5 gap-y-2">
        {(
          [
            { id: "received", label: t("offers.tabReceived").replace("{n}", "0") },
            { id: "placed", label: t("offers.tabPlaced").replace("{n}", "0") },
            { id: "collections", label: t("offers.tabCollections").replace("{n}", "0") },
          ] as { id: OfferTab; label: string }[]
        ).map((item) => {
          const isActive = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`relative cursor-pointer touch-manipulation select-none pb-1 text-[17px] font-bold transition active:scale-95 ${
                isActive ? "text-white" : "text-app-gray hover:text-white/80"
              }`}
            >
              {item.label}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-app-blue transition-transform duration-200 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>
      <div className="mb-4 h-px bg-white/10" />
      <EmptyState
        art={<PepeChair className="h-44 w-44" />}
        title={current.title}
        actionLabel={current.action}
        onAction={() => onNavigate("market")}
      />
    </div>
  );
}

function HistoryView({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  const toast = useToast();
  const { t } = useLang();
  const [query, setQuery] = useState("");
  const [filterOn, setFilterOn] = useState(false);
  const [sortAsc, setSortAsc] = useState(true);
  const [moreOn, setMoreOn] = useState(false);

  return (
    <div className="space-y-3">
      <SearchBar
        value={query}
        onChange={setQuery}
        trailing={
          <IconButton label={t("more")} active={moreOn} onClick={() => setMoreOn((v) => !v)}>
            <LinesIcon className="h-5 w-5" />
          </IconButton>
        }
      />
      <FilterBar
        filterOn={filterOn}
        onOpenFilters={() => {
          setFilterOn((v) => !v);
          toast(t("history.filtersToast"), "📜");
        }}
        sortAsc={sortAsc}
        onToggleSort={() => setSortAsc((v) => !v)}
        dropdowns={[
          { label: "Тип", options: ["Тип", "Все типы", "Покупка", "Продажа", "Обмен"] },
          { label: "Цена", options: ["Цена", "Любая", "до 10 GRAM", "10–50 GRAM", "50+ GRAM"] },
          { label: "Дата", options: ["Дата", "За всё время", "Сегодня", "Неделя", "Месяц"] },
        ]}
      />
      <EmptyState
        art={<PepeChair className="h-44 w-44" />}
        title={t("history.empty")}
        actionLabel={t("history.goMarket")}
        onAction={() => onNavigate("market")}
      />
    </div>
  );
}

export default function GiftsScreen({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  const { t } = useLang();
  const [subTab, setSubTab] = useState<SubTab>("gifts");
  const [listed, setListed] = useState(false);
  const [wizOpen, setWizOpen] = useState(false);
  const [added, setAdded] = useState<AddedGift[]>([]);

  return (
    <div className="px-4 pb-6 pt-1">
      <BigTabs
        tabs={[
          { id: "gifts", label: t("gifts.tab") },
          { id: "offers", label: t("offers.tab") },
          { id: "history", label: t("history.tab") },
        ]}
        active={subTab}
        onChange={setSubTab}
      />

      {subTab === "gifts" && (
        <>
          <div className="mb-4 flex rounded-full bg-app-surface p-1.5">
            <button
              type="button"
              onClick={() => setListed(false)}
              className={`flex flex-1 cursor-pointer touch-manipulation items-center justify-center gap-2 rounded-full py-3 text-[15px] font-bold transition ${
                !listed ? "bg-white text-black shadow-lg shadow-black/30" : "text-app-gray"
              }`}
            >
              {t("gifts.unlisted")}
              <span
                className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs font-bold ${
                  !listed ? "bg-black text-white" : "bg-white/10 text-app-gray"
                }`}
              >
                {listed ? 0 : added.length}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setListed(true)}
              className={`flex flex-1 cursor-pointer touch-manipulation items-center justify-center gap-2 rounded-full py-3 text-[15px] font-bold transition ${
                listed ? "bg-white text-black shadow-lg shadow-black/30" : "text-app-gray"
              }`}
            >
              {t("gifts.listed")}
              <span
                className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs font-bold ${
                  listed ? "bg-black text-white" : "bg-white/10 text-app-gray"
                }`}
              >
                0
              </span>
            </button>
          </div>

          <GiftActions listed={listed} onAddGift={() => setWizOpen(true)} />

          {listed ? (
            <EmptyState art={<RainbowFrog className="h-44 w-44" />} title={t("gifts.listedEmpty")} />
          ) : added.length > 0 ? (
            <div className="space-y-2.5">
              {added.map((gift) => (
                <div key={gift.id} className="tile-3d flex items-center gap-3 rounded-3xl bg-app-surface p-3.5">
                  <GiftArt kind="box" className="h-12 w-12 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{gift.url}</p>
                    <p className="mt-0.5 text-xs font-bold text-app-yellow tabular-nums">
                      {gift.price} GRAM
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-app-blue/15 px-2.5 py-1 text-[11px] font-bold text-app-blue">
                    {t("gifts.unlisted")}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              art={<BlueFrogHeart className="h-44 w-44" />}
              title={t("gifts.emptyTitle")}
              subtitle={t("gifts.emptySub")}
              actionLabel={t("howto.how")}
              onAction={() => setWizOpen(true)}
            />
          )}
        </>
      )}

      {subTab === "offers" && <OffersView onNavigate={onNavigate} />}
      {subTab === "history" && <HistoryView onNavigate={onNavigate} />}

      {wizOpen && (
        <AddGiftFlow
          onClose={() => setWizOpen(false)}
          onAdd={(gift) => setAdded((list) => [gift, ...list])}
        />
      )}
    </div>
  );
}
