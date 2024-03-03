import { lazy } from "react";
import ErrorPage from "@pages/error/ErrorPage";
import App from "App.tsx";

const AuthPage = lazy(() => import("@pages/auth/AuthPage"));
const BrowserPage = lazy(() => import("@pages/browser/BrowserPage"));

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <BrowserPage />
      },
      {
        path: "/auth",
        element: <AuthPage />
      }
    ]
  }
];

