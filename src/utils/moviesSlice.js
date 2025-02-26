import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        TrailerVideo:null, //initially trailer vieo null
        PopularMovies:null,
    },
    reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies = action.payload;
            },
            addTrailerVideo :(state,action) =>{
                state.TrailerVideo = action.payload;
            },
            addPopularMovies :(state,action) =>{
                state.PopularMovies = action.payload;
            }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies} = moviesSlice.actions //dont forget to add new actions
export default moviesSlice.reducer