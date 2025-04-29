import React, { createContext } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light', // default value
  setTheme: () => {}, // placeholder function
});
