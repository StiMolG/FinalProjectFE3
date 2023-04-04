import React from "react";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Routes/Home";

import Detail from "./Routes/Detail";
import Login from "./Routes/Login";
import App from "./App";
import { AppProvider } from "./context/AppContext";


const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      // {
      //   path: "/posts/:id",
      //   element: <Login />,
      // },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
