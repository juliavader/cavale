import React, { ReactNode, useState } from "react";
import { IsThemeContextInterface } from "../Interface";

export const ThemeContext = React.createContext<IsThemeContextInterface | null>(null);

export const ThemeProvider = ({ children }: {children: ReactNode}) => {
  const [name, setName] = useState("julia");
  const [lightTheme, setLightTheme] = useState(true);

  const defaultValues: IsThemeContextInterface = {
    name,
    setName,
    lightTheme,
    setLightTheme
  }

  return (
    <ThemeContext.Provider value={defaultValues}>
      {children}
    </ThemeContext.Provider>
  );
}