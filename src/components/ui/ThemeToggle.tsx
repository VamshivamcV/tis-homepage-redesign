"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const handleCustomEvent = () => callback();
  const handleStorage = (event: StorageEvent) => {
    if (event.key === "tis-theme") callback();
  };

  window.addEventListener("tis-theme-change", handleCustomEvent);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener("tis-theme-change", handleCustomEvent);
    window.removeEventListener("storage", handleStorage);
  };
}

function getThemeSnapshot() {
  if (typeof window === "undefined") return "dark";

  const storedTheme = localStorage.getItem("tis-theme");
  if (storedTheme) return storedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const themeMode = useSyncExternalStore(subscribeTheme, getThemeSnapshot, () => "dark");
  const isDark = themeMode === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  }, [isDark]);

  const toggleTheme = () => {
    const nextMode = isDark ? "light" : "dark";
    localStorage.setItem("tis-theme", nextMode);
    window.dispatchEvent(new Event("tis-theme-change"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition hover:border-amber-500 hover:text-amber-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
      suppressHydrationWarning
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
