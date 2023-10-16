import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

/**
 * The root element of the public route.
 */
import AuthLayout from "../views/auth";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

/**
 * The root element of the private route.
 */
import AppLayout from "../views/app";
import Dashboard from "../views/app/Dashboard";
import EditDashboard from "../views/app/EditDashboard";

import NotFound from "../views/misc/NotFound";

/**
 * An array of private routes that require authentication to access.
 * @type {Array}
 */
const privateRoutes = [
  {
    /**
     * The root element of the private route.
     * @type {React.Component}
     */
    element: <AppLayout />,
    children: [
      {
        /**
         * The path of the private route.
         * @type {string}
         */
        path: "/dashboard",
        /**
         * The child element of the private route.
         * @type {React.Component}
         */
        element: <Dashboard />,
      },
      {
        path: "/dashboard/:id",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/:id/edit",
        element: <EditDashboard />,
      },
    ],
  },
];

/**
 * An array of public routes that is easy to access.
 * @type {Array}
 */
const publicRoutes = [
  {
    /**
     * The root element of the public route.
     * @type {React.Component}
     */
    element: <AuthLayout />,
    children: [
      {
        /**
         * The path of the public route.
         * @type {string}
         */
        path: "/",
        /**
         * The child element of the public route.
         * @type {React.Component}
         */
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);

export default router;
