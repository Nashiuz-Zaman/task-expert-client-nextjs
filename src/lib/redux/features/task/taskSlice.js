'use client';

// write imports
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   totalTasks: null,
   statusSpecificTasks: null,
   pinnedTasks: [],
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
      addPinnedtask: (state, { payload }) => {
         const { _id } = payload;

               if (state.pinnedTasks.findIndex(task => task._id === _id) !== -1) {
            return;
         }

         state.pinnedTasks.push(payload);
      },
      removePinnedtask: (state, { payload }) => {
         state.pinnedTasks = state.pinnedTasks.filter(
            task => task._id !== payload
         );
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
   addPinnedtask,
   removePinnedtask,
   setStatusSpecificTasks,
   setIsLoading,
} = actions;
