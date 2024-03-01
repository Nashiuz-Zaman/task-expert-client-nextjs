'use client';

// react
import { useCallback } from 'react';

// next js
import { useRouter } from 'next/navigation';

// redux
import { useDispatch } from 'react-redux';
import {
   setUserShouldExist,
   setProfileData,
} from '@/lib/redux/features/auth/authSlice';

// firebase
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
   signInWithPopup,
} from 'firebase/auth';

// utils
import { showToast } from '@/utils/toastify';

// auth and google auth provider
import { auth, googleAuthProvider } from '@/hooks/useAuth';

const useFirebaseMethods = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   // login with google
   const loginGoogle = () => {
      return signInWithPopup(auth, googleAuthProvider);
   };

   // signup with email and password
   const signup = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // login with email and password
   const loginEmail = (email, password) => {
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
   const logout = useCallback(
      (manual = true) => {
         signOut(auth)
            .then(() => {
               dispatch(setProfileData(null));
               dispatch(setUserShouldExist(false));
               localStorage.removeItem('tokenExists');

               if (manual) {
                  showToast('Signed Out Successfully', 'success');
               }

               if (!manual) {
                  showToast(
                     'You Were Signed Out, Please Sign In Again',
                     'error'
                  );
               }
            })
            .catch(() => console.error('Error occurred'));
         router.push('/');
      },
      [dispatch, router]
   );

   return {
      loginEmail,
      loginGoogle,
      logout,
      signup,
      updateFirebaseProfile,
   };
};

export default useFirebaseMethods;
