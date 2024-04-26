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
import Menus from "./pages/Menus";
import Offers from "./pages/Offers";
import Reviews from "./pages/Reviews";
import Billing from "./pages/Billing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Home />} />
      <Route path="signin" element={<Authentication child={<Login />} />} />
      <Route path="signup" element={<Authentication child={<SignUp />} />} />
      <Route path="menu" element={<Menu />} />
      <Route path="dashboard" element={<DashboardLayout child="" />} />
      <Route path="menus" element={<DashboardLayout child={<Menus />} />} />
      <Route path="billing" element={<DashboardLayout child={<Billing />} />} />
      <Route path="offers" element={<DashboardLayout child={<Offers />} />} />
      <Route path="reviews" element={<DashboardLayout child={<Reviews />} />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
