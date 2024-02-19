'use client';

// next js
import { useRouter } from 'next/navigation';

// hooks
import useToast from '@/hooks/useToast';

// redux
import { useDispatch } from 'react-redux';
import {
   setUserShouldExist,
   setProfileData,
   setAppLoading,
} from '@/lib/redux/features/auth/authSlice';
import { setDashboardNavOptions } from '@/lib/redux/features/dashboard/dashboardSlice';

// firebase
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
   signInWithPopup,
} from 'firebase/auth';

// auth and google auth provider
import { auth, googleAuthProvider } from '@/hooks/useAuth';

const useFirebaseMethods = () => {
   const dispatch = useDispatch();
   const router = useRouter();
   const { showToast } = useToast();

   // login with google
   const loginGoogle = () => {
      dispatch(setAppLoading(true));
      return signInWithPopup(auth, googleAuthProvider);
   };

   // signup with email and password
   const signup = (email, password) => {
      dispatch(setAppLoading(true));
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // login with email and password
   const loginEmail = (email, password) => {
      dispatch(setAppLoading(true));
      return signInWithEmailAndPassword(auth, email, password);
   };

   // update firebase profile function
   const updateFirebaseProfile = (username, photo) => {
      return updateProfile(auth.currentUser, {
         displayName: username,
         photoURL: photo,
      });
   };

   // logout function
   const logout = () => {
      dispatch(setAppLoading(true));
      signOut(auth)
         .then(() => {
            dispatch(setProfileData(null));
            dispatch(setDashboardNavOptions(null));
            dispatch(setUserShouldExist(false));
            localStorage.removeItem('tokenExists');
            dispatch(setAppLoading(false));
            showToast('Logged Out Successfully', 'success');
         })
         .catch(error => console.error(error));
      router.push('/');
   };

   return {
      loginEmail,
      loginGoogle,
      logout,
      signup,
      updateFirebaseProfile,
   };
};

export default useFirebaseMethods;
