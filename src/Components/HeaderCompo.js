import React, { useEffect } from "react";
import { LOG_OUT, NETFLIX_LOG, SUPPORTED_LANGUGES } from "../utils/constants";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";

const HeaderCompo = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const navigate = useNavigate();

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
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle Search Gpt
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute flex justify-between w-screen bg-gradient-to-b from-black z-10 bg-black bg-fixed sm:bg-blue-700 md:bg-green-700 sm:flex-col md:flex-row">
      <img className="w-40 z-40 mx-auto md:mx-0" src={NETFLIX_LOG} alt="logo" />

      {user && (
        <div className="flex p-4">
          {showGptSearch && (
            <select
              className="p-2 mx-2 bg-gray-900 text-white cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUGES.map((lg) => (
                <option key={lg.identifier} value={lg.identifier}>
                  {lg.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-2 mx-3 bg-purple-600 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
           { showGptSearch? "HomePage" : "GPT SEARCH"}
          </button>
          <img className="w-10 h-10 rounded-lg" src={LOG_OUT} alt="usericon" />
          <button
            onClick={handleSignOut}
            className="w-20 mx-4 rounded-md font-bold text-white h-10 bg-orange-500"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderCompo;
