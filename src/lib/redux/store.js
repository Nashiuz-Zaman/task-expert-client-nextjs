'use client';

// redux
import { configureStore } from '@reduxjs/toolkit';

// reducers
import backdropReducer from '@/lib/redux/features/backdrop/backdropSlice';
import mediaQueryReducer from '@/lib/redux/features/mediaQuery/mediaQuerySlice';

export const store = configureStore({
  reducer: {
    backdrop: backdropReducer,
    mediaQuery: mediaQueryReducer,
  },
});
