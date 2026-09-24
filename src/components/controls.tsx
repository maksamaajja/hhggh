"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDownIcon, FilterIcon, SearchIcon, SortIcon, XIcon } from "./icons";
import { useLang } from "./i18n";

export function SearchBar({
  value,
  onChange,
  placeholder,
  trailing,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  trailing?: ReactNode;
}) {
  const { t } = useLang();
  return (
    <div className="flex min-w-0 flex-1 items-center gap-2">
      <div className="relative min-w-0 flex-1">
        <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-app-gray" />
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? t("search.quick")}
          className="h-11 w-full cursor-text rounded-full bg-app-surface pl-10 pr-9 text-sm text-white outline-none placeholder:text-app-gray focus:ring-2 focus:ring-app-blue/40"
        />
        {value && (
          <button
            type="button"
            aria-label="Очистить поиск"
            onClick={() => onChange("")}
            className="absolute right-2.5 top-1/2 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition active:scale-90"
          >
            <XIcon className="h-3 w-3" />
          </button>
        )}
      </div>
      {trailing}
    </div>
  );
}

export function IconButton({
  label,
  active,
  onClick,
  children,
  dot,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  dot?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`relative flex h-11 w-11 shrink-0 cursor-pointer touch-manipulation select-none items-center justify-center rounded-full transition active:scale-90 ${
        active ? "bg-app-blue text-white" : "bg-app-surface text-white hover:bg-app-elevated"
      }`}
    >
      {children}
      {dot && (
        <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-app-red ring-2 ring-app-surface" />
      )}
    </button>
  );
}

export function Dropdown({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(label);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex h-11 cursor-pointer touch-manipulation select-none items-center gap-1 rounded-full px-4 text-sm font-bold transition active:scale-95 ${
          open ? "bg-app-elevated text-white" : "bg-app-surface text-white"
        }`}
      >
        <span className="whitespace-nowrap">{value}</span>
        <ChevronDownIcon
          className={`h-4 w-4 text-app-gray transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-30 mt-1.5 min-w-[180px] overflow-hidden rounded-2xl bg-app-elevated py-1 shadow-xl shadow-black/50">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setValue(option);
                setOpen(false);
              }}
              className={`block w-full cursor-pointer px-4 py-2.5 text-left text-[13px] transition hover:bg-white/10 ${
                value === option ? "font-semibold text-app-blue" : "text-white"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function FilterBar({
  filterOn,
  onOpenFilters,
  sortAsc,
  onToggleSort,
  dropdowns,
  resultCount,
}: {
  filterOn: boolean;
  onOpenFilters: () => void;
  sortAsc: boolean;
  onToggleSort: () => void;
  dropdowns: { label: string; options: string[] }[];
  resultCount?: number;
}) {
  return (
    <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
      <button
        type="button"
        aria-label="Открыть фильтры"
        aria-pressed={filterOn}
        onClick={onOpenFilters}
        className={`relative flex h-11 w-11 shrink-0 cursor-pointer touch-manipulation select-none items-center justify-center rounded-full transition active:scale-90 ${
          filterOn ? "bg-app-blue text-white" : "bg-app-surface text-white"
        }`}
      >
        <FilterIcon className="h-5 w-5" />
        {typeof resultCount === "number" && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-app-green px-1 text-[10px] font-bold text-black">
            {resultCount}
          </span>
        )}
      </button>
      <button
        type="button"
        aria-label={sortAsc ? "Сначала дешевле" : "Сначала дороже"}
        onClick={onToggleSort}
        className="flex h-11 w-11 shrink-0 cursor-pointer touch-manipulation select-none items-center justify-center rounded-full bg-app-surface text-white transition active:scale-90"
      >
        <SortIcon className={`h-5 w-5 transition-transform ${sortAsc ? "" : "rotate-180"}`} />
      </button>
      <span aria-hidden="true" className="mx-1 h-6 w-px shrink-0 bg-white/20" />
      {dropdowns.map((item) => (
        <Dropdown key={item.label} label={item.label} options={item.options} />
      ))}
    </div>
  );
}
