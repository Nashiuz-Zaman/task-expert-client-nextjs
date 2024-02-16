'use client';

// imports
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const backdropSlice = createSlice({
  name: 'backdrop',
  initialState,
  reducers: {
    setOpen: (state, { payload }) => {
      state.open = payload;
    },
  },
});

const { actions, reducer } = backdropSlice;

export default reducer;
export const { setOpen } = actions;
