'use client';

// import
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   dashboardMobileNavOpen: false,
   dashboardRoute: null,
};

const dashboardSlice = createSlice({
   name: 'dashboard',
   initialState,
   reducers: {
      setDashboardRoute: (state, { payload }) => {
         const route = `/${payload.name.toLowerCase().split(' ').join('-')}`;
         state.dashboardRoute = route;
      },
      setDashboardMobileNavOpen: (state, { payload }) => {
         state.dashboardMobileNavOpen = payload;
      },
   },
});

const { reducer, actions } = dashboardSlice;
export default reducer;
export const {
   setDashboardMobileNavOpen,
   setDashboardRoute,
   setDashboardNavOptions,
} = actions;
