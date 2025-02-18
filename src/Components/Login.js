import HeaderCompo from "./HeaderCompo";
import { BG_MOVIE } from "../utils/constants";
import { useState } from "react";

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };
  return (
    <div>
      <HeaderCompo />
      <div className="absolute">
        <img src={BG_MOVIE} alt="movies-background" />
      </div>
      <form className="w-4/12 p-20 bg-black bg-opacity-85 absolute my-40 mx-auto right-0 left-0 text-white rounded-xl">
        <h1 className="font-bold text-4xl mb-7 ">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-800 rounded-lg"
        />
      
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-lg"
        />
        <button className="bg-red-600 p-4 my-3 w-full rounded-lg">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-blue-400 cursor-pointer" onClick={toggleSignInForm}>
          {IsSignInForm ? (
            <p>
              {" "}
              New to Netflix ? <span className="font-bold">
                {" "}
                Sign up now.
              </span>{" "}
            </p>
          ) : (
            <p>
              {" "}
              Already Registered? <span className="font-bold">
                {" "}
                Sign In{" "}
              </span>{" "}
            </p>
          )}
        </p>
      </form>
    </div>
  );
};
export default Login;
