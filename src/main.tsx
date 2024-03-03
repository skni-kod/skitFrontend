import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import { routes } from "@shared/routes/routes.tsx";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
