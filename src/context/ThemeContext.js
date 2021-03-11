import { createContext, useContext } from "react";

export const themes = {
  dark: {
    background: "#192a56",
    foreground: "#273c75",
    color: "#f5f6fa",
  },
  light: {
    background: "#f1f2f6",
    foreground: "#f5f6fa",
    color: "#2f3640",
  },
};

// create new context
export const ThemeContext = createContext();

// use context
export const useThemeContext = () => useContext(ThemeContext);
