import { createSlice} from '@reduxjs/toolkit';
import { reset } from '../index';

 const songsSlice = createSlice({
    name : 'songs',
    initialState:[],
    reducers : {
        addSong(state,action){
           state.push(action.payload);
        },

        removeSong(state,action){
           const index = state.indexOf(action.payload);
           state.splice(index,1);
        },
    },
    extraReducers(builder){ 
        builder.addCase(reset,(state,action) =>
        {
         return [];
        } )
    },    
})

export const {addSong, removeSong}=songsSlice.actions;
export const songsReducer = songsSlice.reducer;

