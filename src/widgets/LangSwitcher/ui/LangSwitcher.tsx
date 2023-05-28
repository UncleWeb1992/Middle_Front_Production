import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/libs/classNames";
import { Button } from "shared/ui/Button/Button";
import styles from "./LangSwitcher.module.scss";

type Props = {
  classname?: string;
};

export const LangSwitcher: FC<Props> = ({ classname }) => {
  const { t, i18n } = useTranslation();

  const onToggle = () =>
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

  return (
    <Button
      classname={classNames(styles.switcher, {}, [classname])}
      onClick={onToggle}
    >
      {t("Язык")}
    </Button>
  );
};
