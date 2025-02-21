import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import MoviesReducer from "./moviesSlice"

const appStore= configureStore({
    reducer:{
        user:userReducer,
        movies:MoviesReducer,
    }
})

export default appStore