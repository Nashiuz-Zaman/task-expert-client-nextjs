'use client';

// import
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   dashboardMobileNavOpen: false,
};

const dashboardMobileNavSlice = createSlice({
   name: 'dashboardMobileNav',
   initialState,
   reducers: {
      openNav(state) {
         state.dashboardMobileNavOpen = true;
      },
      closeNav(state) {
         state.dashboardMobileNavOpen = false;
      },
   },
});

const { reducer, actions } = dashboardMobileNavSlice;

export const { openNav, closeNav } = actions;
export default reducer;
