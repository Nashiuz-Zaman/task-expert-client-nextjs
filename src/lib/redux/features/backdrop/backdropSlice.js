'use client';

// imports
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   backdropOpen: false,
};

const backdropSlice = createSlice({
   name: 'backdrop',
   initialState,
   reducers: {
      setBackdropOpen: (state, { payload }) => {
         state.backdropOpen = payload;
      },
   },
});

const { actions, reducer } = backdropSlice;

export default reducer;
export const { setBackdropOpen } = actions;
