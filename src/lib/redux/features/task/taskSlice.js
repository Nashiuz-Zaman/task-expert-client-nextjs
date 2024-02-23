'use client';

// write imports
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   totalTasks: null,
   statusSpecificTasks: null,
   taskToEdit: null,
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
      setTaskToEdit: (state, { payload }) => {
         state.taskToEdit = payload;
      },
      setPinnedTasks: (state, { payload }) => {
         state.pinnedTasks = payload;
      },
      pinTask: (state, { payload }) => {
         const { _id } = payload;

         if (state.pinnedTasks.findIndex(task => task._id === _id) !== -1) {
            return;
         }

         state.pinnedTasks.push(payload);
      },
      unpinTask: (state, { payload }) => {
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
   pinTask,
   unpinTask,
   setStatusSpecificTasks,
   setIsLoading,
   setTaskToEdit,
} = actions;
