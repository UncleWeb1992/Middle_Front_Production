import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import styles from "./AppLink.module.scss";
import { classNames } from "shared/libs/classNames";

export enum AppLinkTheme {
  Primary = "primary",
  Seconodary = "ssseconodary",
}

interface Props extends LinkProps {
  classes?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<Props> = ({
  classes,
  theme = AppLinkTheme.Primary,
  children,
  ...rest
}) => {
  return (
    <Link
      className={classNames(styles.link, {}, [classes, styles[theme]])}
      {...rest}
    >
      {children}
    </Link>
  );
};
