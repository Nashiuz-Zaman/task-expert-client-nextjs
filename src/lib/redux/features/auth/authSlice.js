'use client';

// import
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userShouldExist: false,
  userAlreadyRegistered: false,
  profileData: null,
  appLoading: true,
  loginErrors: [],
  registrationErrors: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserShouldExist: (state, { payload }) => {
      state.userShouldExist = payload;
    },
    setUserAlreadyRegistered: (state, { payload }) => {
      state.userAlreadyRegistered = payload;
    },
    setProfileData: (state, { payload }) => {
      state.profileData = payload;
    },
    setAppLoading: (state, { payload }) => {
      state.appLoading = payload;
    },
    setLoginErrors: (state, { payload }) => {
      state.loginErrors = payload;
    },
    setRegistrationErrors: (state, { payload }) => {
      state.registrationErrors = payload;
    },
  },
});

const { reducer, actions } = authSlice;
export default reducer;
export const {
  setUserShouldExist,
  setUserAlreadyRegistered,
  setProfileData,
  setAppLoading,
  setLoginErrors,
  setRegistrationErrors,
} = actions;
