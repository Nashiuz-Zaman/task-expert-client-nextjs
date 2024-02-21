'use client';

// redux
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   loginFormOpen: false,
   registrationFormOpen: false,
   taskCreateFormOpen: false,
   taskEditFormOpen: false,
};

const formSlice = createSlice({
   name: 'form',
   initialState,
   reducers: {
      setLoginFormOpen: (state, { payload }) => {
         state.loginFormOpen = payload;
      },
      setRegistrationFormOpen: (state, { payload }) => {
         state.registrationFormOpen = payload;
      },
      setTaskCreateFormOpen: (state, { payload }) => {
         state.taskCreateFormOpen = payload;
      },
      setTaskEditFormOpen: (state, { payload }) => {
         state.taskEditFormOpen = payload;
      },
   },
});

const { reducer, actions } = formSlice;
export default reducer;
export const {
   setLoginFormOpen,
   setRegistrationFormOpen,
   setTaskCreateFormOpen,
   setTaskEditFormOpen,
} = actions;
