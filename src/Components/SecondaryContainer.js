import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  // console.log("MoviesList",movies)
  return  (
    //if movies avail then only render
    movies.nowPlayingMovies &&(
    <div className='bg-black'>
      <div className='-mt-40 relative z-10 pl-12'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.PopularMovies}/>
        <MovieList title={"Upcomming Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
    )
  );
}

export default SecondaryContainer;
