'use client';

// import
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   searchTerm: '',
};

const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {
      setSearchTerm: (state, { payload }) => {
         state.searchTerm = payload;
      },
   },
});

const { reducer, actions } = searchSlice;
export default reducer;
export const { setSearchTerm } = actions;
