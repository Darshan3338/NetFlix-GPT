import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';


const MainContainer = () => {
    const movies= useSelector(store=>store.movies?.nowPlayingMovies)
        if(!movies) return //or if(movies===null) return
    const mainMovie = movies[0] //20movies contains in movies we need only one so [0]
    // console.log("MainMovie",mainMovie)

const {original_title,overview,id} = mainMovie

    return (
    <div className=' s:mt-[50%] md:mt-0 bg-black'>
      <VideoBackground movie_id={id}/>
      <VideoTitle title={original_title} overview={overview}/>
    </div>
  );
}

export default MainContainer;
