import { configureStore, createSlice  } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload)
    },
    removeSong(state, action) {
      // action.payload doit être égal à l'enregistrement à supprimer uhe chane de caractère
      const index = state.indexOf(action.payload);
      // Supprimer l'index correspondant dans le state
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase("movies/reset", (state, action) => {
      return [];
    });
  }
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    reset(state, action) {
      console.log('in');
      return [];
    }
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  }
});

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie, reset } = moviesSlice.actions;
