import { AboutAsync } from "pages/AboutPage";
import { MainAsync } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  Main = "main",
  About = "about",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.Main]: "/",
  [AppRoutes.About]: "/about",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Main]: {
    path: RoutePaths.main,
    element: <MainAsync />,
  },
  [AppRoutes.About]: {
    path: RoutePaths.about,
    element: <AboutAsync />,
  },
};
