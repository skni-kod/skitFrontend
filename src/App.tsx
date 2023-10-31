import { RouterProvider } from "react-router-dom";
import { rootRouter } from "./shared/routes/routes.tsx";
import "./App.scss";

const App = () => {

  return (
    <RouterProvider router={rootRouter}/>
  );
};

export default App;
