'use client';

// redux
import { configureStore } from '@reduxjs/toolkit';

// reducers
import backdropReducer from '@/lib/redux/features/backdrop/backdropSlice';
import mediaQueryReducer from '@/lib/redux/features/mediaQuery/mediaQuerySlice';
import mobileNavReducer from '@/lib/redux/features/mobileNav/mobileNavSlice';
import authReducer from '@/lib/redux/features/auth/authSlice';
import formReducer from '@/lib/redux/features/form/formSlice';
import dashboardMobileNavReducer from '@/lib/redux/features/dashboardMobileNav/dashboardMobileNavSlice';

export const store = configureStore({
   reducer: {
      auth: authReducer,
      backdrop: backdropReducer,
      mediaQuery: mediaQueryReducer,
      mobileNav: mobileNavReducer,
      form: formReducer,
      dashboardMobileNav: dashboardMobileNavReducer,
   },
});
