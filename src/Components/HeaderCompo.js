import React, { useEffect } from "react";
import { LOG_OUT, NETFLIX_LOG } from "../utils/constants";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const HeaderCompo = () => {
  const dispatch = useDispatch()
const user = useSelector(store=>store.user)
const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/")
      
      })
      .catch((error) => {
        // An error happened.
        // navigate("/error")
      });
  };

  useEffect(() => {
    //Sign In
   const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    //Unsubscribe when component unmount
    return()=> unsubscribe()
  }, []);

  return (
    <div className="absolute flex justify-between w-screen px-8 py-5 bg-gradient-to-b from-black z-10">
      <img className="w-40 z-40" src={NETFLIX_LOG} alt="logo" />

     {user && <div className="flex p-4">
        <img className="w-10 h-10 rounded-lg" src={LOG_OUT} alt="usericon" />
        <button
          onClick={handleSignOut}
          className="w-20 mx-4 rounded-md font-bold text-white h-10 bg-orange-500"
        >
          Sign Out
        </button>
      </div>
      }
    </div>
  );
};

export default HeaderCompo;
