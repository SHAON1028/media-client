import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Home/Media/Media";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import ErrorPage from "../Pages/Shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<PrivateRoute> <Home /></PrivateRoute>,
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
        element: <PrivateRoute><Media /></PrivateRoute>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details/></PrivateRoute>,
        loader:({ params }) => fetch(`http://localhost:5000/allposts/${params.id}`)
      },
      {
        path: "/about",
        element: <PrivateRoute><About /></PrivateRoute>,
        
      },
    ],
  },
]);

export default router;
