import React, { useEffect } from "react";
import BrowseCompo from "./BrowseCompo";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderCompo from "./HeaderCompo";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const BodyCompo = () => {
  const dispatch = useDispatch();

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
  useEffect(() => {
    //Sign In
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default BodyCompo;
