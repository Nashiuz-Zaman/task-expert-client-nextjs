'use client';

// react
import { useEffect } from 'react';

// hook
import useFirebaseMethods from './useFirebaseMethods';
import useAxios from './useAxios';

// redux
import { useDispatch, useSelector } from 'react-redux';
import {
   setUserShouldExist,
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
   const { userShouldExist, profileData } = useSelector(store => store.auth);
   const { logout } = useFirebaseMethods();
   const { axiosSecure } = useAxios();
 
   // if true, then user should exist
   useEffect(() => {
      if (localStorage.getItem('token')) {
         dispatch(setUserShouldExist(true));
      }    
   }, [dispatch]);

   // set up observer for users, if there an user, update the user state and set loading to false, if there is none set user to null and set loading to false
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, async curUser => {
         try {
            if (curUser) {
               // this code should only run when the website is refreshed and at the start

               if (!profileData && userShouldExist) {
                  // check which firebase user is logged in, send the email to database and bring their profile data
                  const validationRes = await axiosSecure.get('/validate');
                  dispatch(setProfileData(validationRes.data.user));
                  dispatch(setUserLoading(false));
               }
            }
         } catch (error) {
            logout(false);
            showToast('Network error', 'error');
         } finally {
            dispatch(setUserLoading(false));
         }
      });

      // clean up function for disconnecting the listener/observer
      return () => {
         unSubscribe();
      };
   }, [
      dispatch,
      userShouldExist,
      axiosSecure,
      profileData,      
      logout,
   ]);
};

export default useAuth;
