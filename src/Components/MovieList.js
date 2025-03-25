import React from 'react';
import MovieCard from './MovieCard';
const MovieList = ({title,movies}) => {
    // console.log("movies",movies)
    if(!movies) return
  return (
    <div>
        <div className='px-6 text-white'>
            <h1 className='font-bold text-3xl py-4'>{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-hide' style={{scrollbarWidth: "none",msOverflowStyle: "none",}}>      
                {movies.map((poster)=><MovieCard key={poster.id} posterPath={poster.poster_path}/>)}
            </div>
        </div>
       
    </div>
  );
}

export default MovieList;
