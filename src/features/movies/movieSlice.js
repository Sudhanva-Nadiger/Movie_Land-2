import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import movieApi from '../../common/api/movieApi'
import { APIKey} from "../../common/api/movieApiKey"


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    if(term === ""){
        term = "Harry"
    }
    const response = await movieApi.get(`${APIKey}&s=${term}`)
    return response.data.Search
})

export const fetchAsyncMovieDetail = createAsyncThunk('movies/fetchAsyncMovieDetail', async (id) => {
    const response = await movieApi.get(`${APIKey}&i=${id}&Plot=full`)
    return response.data
})

const initialState = {
    movies: [],
    selectedMovieDetail:{}
}

export const movieSlice = createSlice({
    name : 'movies',
    initialState,
    reducers:{
        addMovies: (state, action) => {
            console.log(action.payload);
            state.movies = (action.payload)
        },
        removeSelectedMovie: (state)=>{
            state.selectedMovieDetail = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending] : () =>{
            
        },
        [fetchAsyncMovies.fulfilled]: (state, action)=>{
            state.movies = action.payload
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("rejected");
        },
        [fetchAsyncMovieDetail.fulfilled]:(state,action)=>{
            state.selectedMovieDetail = action.payload
        }
    }
})

export const { addMovies, removeSelectedMovie } = movieSlice.actions

export const selectAllMovies = (state) => state.movies.movies

export const selectSelectedMovie = (state) => state.movies.selectedMovieDetail

export default movieSlice.reducer

// extra reducer comes into picture when u hvae diffrent reaction for thesame action at diffrent cases .addcase method is used which acts as switch case