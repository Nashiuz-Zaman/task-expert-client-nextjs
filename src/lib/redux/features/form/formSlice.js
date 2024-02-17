'use client';

// redux
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginFormOpen: false,
  registrationFormOpen: false,
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
  },
});

const { reducer, actions } = formSlice;
export default reducer;
export const { setLoginFormOpen, setRegistrationFormOpen } = actions;
