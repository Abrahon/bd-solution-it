import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Dashboard from "../Dashboard/Dashboard";
import Login from "../components/SafetyZone/Login";
import Signup from "../components/SafetyZone/Signup";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Service from "../Pages/Service/Service";
import Blog from "../Pages/Blog/Blog";
import DashboardLayout from "../Layout/DashboardLayout";
import ManageUser from "../Dashboard/components/ManageUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/blog",
        element: <Blog />,
      },
      {
        path: "/dashboard/about",
        element: <About />,
      },
      {
        path: "/dashboard/contact",
        element: <Contact />,
      },
      {
        path: "/dashboard/service",
        element: <Service />,
      },
      {
        path: "/dashboard/manage_user",
        element: <ManageUser />,
      },
    ],
  },
]);

export default router;
