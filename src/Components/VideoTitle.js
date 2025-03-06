import React from 'react';

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] md:px-20 absolute px:10 text-white top-1 bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:block text-lg py-6 w-1/2 text-justify'>{overview}</p>
        <div className='flex'>
            <button className='bg-white w-40 text-black px:3 py:2 h-16 md:px-5 md:py-5 text-2xl cursor-pointer rounded-lg hover:bg-opacity-80'> ▶ Play</button>
            <button className='hidden md:block bg-gray-400 w-30 text-white px-5 py-4 mx-2 text-2xl cursor-pointer rounded-lg bg-opacity-50 hover:bg-opacity-40'> ℹ More Info</button>
          
        </div>
    </div>
  );
}

export default VideoTitle;
