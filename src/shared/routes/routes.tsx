import { lazy } from "react";
import ErrorPage from "@pages/error/ErrorPage";
import Root from "@pages/Root";

const HomePage = lazy(() => import("@pages/home/HomePage"));
const AuthPage = lazy(() => import("@pages/auth/AuthPage"));
const BrowserPage = lazy(() => import("@pages/browser/BrowserPage"));

export const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/auth",
        element: <AuthPage />
      },
      {
        path: "/browser",
        element: <BrowserPage />
      }
    ]
  }
];

