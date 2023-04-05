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

import Dentist from "./Routes/Dentist";
import Login from "./Routes/Login";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import { Contact } from "./Routes/Contact";


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
        path: "contact",
        element: <Contact />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "dentist",
        element: <Dentist />,
      },
      {
        path: "dentist/:id",
        element: <Dentist />,
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
