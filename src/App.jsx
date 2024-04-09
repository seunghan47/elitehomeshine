import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
};

export default App;
