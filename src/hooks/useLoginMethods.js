'use client';

// next
import { useRouter } from 'next/navigation';

// custom hook
import useFirebaseMethods from '@/hooks/useFirebaseMethods';
import useFormVisiblity from './useFormVisiblity';
import useAxios from './useAxios';

// redux
import useRedux from './useRedux';
import {
   setUserShouldExist,
   setProfileData,
   setLoginErrors,
   setLoginLoading,
} from '@/lib/redux/features/auth/authSlice';

// utils
import { showToast } from '@/utils/toastify';

const useLoginMethods = () => {
   const { dispatch, useSelector } = useRedux();
   const { profileData } = useSelector(store => store.auth);
   const { loginEmail, loginGoogle, logout } = useFirebaseMethods();
   const { closeLoginFormWithBackdrop, closeSignupFormWithBackdrop } =
      useFormVisiblity();
   const router = useRouter();
   const { axiosPublic } = useAxios();

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
      dispatch(setLoginLoading(true));
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

         if (googleLoginResponse.data.status === 'success') {
            const profileData = googleLoginResponse.data.user;
            // set profile data, user should exist and the jwt token
            dispatch(setProfileData(profileData));
            dispatch(setUserShouldExist(true));
            localStorage.setItem('token', googleLoginResponse.data.token);
            localStorage.setItem('email', googleLoginResponse.data.user.email);

            closeLoginFormWithBackdrop();
            closeSignupFormWithBackdrop();

            router.push('/');

            showToast('Logged In Successfully', 'success');
            dispatch(setLoginLoading(false));
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
         dispatch(setLoginLoading(true));
         // firebase login api call
         const result = await loginEmail(dataObject.email, dataObject.password);

         //  if firebase login is successful, check database for profile data
         if (result.user) {
            const loginResponse = await axiosPublic.post('/email-login', {
               email: dataObject.email,
            });

            if (loginResponse.data.status === 'success') {
               const profileData = loginResponse.data.user;
               dispatch(setProfileData(profileData));
               dispatch(setUserShouldExist(true));
               // set profile and the jwt token in the localstorage
               localStorage.setItem('token', loginResponse.data.token);
               localStorage.setItem('email', loginResponse.data.user.email);

               closeLoginFormWithBackdrop();

               router.push('/');

               showToast('Logged In Successfully', 'success');
               dispatch(setLoginLoading(false));
            }
         }
      } catch (error) {
         dispatch(setLoginErrors(["Email/Password doesn't match. Try again."]));
         dispatch(setLoginLoading(false));
      }
   };

   const handleLogout = async (manual = true) => {
      const email = profileData?.email;
      // firebase logout
      const res = await logout();

      // if firebase logout is successful
      if (res.status === 'success') {
         const logoutRes = await axiosPublic.patch('/logout', { email });

         if (logoutRes.data.status === 'success') {
            dispatch(setProfileData(null));
            dispatch(setUserShouldExist(false));
            localStorage.removeItem('token');
            localStorage.removeItem('email');

            if (manual) {
               showToast('Signed Out Successfully', 'success');
            }

            if (!manual) {
               showToast('You Were Signed Out, Please Sign In Again', 'error');
            }
         }
      }
   };

   return {
      handleLoginEmail,
      handleLoginGoogle,
      handleLogout,
   };
};

export default useLoginMethods;
