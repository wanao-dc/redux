import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, removeSong, addSong } from './slices/songsSlice';
import { moviesReducer, removeMovie, addMovie } from './slices/moviesSlice';
import { reset } from './actions';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  }
});

export { store };
export { addSong, removeSong, addMovie, removeMovie, reset };

