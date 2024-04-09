import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const route = createBrowserRouter([
    {
      path: ,
      element: <RootLayout />
    }
  ])
  return <RouterProvider router={route}></RouterProvider>
};

export default App;
