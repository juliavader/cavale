import React from "react";

export interface ThemeContextInterface {
    lightTheme: boolean;
    toggleTheme?: () => void;
  }
  

export const ThemeContext = React.createContext<ThemeContextInterface | null>(null);