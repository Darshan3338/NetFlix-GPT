import React from "react";
import { NETFLIX_LOG } from "../utils/constants";
const HeaderCompo = () => {
  return (
    <div className="absolute px-8 py-5 bg-gradient-to-b from-black z-10">
      
      <img className="w-40 z-40" src={NETFLIX_LOG} alt="logo" />
    </div>
  );
};

export default HeaderCompo;
