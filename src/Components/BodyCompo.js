import React from "react";
import BrowseCompo from "./BrowseCompo";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderCompo from "./HeaderCompo";

const BodyCompo = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Body",
      element: <BodyCompo />,
    },
    {
      path: "/Header",
      element: <HeaderCompo />,
    },
    {
      path: "/Browse",
      element: <BrowseCompo />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default  BodyCompo;
