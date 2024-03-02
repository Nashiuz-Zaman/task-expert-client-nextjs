'use client';

// import
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   prioritySortParam: 0,
   latestSortParam: 1,
};

const sortSlice = createSlice({
   name: 'sort',
   initialState,
   reducers: {
      setPrioritySortParam: (state, { payload }) => {
         state.prioritySortParam = payload;
      },
      setLatestSortParam: (state, { payload }) => {
         state.latestSortParam = payload;
      },
   },
});

const { reducer, actions } = sortSlice;
export default reducer;
export const { setPrioritySortParam, setLatestSortParam } = actions;
