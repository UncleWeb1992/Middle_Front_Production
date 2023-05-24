import { FC, ReactNode, useMemo, useState } from "react";
import { LS_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

interface Props {
  children: ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LS_THEME_KEY) as Theme) || Theme.Light;

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    const nextTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(nextTheme);

    localStorage.setItem(LS_THEME_KEY, nextTheme);
  };

  const defaultProps = useMemo(() => ({ theme, toggleTheme }), [theme]);
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
