"use client";

import {
  GamepadIcon,
  GiftIcon,
  MarketIcon,
  StakingIcon,
} from "./icons";
import { useLang } from "./i18n";

export type Tab = "games" | "market" | "gifts" | "staking" | "profile";

const items: {
  id: Exclude<Tab, "profile">;
  key: string;
  Icon: typeof GamepadIcon;
}[] = [
  { id: "games", key: "nav.games", Icon: GamepadIcon },
  { id: "market", key: "nav.market", Icon: MarketIcon },
  { id: "gifts", key: "nav.gifts", Icon: GiftIcon },
  { id: "staking", key: "nav.staking", Icon: StakingIcon },
];

export default function BottomNav({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (tab: Tab) => void;
}) {
  const { t } = useLang();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 bg-app-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-md items-center justify-between px-3 pb-[max(env(safe-area-inset-bottom),8px)] pt-2">
        <div className="tile-3d flex h-[68px] flex-1 items-stretch justify-around rounded-[26px] bg-app-surface px-1 mr-12">
          {items.map(({ id, key, Icon }) => {
            const isActive = active === id;
            const label = t(key);
            return (
              <button
                key={id}
                type="button"
                onClick={() => onChange(id)}
                aria-current={isActive ? "page" : undefined}
                className="flex min-w-0 flex-1 cursor-pointer touch-manipulation select-none flex-col items-center justify-center gap-0.5 py-1 transition"
              >
                <span
                  className={`flex h-9 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                    isActive ? "nav-glow bg-app-elevated" : ""
                  }`}
                >
                  <Icon
                    className={`h-[22px] w-[22px] transition ${
                      isActive ? "text-app-blue" : "text-app-gray"
                    }`}
                  />
                </span>
                <span
                  className={`max-w-full truncate px-0.5 text-[10px] leading-tight transition ${
                    isActive ? "font-bold text-app-blue" : "font-medium text-app-gray"
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => onChange("profile")}
          aria-label={t("nav.profile")}
          className="btn-3d flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-app-green text-black font-bold text-base shadow-lg shadow-app-green/30 transition hover:brightness-110 active:scale-95"
        >
          П
        </button>
      </div>
    </nav>
  );
}
