"use client";

import { useEffect } from "react";
import { XIcon } from "./icons";

export default function Sheet({
  open,
  onClose,
  title,
  children,
  footer,
  overlayZ = "z-50",
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  overlayZ?: string;
}) {
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

  return (
    <div
      className={`fixed inset-0 ${overlayZ} flex items-end justify-center`}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        aria-label="Закрыть"
        className="absolute inset-0 animate-fade cursor-default bg-black/65"
        onClick={onClose}
      />
      <div className="animate-sheet relative flex max-h-[90dvh] w-full max-w-md flex-col rounded-t-[28px] bg-app-surface shadow-2xl shadow-black/60">
        <div className="shrink-0 px-5 pb-2 pt-3">
          <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-white/25" />
          {(title || true) && (
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="min-w-0 flex-1 truncate text-xl font-bold">{title}</h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Закрыть"
                className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition active:scale-90"
              >
                <XIcon className="h-4.5 w-4.5" />
              </button>
            </div>
          )}
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-4">{children}</div>
        {footer && (
          <div className="shrink-0 border-t border-white/10 bg-app-surface px-5 pb-[max(env(safe-area-inset-bottom),16px)] pt-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
