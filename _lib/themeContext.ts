import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: (theme: string) => {},
});

export const useTheme = () => useContext(ThemeContext);
