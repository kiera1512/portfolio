"use client";

import { ToggleButton, useTheme } from "@once-ui-system/core";
import type React from "react";
import { useEffect, useState } from "react";

export const ThemeToggle: React.FC = () => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);

  if (!mounted) {
    return <ToggleButton prefixIcon="light" aria-label="Toggle theme" />;
  }

  const nextTheme = currentTheme === "light" ? "dark" : "light";
  const icon = currentTheme === "dark" ? "light" : "dark";

  return (
    <ToggleButton
      prefixIcon={icon}
      onClick={() => {
        setTheme(nextTheme);
        setCurrentTheme(nextTheme);
      }}
      aria-label={`Switch to ${nextTheme} mode`}
    />
  );
};
