import { useEffect } from "react";
import { API_OPTIONS, POPULAR_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtopRatedMovies } from "../../utils/moviesSlice";

const useTopRated =  () => {
    const dispatch=useDispatch()
    const PopularMovies = useSelector(store=>store.movies.topRated)
    const getPopularMovies = async () =>{
        const data = await fetch(POPULAR_URL , API_OPTIONS)
        const json = await data.json()
        console.log("popular",json)
        dispatch(addtopRatedMovies(json.results))
    }
    useEffect(()=>{
        !PopularMovies && 
        getPopularMovies()
    },[])
       
}

export default useTopRated;
