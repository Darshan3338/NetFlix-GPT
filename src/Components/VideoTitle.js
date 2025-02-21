import React from 'react';

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] px-20 absolute text-white top-1 bg-gradient-to-r from-black'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='text-lg py-6 w-1/2 text-justify'>{overview}</p>
        <div>
            <button className='bg-white w-40 text-black px-5 py-4 text-2xl cursor-pointer rounded-lg hover:bg-opacity-80'> ▶ Play</button>
            <button className='bg-gray-400 w-30 text-white px-5 py-4 mx-2 text-2xl cursor-pointer rounded-lg bg-opacity-50 hover:bg-opacity-40'> ℹ More Info</button>
          
        </div>
    </div>
  );
}

export default VideoTitle;
