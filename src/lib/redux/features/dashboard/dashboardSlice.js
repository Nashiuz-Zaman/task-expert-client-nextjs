'use client';

// import
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   dashboardNavOptions: null,
   dashboardMobileNavOpen: false,
};

const dashboardSlice = createSlice({
   name: 'dashboard',
   initialState,
   reducers: {
      setDashboardNavOptions: (state, { payload }) => {
         state.dashboardNavOptions = payload;
      },
      setDashboardMobileNavOpen: (state, { payload }) => {
         state.dashboardMobileNavOpen = payload;
      },
   },
});

const { reducer, actions } = dashboardSlice;
export default reducer;
export const { setDashboardMobileNavOpen, setDashboardNavOptions } = actions;
