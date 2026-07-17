"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  // Default "light" cocok dengan render server; inline script di <head> sudah
  // set atribut data-theme yang benar sebelum paint, jadi ini cuma sinkronisasi state.
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark") setTheme("dark");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
      aria-label={theme === "light" ? "Aktifkan dark mode" : "Aktifkan light mode"}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base transition-colors hover:bg-accent-soft"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}