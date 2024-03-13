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
   deleteUser,
   updatePassword,
   sendPasswordResetEmail,
} from 'firebase/auth';

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
   const logout = useCallback(() => {
      router.push('/');
      return signOut(auth)
         .then(() => {
            return { status: 'success' };
         })
         .catch(() => console.error('Error occurred'));
   }, [router]);

   // update password
   const updateUserPassword = useCallback(password => {
      const user = auth.currentUser;

      return updatePassword(user, password)
         .then(() => {
            return { status: 'success' };
         })
         .catch(error => {
            throw new Error(error.message);
         });
   }, []);

   // password reset email
   const sendUserPasswordResetEmail = useCallback(email => {
      return sendPasswordResetEmail(auth, email)
         .then(() => {
            return { status: 'success' };
         })
         .catch(error => {
            throw new Error(error.message);
         });
   }, []);

   // delete user
   const deleteUserAccount = useCallback(() => {
      const user = auth.currentUser;

      return deleteUser(user)
         .then(() => {
            dispatch(setProfileData(null));
            dispatch(setUserShouldExist(false));
            localStorage.removeItem('token');
            return { status: 'success' };
         })
         .catch(error => {
            throw new Error(error.message);
         });
   }, [dispatch]);

   return {
      loginEmail,
      loginGoogle,
      logout,
      signup,
      updateFirebaseProfile,
      deleteUserAccount,
      updateUserPassword,
      sendUserPasswordResetEmail,
   };
};

export default useFirebaseMethods;
