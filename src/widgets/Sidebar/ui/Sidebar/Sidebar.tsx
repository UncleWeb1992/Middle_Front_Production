import { FC, useEffect, useState } from "react";
import { classNames } from "shared/libs/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from "./Sidebar.module.scss";
import { LangSwitcher } from "widgets/LangSwitcher";

type Props = {};

export const Sidebar: FC = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState<string | undefined>();

  const handleToggle = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (open) {
      setTimeout(() => setLabel("Сменить тему"), 300);
    } else {
      setLabel(undefined);
    }
  }, [open]);

  return (
    <div className={classNames(styles.sidebar, { [styles.isOpen]: !open })}>
      <button onClick={handleToggle}>Toggle</button>
      <div>
        <ThemeSwitcher label={label} classname={styles.switchers} />
        <LangSwitcher classname={styles.lang} />
      </div>
    </div>
  );
};
