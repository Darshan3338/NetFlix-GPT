import { useEffect } from 'react';
import { addTrailerVideo } from '../../utils/moviesSlice';
import { API_OPTIONS } from '../../utils/constants';
import { useDispatch } from 'react-redux';

const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch()
    // fetch Trailer Video && updating the store with trailer video data
  
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+ movie_id +"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
    //   console.log(json.results);
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0]; // bcz if Movie not having any trailer then take any of from first having 2 trailer so filterData[0]
    //   console.log("trailer", trailer);
      dispatch(addTrailerVideo(trailer))
    };
  
    useEffect(() => {
      getMovieVideos();
    }, []);
}

export default useMovieTrailer;
