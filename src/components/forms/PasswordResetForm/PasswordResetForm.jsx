'use client';

// react imports
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

// component
import ButtonBtn from '@/components/buttons/ButtonBtn/ButtonBtn';
import InputField1 from '@/components/shared/InputField1/InputField1';

// hooks
import useResetForm from '@/hooks/useResetForm';
import useFormVisiblity from '@/hooks/useFormVisiblity';
import useFirebaseMethods from '@/hooks/useFirebaseMethods';

// redux
import useRedux from '@/hooks/useRedux';
import { setPasswordResetErrors,setPasswordResetLoading } from '@/lib/redux/features/auth/authSlice';

// utils
import { showToast } from '@/utils/toastify';

// validation function
const validateEmail = email => {
   const emailRegex = /[a-z0-9._]+@[a-z0-9]+.[a-z]+/g;
   const foundErrors = [];

   if (email === '') {
      foundErrors.push('Must provide an email address');
   } else if (!emailRegex.test(email)) {
      foundErrors.push('Must provide a valid email address');
   }

   return foundErrors;
};

const PasswordResetForm = ({ modifyClasses = '' }) => {
   const formEl = useRef();
   const { dispatch, useSelector } = useRedux();
   const { passwordResetErrors, passwordResetLoading } = useSelector(
      store => store.auth
   );
   const { passwordResetFormOpen } = useSelector(store => store.form);
   const { resetFormFieldsAndErrors } = useResetForm();
   const { openLoginFormWithBackdrop, closePasswordResetFormWithBackdrop } =
      useFormVisiblity();
   const { sendUserPasswordResetEmail } = useFirebaseMethods();

   // clear form fields and errors
   useEffect(() => {
      if (!passwordResetFormOpen) {
         resetFormFieldsAndErrors(formEl, setPasswordResetErrors);
      }
   }, [passwordResetFormOpen, resetFormFieldsAndErrors]);

   const handleForgotPassword = async e => {
      try {
         e.preventDefault();
         dispatch(setPasswordResetLoading(true))
         dispatch(setPasswordResetErrors([]));
         const email = e.target.email.value;
         const foundErrors = validateEmail(email);

         // if there are erros return from here
         if (foundErrors.length > 0) {
            dispatch(setPasswordResetErrors(foundErrors));
            dispatch(setPasswordResetLoading(false))
            return;
         }

         const res = await sendUserPasswordResetEmail(email);

         if (res.status === 'success') {
            dispatch(setPasswordResetLoading(false))
            e.target.reset();
            closePasswordResetFormWithBackdrop();
            showToast('Email sent, Please check inbox/spam', 'success');
         }
      } catch (error) {
         dispatch(setPasswordResetErrors([error.message]));
      }
   };

   return (
      <div
         className={`w-full bg-white mx-auto p-5 md:py-7 2md:px-6 2md:py-12 password-reset-custom-focus ${modifyClasses}`}
      >
         {/* heading */}
         <h2 className='capitalize mb-4 text-center sm:text-left text-lg 2md:text-xl xl:text-2xl font-bold'>
            Reset password
         </h2>

         <form ref={formEl} onSubmit={handleForgotPassword} className='w-full'>
            {/* email */}
            <InputField1 type='email' name='email' placeholder='Email' />

            {/* show errors here */}
            {passwordResetErrors?.length > 0 && (
               <div className='space-y-1 mt-3 md:mt-4'>
                  {passwordResetErrors.map(error => {
                     return (
                        <p
                           key={error}
                           className='text-sm text-center font-semibold text-red-600'
                        >
                           * {error}
                        </p>
                     );
                  })}
               </div>
            )}

            <div className='flex flex-col sm:flex-row items-center sm:justify-between mt-5'>
               <ButtonBtn
                  loading={passwordResetLoading}
                  text='Send Email'
                  modifyClasses='block mx-auto sm:mx-0 mb-5 sm:mb-0'
               />

               <p className='text-sm text-center xl:text-base'>
                  Have password?{' '}
                  <button
                     onClick={e => {
                        e.preventDefault();
                        closePasswordResetFormWithBackdrop(false);
                        openLoginFormWithBackdrop(false);
                     }}
                     className='text-primary font-semibold'
                  >
                     Login
                  </button>
               </p>
            </div>
         </form>
      </div>
   );
};

PasswordResetForm.propTypes = {
   modifyClasses: PropTypes.string,
};

export default PasswordResetForm;
