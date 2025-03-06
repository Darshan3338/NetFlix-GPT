
export const NETFLIX_LOG = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const BG_MOVIE = "https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
export const LOG_OUT = "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
export const INFO_LOGO = "https://cdn-icons-png.flaticon.com/128/9195/9195785.png"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjYzOTgzZmIxNTBhYzU3MzEyYTU2ODU1MWEyZjI0MiIsIm5iZiI6MTc0MDA0MDIxMy42MDcsInN1YiI6IjY3YjZlODE1MTFmZjAzNDA5ZWMzZWE3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-BQ1q_cnjhguUqePKfQ3lydFNk7tNrjpBgVC7VyRfjw'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

    export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500/"
    export const POPULAR_URL="https://api.themoviedb.org/3/movie/popular?page=1"
    export const SUPPORTED_LANGUGES = [{identifier:"en", name:"English"},
      {identifier:"spanish", name:"Spanish"},
      {identifier:"kannada", name:"Kannada"},
      {identifier:"hindi", name:"Hindi"},

    ]
