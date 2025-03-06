import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_MOVIE } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className='absolute bg-fixed -z-10'>
        <img className='h-screen w-screen fixed object-cover s:h-screen s:object-cover s:fixed' src={BG_MOVIE} alt="img" />
        </div>
        <div className='pt-[30%] md:p-0'>
      <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
    </div>
  );
}

export default GptSearch;
