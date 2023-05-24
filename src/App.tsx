import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainAsync } from "./pages/MainPage/Main.async";
import { AboutAsync } from "./pages/AboutPage/About.async";
import "./styles/index.scss";
import { useTheme } from "./Theme/useTheme";
import { classNames } from "./halpers/classNames";

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>change themes</button>
      <Link to="/">Главаня</Link>
      <Link to="/about">О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainAsync />} />
          <Route path="/about" element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
