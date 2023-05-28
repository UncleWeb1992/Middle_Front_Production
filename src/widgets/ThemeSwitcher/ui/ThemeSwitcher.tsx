import { useTheme } from "app/providers/ThemeProvider";
import { FC } from "react";
import { classNames } from "shared/libs/classNames";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import styles from "./ThemeSwitcher.module.scss";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { Button } from "shared/ui/Button/Button";

type Props = {
  classname?: string;
  label?: string;
};

export const ThemeSwitcher: FC<Props> = ({ classname, label }) => {
  const { toggleTheme, theme } = useTheme();

  const CurrentIcon = theme === Theme.Dark ? LightIcon : DarkIcon;
  return (
    <Button
      classname={classNames(styles.btn, {}, [classname])}
      onClick={toggleTheme}
    >
      {label && <p>{label}</p>}

      <CurrentIcon />
    </Button>
  );
};
