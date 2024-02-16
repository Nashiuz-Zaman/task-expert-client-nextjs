'use client';

//redux
import { createSlice } from '@reduxjs/toolkit';

//media queries
const mobile = '(max-width: 480px)';
export const mobileQuery =
  typeof window === 'object' && window.matchMedia(mobile);

const smallTablet = '(min-width: 481px) and (max-width: 767px)';
export const smallTabletQuery =
  typeof window === 'object' && window.matchMedia(smallTablet);

const largeTablet = '(min-width: 768px) and (max-width: 1023px)';
export const largeTabletQuery =
  typeof window === 'object' && window.matchMedia(largeTablet);

const computer = '(min-width: 1024px)';
export const computerQuery =
  typeof window === 'object' && window.matchMedia(computer);

const initialState = {
  isMobile: mobileQuery.matches,
  isSmallTablet: smallTabletQuery.matches,
  isLargeTablet: largeTabletQuery.matches,
  isComputer: computerQuery.matches,
  isLargeScreen: computerQuery.matches || largeTabletQuery.matches,
  isSmallScreen: mobileQuery.matches || smallTabletQuery.matches,
};

const mediaQuerySlice = createSlice({
  name: 'mediaQuery',
  initialState,
  reducers: {
    mobileMatched: state => {
      state.isMobile = true;
      state.isSmallTablet = false;
      state.isLargeTablet = false;
      state.isComputer = false;
      state.isLargeScreen = false;
      state.isSmallScreen = true;
    },
    smallTabletMatched: state => {
      state.isMobile = false;
      state.isSmallTablet = true;
      state.isLargeTablet = false;
      state.isComputer = false;
      state.isLargeScreen = false;
      state.isSmallScreen = true;
    },
    largeTabletMatched: state => {
      state.isMobile = false;
      state.isSmallTablet = false;
      state.isLargeTablet = true;
      state.isComputer = false;
      state.isLargeScreen = true;
      state.isSmallScreen = false;
    },
    computerMatched: state => {
      state.isMobile = false;
      state.isSmallTablet = false;
      state.isLargeTablet = false;
      state.isComputer = true;
      state.isLargeScreen = true;
      state.isSmallScreen = false;
    },
  },
});

const { reducer, actions } = mediaQuerySlice;

export default reducer;
export const {
  mobileMatched,
  smallTabletMatched,
  largeTabletMatched,
  computerMatched,
} = actions;
