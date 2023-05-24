import { createContext } from "react";

export enum Theme {
  Dark = "dark",
  Light = "light",
}

export const LS_THEME_KEY = "theme";

interface Props {
  theme?: Theme;
  toggleTheme?: () => void;
}

export const ThemeContext = createContext<Props>({});
