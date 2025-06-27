import React, { useEffect, useState } from "react";

const ThemeSection = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPefersDark) {
      setTheme("dark");
    }
  }, []);
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <section className=" sm:px-8 lg:mr-2  mr-10">
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="absolute top-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700
  hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors "
      >
        {theme === "dark" ? (
          <span className="text-yellow-300 text-xl">☀️</span>
        ) : (
          <span className="text-gray-700 text-xl">🌛</span>
        )}
      </button>
    </section>
  );
};

export default ThemeSection;
