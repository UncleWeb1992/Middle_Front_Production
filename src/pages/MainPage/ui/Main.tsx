import { FC } from "react";
import { useTranslation } from "react-i18next";

const Main: FC = () => {
  const { t } = useTranslation("main");
  return <div>{t("главная")}</div>;
};

export default Main;
