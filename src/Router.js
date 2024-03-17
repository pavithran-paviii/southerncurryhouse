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
import Authentication, { Login, SignUp } from "./pages/Authentication";
import DashboardLayout from "./layout/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Home />} />
      <Route path="signin" element={<Authentication child={<Login />} />} />
      <Route path="signup" element={<Authentication child={<SignUp />} />} />
      <Route path="menu" element={<Menu />} />
      <Route path="dashboard" element={<DashboardLayout child="" />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
