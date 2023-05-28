import { FC } from "react";
import { classNames } from "shared/libs/classNames";
import styles from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface Props {
  classname: string;
}

export const Navbar: FC = ({ classname }: Props) => {
  return (
    <div className={classNames(styles.navbar, {}, [classname])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.Seconodary} to="/">
          Главаня
        </AppLink>
        <AppLink theme={AppLinkTheme.Seconodary} to="/about">
          О нас
        </AppLink>
      </div>
    </div>
  );
};
