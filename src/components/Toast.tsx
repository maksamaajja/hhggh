"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ToastState = { id: number; message: string; icon?: string };

const ToastContext = createContext<(message: string, icon?: string) => void>(() => {});

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<ToastState | null>(null);

  const show = useCallback((message: string, icon?: string) => {
    const id = Date.now() + Math.random();
    setToast({ id, message, icon });
    window.setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 2600);
  }, []);

  const value = useMemo(() => show, [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 top-16 z-[70] flex justify-center px-4">
        {toast && (
          <div
            key={toast.id}
            className="animate-toast pointer-events-auto flex max-w-[92vw] items-center gap-2.5 rounded-2xl border border-white/15 bg-app-elevated/95 px-4 py-3 text-sm font-semibold shadow-[0_14px_44px_rgba(10,132,255,0.3),0_6px_18px_rgba(0,0,0,0.55)] backdrop-blur-xl ring-1 ring-app-blue/25"
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-app-blue shadow-[0_0_10px_#0a84ff]"
            />
            {toast.icon && <span className="text-base leading-none">{toast.icon}</span>}
            <span className="text-white">{toast.message}</span>
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}
