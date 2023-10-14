import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../views/auth";
import Login from "../views/auth/Login";

import AppLayout from "../views/app";
import Dashboard from "../views/app/Dashboard";

const publicRoutes = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
];

const privateRoutes = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/app",
        element: <Dashboard />,
      },
    ],
  },
];

const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);

export default router;
