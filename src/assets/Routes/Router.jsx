// src/assets/Routes/Router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import LogIn from "../../LogIn";
import Register from "../../Register";
import CoxsBazar from "../Pages/CoxsBazar";
import Shreemangal from "../Pages/Shreemangal";
import Sundarban from "../Pages/Shundarban";
import Sajek from "../Pages/Sajek";
import Destinations from "../Pages/Destination"; // Import the Destinations component
import Blog from "../Pages/Blog"; // Import Blog component
import Contact from "../Pages/Contact"; // Import Contact component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/destinations",
        element: <Destinations />, // Destinations page
      },
      {
        path: "/coxs-bazar",
        element: <CoxsBazar />,
      },
      {
        path: "/shreemangal",
        element: <Shreemangal />,
      },
      {
        path: "/sundarban",
        element: <Sundarban />,
      },
      {
        path: "/sajek",
        element: <Sajek />,
      },
      {
        path: "/blog",
        element: <Blog />, // Blog page
      },
      {
        path: "/contact",
        element: <Contact />, // Contact page
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
