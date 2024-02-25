'use client';

// next
import { useRouter } from 'next/navigation';

// custom hook
import useFirebaseMethods from '@/hooks/useFirebaseMethods';
import useAxios from '@/hooks/useAxios';
import useToast from '@/hooks/useToast';
import useFormVisiblity from './useFormVisiblity';

// redux
import { useDispatch } from 'react-redux';
import {
   setAppLoading,
   setUserShouldExist,
   setProfileData,
   setLoginErrors,
} from '@/lib/redux/features/auth/authSlice';

const useLoginForm = () => {
   const dispatch = useDispatch();
   const { loginEmail, loginGoogle } = useFirebaseMethods();
   const { showToast } = useToast();
   const { axiosPublic } = useAxios();
   const { closeLoginFormWithBackdrop, closeSignupFormWithBackdrop } =
      useFormVisiblity();
   const router = useRouter();

   const validateInputs = inputs => {
      const { email, password } = inputs;
      const emailRegex = /[a-z0-9._]+@[a-z0-9]+.[a-z]+/g;

      const foundErrors = [];

      if (email === '') {
         foundErrors.push('Must provide an email address');
      } else if (!emailRegex.test(email)) {
         foundErrors.push('Must provide a valid email address');
      }

      if (password === '') {
         foundErrors.push('Must provide a password');
      }

      return foundErrors;
   };

   // handle google sign in
   const handleLoginGoogle = async () => {
      const result = await loginGoogle();

      // if google login is succesful send the google user object to the database to check role and existence and also to make a jwt token
      if (result.user) {
         const googleUser = {
            name: result.user.displayName,
            email: result.user.email,
            image: result.user.photoURL,
         };

         // check with database if the google user already exists
         const googleLoginResponse = await axiosPublic.post(
            '/google-login',
            googleUser
         );

         if (googleLoginResponse.data.success) {
            const profileData = googleLoginResponse.data.user;
            // set profile data, user should exist and the jwt token
            dispatch(setProfileData(profileData));
            dispatch(setUserShouldExist(true));
            localStorage.setItem(
               'tokenExists',
               googleLoginResponse.data.tokenExists
            );

            closeLoginFormWithBackdrop();
            closeSignupFormWithBackdrop();

            router.push('/');

            showToast('Logged In Successfully', 'success');
            dispatch(setAppLoading(false));
         }
      }
   };

   // handle normal login
   const handleLoginEmail = async e => {
      e.preventDefault();
      // reset errors
      dispatch(setLoginErrors([]));

      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      const dataObject = {
         email,
         password,
      };

      const foundErrors = validateInputs(dataObject);

      // if there are erros return from here
      if (foundErrors.length > 0) {
         dispatch(setLoginErrors(foundErrors));
         return;
      }

      try {
         // firebase login api call
         const result = await loginEmail(dataObject.email, dataObject.password);

         //  if firebase login is successful, check database for profile data
         if (result.user) {
            const loginResponse = await axiosPublic.post('/login', {
               email: result.user.email,
            });

            if (loginResponse.data.success) {
               const profileData = loginResponse.data.user;
               dispatch(setProfileData(profileData));
               dispatch(setUserShouldExist(true));
               // set profile and the jwt token in the localstorage
               localStorage.setItem(
                  'tokenExists',
                  loginResponse.data.tokenExists
               );

               closeLoginFormWithBackdrop();

               router.push('/');

               showToast('Logged In Successfully', 'success');
               dispatch(setAppLoading(false));
            }
         }
      } catch (error) {
         dispatch(setLoginErrors(["Email/Password doesn't match. Try again."]));
         dispatch(setAppLoading(false));
      }
   };

   return {
      handleLoginEmail,
      handleLoginGoogle,
   };
};

export default useLoginForm;
