import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./shared/routes/routes.tsx";
import "./App.scss";

const router = createBrowserRouter(routes);

const App = () => {

  return (
    <RouterProvider router={router}/>
  );
};

export default App;
