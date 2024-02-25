'use client';

// import
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   dashboardMobileNavOpen: false,
};

const dashboardSlice = createSlice({
   name: 'dashboard',
   initialState,
   reducers: {
      setDashboardMobileNavOpen: (state, { payload }) => {
         state.dashboardMobileNavOpen = payload;
      },
   },
});

const { reducer, actions } = dashboardSlice;
export default reducer;
export const { setDashboardMobileNavOpen } = actions;
