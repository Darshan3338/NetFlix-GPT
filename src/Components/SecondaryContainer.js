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
      <div className='s:mt-0 md:-mt-40 relative z-10 pl-4 md:pl-12'>
       
              <MovieList title={"Trending"} movies={movies.topRated}/>
              <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
              <MovieList title={"Upcomming"} movies={movies.upcommingMovies}/>
              <MovieList title={"Popular"} movies={movies.popularMovies}/>
        
    </div>
    </div>
    )
  );
}

export default SecondaryContainer;
