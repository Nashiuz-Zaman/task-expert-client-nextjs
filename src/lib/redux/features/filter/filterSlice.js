'use client';

// redux
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   taskFilterParams: [0, 1, 2],
};

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setTaskFilterParams: (state, { payload }) => {
         state.taskFilterParams = payload;
      },
   },
});

const { reducer, actions } = filterSlice;
export default reducer;
export const { setTaskFilterParams } = actions;
