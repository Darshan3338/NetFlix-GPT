import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
            popularMovies:null,
            upcommingMovies:null,
            topRated:null,
            trailerVideo:null,
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
            },
            addupcommingMovies:(state,action)=>{
                state.upcommingMovies = action.payload
            },
            addtopRatedMovies:(state,action)=>{
                state.topRated= action.payload
            }

    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addtopRatedMovies,addupcommingMovies} = moviesSlice.actions //dont forget to add new actions
export default moviesSlice.reducer