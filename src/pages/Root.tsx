import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "@containers/Navigation/Navigation.tsx";

const Root = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Root;
