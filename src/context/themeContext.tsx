import React, { useState } from "react";

export interface ThemeContextInterface {
  name: string,
  setName: {}
  lightTheme: boolean;
  setLightTheme: {}
}

export const ThemeContext = React.createContext<ThemeContextInterface | null>(null);

export const ThemeProvider = ({ children }: any) => {
  const [name, setName] = useState("julia");
  const [lightTheme, setLightTheme] = useState(true);

  const defaultValues: ThemeContextInterface = {
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