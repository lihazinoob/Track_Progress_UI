import React, { createContext, useEffect, useState } from "react";



const initialState = {
  theme: "system",
  setTheme: () => null,
};

// Create the context
export const ThemeProviderContext = createContext(initialState);
// Custom hook to use ThemeProviderContext
export const useTheme = () => React.useContext(ThemeProviderContext);

export default function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] =
    useState (() => localStorage.getItem(storageKey) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
       {/* {console.log("ThemeProvider rendering with children:", children)} */}
      {children}
    </ThemeProviderContext.Provider>
  );
}
