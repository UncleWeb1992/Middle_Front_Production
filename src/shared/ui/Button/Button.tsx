import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/libs/classNames";
import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string;
}

export const Button: FC<Props> = ({ classname, children, ...rest }: Props) => {
  return (
    <button {...rest} className={classNames(styles.clear, {}, [classname])}>
      {children}
    </button>
  );
};
