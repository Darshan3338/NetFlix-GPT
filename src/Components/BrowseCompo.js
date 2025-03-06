import React from "react";
import HeaderCompo from "./HeaderCompo";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./hooks/useTopRated";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useUpcomming from "./hooks/useUpcomming";
import useTopRated from "./hooks/useTopRated";

const BrowseCompo = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomming();
  useTopRated();

  return (
    <div>
      <HeaderCompo />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default BrowseCompo;
