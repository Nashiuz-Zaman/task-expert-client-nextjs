'use client';

// react
import { useEffect } from 'react';

// hook
import useAxios from './useAxios';

// redux
import { useDispatch, useSelector } from 'react-redux';
import {
   setProfileData,
   setUserLoading,
} from '@/lib/redux/features/auth/authSlice';

// firebase imports
import app from '@/lib/firebase/firebase.config';
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';

// utils
import { showToast } from '@/utils/toastify';

// create auth & google provider instance
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

const useAuth = () => {
   const dispatch = useDispatch();
   const { profileData } = useSelector(store => store.auth);
   const { axiosSecure } = useAxios();

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, async curUser => {
         try {
            if (curUser) {
               // run this at website refresh
               if (!profileData && localStorage?.getItem('token')) {
                  const validationRes = await axiosSecure.get('/validate');

                  if (validationRes?.data?.status === 'success') {
                     dispatch(setProfileData(validationRes.data.user));
                  }
               }
            }
         } catch (error) {
            showToast('Network error', 'error');
         } finally {
            dispatch(setUserLoading(false));
         }
      });

      // clean up function for disconnecting the listener
      return () => {
         unSubscribe();
      };
   }, [dispatch, axiosSecure, profileData]);
};

export default useAuth;
