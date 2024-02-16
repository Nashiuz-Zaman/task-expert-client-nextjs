'use client';

// import
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileNavOpen: false,
};

const mobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState,
  reducers: {
    openNav(state) {
      state.mobileNavOpen = true;
    },
    closeNav(state) {
      state.mobileNavOpen = false;
    },
  },
});

const { reducer, actions } = mobileNavSlice;

export const { openNav, closeNav } = actions;
export default reducer;
