import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./util/Root";
import Home from "./pages/Home";
import BookNow from "./pages/BookNow";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Offers from "./pages/Offers";
import Service from "./pages/Service";

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
                {
                    path: "Booking",
                    element: <BookNow />,
                },
                {
                    path: "About",
                    element: <About />,
                },
                {
                    path: "Careers",
                    element: <Careers />,
                },
                {
                    path: "Offers",
                    element: <Offers />,
                },
                {
                    path: "Services",
                    element: <Service />,
                },
            ],
        },
    ]);
    return <RouterProvider router={route}></RouterProvider>;
};

export default App;
