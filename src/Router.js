import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
