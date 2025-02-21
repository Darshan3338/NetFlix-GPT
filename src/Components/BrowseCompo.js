import React from 'react';
import HeaderCompo from './HeaderCompo';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const BrowseCompo = () => {
  useNowPlayingMovies()

  return (
    <div>
      <HeaderCompo/>   
      <MainContainer/>
      <SecondaryContainer/>
      </div>
  );
}

export default BrowseCompo;
