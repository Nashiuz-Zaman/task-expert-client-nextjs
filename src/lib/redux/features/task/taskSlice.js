'use client';

// write imports
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   totalTasks: null,
   statusSpecificTasks: null,
   pinnedTasks: null,
   isLoading: true,
};

const taskSlice = createSlice({
   name: 'task',
   initialState,
   reducers: {
      setTotalTasks: (state, { payload }) => {
         state.totalTasks = payload;
      },
      setPinnedTasks: (state, { payload }) => {
         state.pinnedTasks = payload;
      },
      setStatusSpecificTasks: (state, { payload }) => {
         state.statusSpecificTasks = payload;
      },
      setIsLoading: (state, { payload }) => {
         state.isLoading = payload;
      },
   },
});

const { actions, reducer } = taskSlice;

export default reducer;
export const {
   setTotalTasks,
   setPinnedTasks,
   setStatusSpecificTasks,
   setIsLoading,
} = actions;
