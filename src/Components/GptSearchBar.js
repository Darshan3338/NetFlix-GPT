import React, { useRef, useState } from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constants';
// import client from '../utils/openAi';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef(null)
    const [filteredMovies,setFilteredMovies] = useState([])
    console.log(searchText)

        
      const movies = useSelector(store=>store.movies?.PopularMovies || [])
      console.log("popular movies",movies)
      console.log("orginal title",movies.original_title)
   
    
    const handleGptSearchClick =  () =>{
      const query = searchText.current?.value.toLowerCase()
      if(!query) {
        setFilteredMovies([])
        return
      }

      const filteredMovies  = movies.filter((m)=>
       m?.original_title?.toLowerCase().includes(query)
    )
    console.log("filtered movies",filteredMovies )
    setFilteredMovies(filteredMovies )

    }
   
  return (
    <div>
    <div className='pt-[30%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-6/12 bg-black grid grid-cols-10' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText}
            type='text' className='p-4 m-4 col-span-8' 
            placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className='py-2 m-4 px-4 bg-red-700 col-span-2'
            onClick={handleGptSearchClick}
            >
                {lang[langKey].search}
                </button>              
        </form>
         </div>
     
        
          {
           filteredMovies.length>0 ? (
            searchText !==null &&
              
            <div className='flex sm:flex-col s:p-200 my-10 mx-20 p-20 bg-gray-800 bg-opacity-90 justify-center'>
             {
             filteredMovies.map((m)=><div key={m.id} 
             className='w-40 p-2'>
              <img className="" src={IMG_CDN_URL + m.poster_path} alt="poater" />
              
              </div>)
             }
          </div>
     
         ) :<p>Search correct movie....</p> }
        
     </div>
  );
}

export default GptSearchBar;
