import HeaderCompo from "./HeaderCompo";
import { BG_MOVIE, LOG_OUT } from "../utils/constants";
import { useRef, useState } from "react";
import { checkValidationData } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(false);
  const Dispatch = useDispatch();

 
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //validate the formdata
    // console.log(email.current.value)
    // console.log(password.current.value)
    // console.log(name.current.value)

    const check = checkValidationData(
      email.current.value,
      password.current.value
      // name.current.value
    );
    seterrorMessage(check);
    if (check) return; //if(check !==null) return error msg

    //Sign In / Sign Up
    if (!IsSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
                    LOG_OUT,   
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              Dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrorMessage(error.message);
            });
           
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };

  return (
    <div>
      <HeaderCompo />
      <div className="absolute">
        <img src={BG_MOVIE} alt="movies-background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 p-20 bg-black bg-opacity-85 absolute my-40 mx-auto right-0 left-0 text-white rounded-xl"
      >
        <h1 className="font-bold text-4xl mb-7 ">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-800 rounded-lg"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-lg"
        />
        <p className="text-red-500 font-bold py-4">{errorMessage}</p>
        <button
          className="bg-red-600 p-4 my-3 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-blue-400 cursor-pointer" onClick={toggleSignInForm}>
          {IsSignInForm
            ? "New to Netflix ? Sign up now."
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
