import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div>
        <div className="w-40 pr-5">
            <img className='transform transition-transform duration-300 hover:-scale-x-90' src={IMG_CDN_URL + posterPath}  alt="Movie Cards" />
        </div>
    </div>
  );
}

export default MovieCard;
