import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div>
        <div className="w-40 pr-5">
            <img src={IMG_CDN_URL + posterPath}  alt="Movie Cards" />
        </div>
    </div>
  );
}

export default MovieCard;
