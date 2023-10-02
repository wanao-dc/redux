import { configureStore, createSlice  } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload)
    },
    removeSong(state, action) {
      //
    }
  }
});

console.log(songsSlice, 'songsSlice');

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer
  }
});

// console.log(store, 'store');
const startingState = store.getState();

console.log(startingState, 'startingState');

store.dispatch({
  type: 'songs/addSong',
  payload: 'New song',
});

store.dispatch(
  songsSlice.actions.addSong('Billy')
)

const afterHydrateStore = store.getState();
console.log(afterHydrateStore, 'afterHydrateStore');
