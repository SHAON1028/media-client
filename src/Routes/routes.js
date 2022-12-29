import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Home/Media/Media";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import ErrorPage from "../Pages/Shared/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        path: "/media",
        element: <Media />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader:({ params }) => fetch(`http://localhost:5000/allposts/${params.id}`)
      },
    ],
  },
]);

export default router;
