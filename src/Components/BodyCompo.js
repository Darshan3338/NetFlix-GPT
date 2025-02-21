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
      path: "/browse",
      element: <BrowseCompo />,
    },
  ]);

  //i need to render once so we are using useEffect
 
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default BodyCompo;
