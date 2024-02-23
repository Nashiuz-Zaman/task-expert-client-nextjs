'use client';

// react
import { useCallback } from 'react';

// redux
import { useDispatch } from 'react-redux';
import {
   setLoginFormOpen,
   setRegistrationFormOpen,
   setTaskCreateFormOpen,
   setTaskEditFormOpen,
} from '@/lib/redux/features/form/formSlice';

import { setBackdropOpen } from '@/lib/redux/features/backdrop/backdropSlice';

const useFormVisiblity = () => {
   const dispatch = useDispatch();

   const openLoginFormWithBackdrop = useCallback(
      (withBackdrop = true) => {
         dispatch(setLoginFormOpen(true));

         if (withBackdrop) {
            dispatch(setBackdropOpen(true));
         }
      },
      [dispatch]
   );

   const closeLoginFormWithBackdrop = useCallback(
      (withBackdrop = true) => {
         dispatch(setLoginFormOpen(false));

         if (withBackdrop) {
            dispatch(setBackdropOpen(false));
         }
      },
      [dispatch]
   );

   const openSignupFormWithBackdrop = useCallback(
      (withBackdrop = true) => {
         dispatch(setRegistrationFormOpen(true));

         if (withBackdrop) {
            dispatch(setBackdropOpen(true));
         }
      },
      [dispatch]
   );

   const closeSignupFormWithBackdrop = useCallback(
      (withBackdrop = true) => {
         dispatch(setRegistrationFormOpen(false));

         if (withBackdrop) {
            dispatch(setBackdropOpen(false));
         }
      },
      [dispatch]
   );

   const openTaskCreateForm = useCallback(() => {
      dispatch(setTaskCreateFormOpen(true));
   }, [dispatch]);

   const closeTaskCreateForm = useCallback(() => {
      dispatch(setTaskCreateFormOpen(false));
   }, [dispatch]);

   const openTaskEditForm = useCallback(() => {
      dispatch(setTaskEditFormOpen(true));
      dispatch(setBackdropOpen(true));
   }, [dispatch]);

   const closeTaskEditForm = useCallback(() => {
      dispatch(setTaskEditFormOpen(false));
      dispatch(setBackdropOpen(false));
   }, [dispatch]);

   return {
      openLoginFormWithBackdrop,
      openSignupFormWithBackdrop,
      closeLoginFormWithBackdrop,
      closeSignupFormWithBackdrop,
      openTaskCreateForm,
      closeTaskCreateForm,
      openTaskEditForm,
      closeTaskEditForm,
   };
};

export default useFormVisiblity;
