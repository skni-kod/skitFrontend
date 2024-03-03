import { Outlet } from "react-router-dom";
import "./App.scss";
import Navigation from "@containers/Navigation/Navigation.tsx";
import { Suspense } from "react";


const App = () => {

  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default App;
