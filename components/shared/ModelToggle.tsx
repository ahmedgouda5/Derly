"use client";

import React from "react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const checked = theme === "dark";

  const handleToggle = () => {
    setTheme(checked ? "light" : "dark");
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={handleToggle}
      />

      <div
        className="
        w-14 h-8 bg-[#6361e4] rounded-full transition-all
        peer-checked:bg-slate-800
      "
      />

      <div
        className="
        absolute left-1 top-1 h-6 w-6 rounded-full bg-[#6361e4] 
        transition-all peer-checked:translate-x-6 peer-checked:bg-[#6361e4]
        "
      />

      <div
        className="
        absolute left-2 top-2 h-4 w-4 rounded-full bg-white 
        shadow-[0_0_10px_3px_rgba(255,255,255,0.7)] 
        transition-all peer-checked:opacity-0
      "
      />

      <div
        className="
        absolute right-2 top-2 h-4 w-4 rounded-full bg-white 
        translate-x-4 opacity-0 transition-all 
        peer-checked:translate-x-0 peer-checked:opacity-100
      "
      />
    </label>
  );
}
