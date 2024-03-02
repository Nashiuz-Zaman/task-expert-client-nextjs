'use client';

// next
import { useRouter } from 'next/navigation';

// hooks
import useFirebaseMethods from './useFirebaseMethods';

import useFormVisiblity from './useFormVisiblity';

// axios
import axios from 'axios';
import { axiosPublic } from './useAxios';

// img bb api related
const imageUploadAPIKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
const imageUploadAPI = `https://api.imgbb.com/1/upload?key=${imageUploadAPIKey}`;

// redux
import { useDispatch } from 'react-redux';
import {  
   setUserAlreadyRegistered,
   setUserShouldExist,
   setProfileData,
   setRegistrationErrors,
   setRegistrationLoading,
} from '@/lib/redux/features/auth/authSlice';

// custom hook body starts here
const useRegistrationForm = () => {
   // initial data and function extractions
   const dispatch = useDispatch();
   const { signup, updateFirebaseProfile } = useFirebaseMethods();
   const router = useRouter();
   const { closeSignupFormWithBackdrop } = useFormVisiblity();

   // registration password validation
   const validatePassword = password => {
      const passwordErrors = [];

      const capitalLetterRegExp = /[A-Z]/;
      const specialCharsRegExp = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;

      if (password.length < 6) {
         passwordErrors.push('Passwords must be 6 characters');
      }

      if (!capitalLetterRegExp.test(password)) {
         passwordErrors.push('Passwords must contain a capital letter');
      }

      if (!specialCharsRegExp.test(password)) {
         passwordErrors.push('Passwords must contain a special character');
      }

      return passwordErrors;
   };

   const validateInputs = inputs => {
      const { userName, photo, email, password } = inputs;
      const emailRegex = /[a-z0-9._]+@[a-z0-9]+.[a-z]+/g;

      const foundErrors = [];

      if (userName === '') {
         foundErrors.push('Must provide an username');
      }

      if (!photo) {
         foundErrors.push('Must provide a photo');
      }

      if (email === '') {
         foundErrors.push('Must provide an email address');
      } else if (!emailRegex.test(email)) {
         foundErrors.push('Must provide a valid email address');
      }

      if (password === '') {
         foundErrors.push('Must provide a password');
      } else {
         foundErrors.push(...validatePassword(password));
      }

      return foundErrors;
   };

   // function to run when the form is submitted
   const handleSignup = async e => {
      e.preventDefault();
      // reset errors
      dispatch(setRegistrationErrors([]));

      const form = e.target;
      const userName = form.name.value;
      const photo = form.file.files[0];
      const email = form.email.value;
      const password = form.password.value;

      const dataObject = {
         userName,
         photo,
         email,
         password,
      };

      const foundErrors = validateInputs(dataObject);

      // if there are erros return from here
      if (foundErrors.length > 0) {
         dispatch(setRegistrationErrors(foundErrors));
         return;
      }

      // if there are no basic errors code will reach this line
      try {
         dispatch(setRegistrationLoading(true));
         const userExistsResponse = await axiosPublic.post(
            '/users/checkExistence',
            {
               email: dataObject.email,
            }
         );

         // if user exists
         if (userExistsResponse.data.userExists) {
            dispatch(setUserAlreadyRegistered(true));
            dispatch(setRegistrationLoading(false));
         } else {
            // if user doesn't exist
            // upload image to imgbb first
            const image = { image: dataObject.photo };
            const imageUploadResponse = await axios.post(
               imageUploadAPI,
               image,
               {
                  headers: {
                     'content-type': 'multipart/form-data',
                  },
               }
            );

            // if upload to imgbb is successful then proceed to sign up in firebase
            if (imageUploadResponse.data.success) {
               const signupResponse = await signup(
                  dataObject.email,
                  dataObject.password
               );

               if (signupResponse.user) {
                  // if firebase sign up successful update the profile first
                  await updateFirebaseProfile(
                     dataObject.userName,
                     imageUploadResponse.data.data.display_url
                  );

                  // save new user object to database
                  const user = {
                     name: dataObject.userName,
                     password: dataObject.password,
                     email: dataObject.email,
                     imageSource: imageUploadResponse.data.data.display_url,
                     role: 'user',
                  };

                  // create user api call
                  const userCreationResponse = await axiosPublic.post(
                     '/users',
                     user
                  );

                  // if success
                  if (userCreationResponse.data.success) {
                     const profileData = userCreationResponse.data.user;
                     dispatch(setProfileData(profileData));
                     dispatch(setUserShouldExist(true));
                     localStorage.setItem(
                        'tokenExists',
                        userCreationResponse.data.tokenExists
                     );

                     closeSignupFormWithBackdrop();
                     router.push('/');
                     dispatch(setRegistrationLoading(false));
                  }
               }
            }
         }
      } catch (error) {
         if (error) {
            dispatch(setRegistrationLoading(false));
            dispatch(setRegistrationErrors([error.message]));
         }
      }
   };

   return {
      handleSignup,
   };
};

export default useRegistrationForm;
