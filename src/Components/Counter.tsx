import { FC, useState } from "react";
import classes from "./Counter.module.scss";

export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const handleClcik = () => setCount((prev) => prev + 1);
  return (
    <button className={classes.btn} onClick={handleClcik}>
      {count}
    </button>
  );
};
