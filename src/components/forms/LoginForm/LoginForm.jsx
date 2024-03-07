'use client';

// react imports
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

// component
import ButtonBtn from '@/components/buttons/ButtonBtn/ButtonBtn';
import GoogleLoginBtn from '@/components/buttons/GoogleLoginBtn/GoogleLoginBtn';
import PasswordField from '@/components/shared/PasswordField/PasswordField';
import InputField1 from '@/components/shared/InputField1/InputField1';

// hooks
import useLoginForm from '@/hooks/useLoginForm';
import useResetForm from '@/hooks/useResetForm';
import useFormVisiblity from '@/hooks/useFormVisiblity';

// redux
import { useSelector } from 'react-redux';
import { setLoginErrors } from '@/lib/redux/features/auth/authSlice';

const LoginForm = ({ modifyClasses = '' }) => {
   const { loginErrors, loginLoading } = useSelector(store => store.auth);
   const { loginFormOpen } = useSelector(store => store.form);
   const { handleLoginEmail, handleLoginGoogle } = useLoginForm();
   const { resetFormFieldsAndErrors } = useResetForm();
   const { closeLoginFormWithBackdrop, openSignupFormWithBackdrop, openPasswordResetFormWithBackdrop } =
      useFormVisiblity();
   const formEl = useRef();

     // clear form fields and errors when it disappears
   useEffect(() => {
      if (!loginFormOpen) {
         resetFormFieldsAndErrors(formEl, setLoginErrors);
      }
   }, [loginFormOpen, resetFormFieldsAndErrors]);

   return (
      <div
         className={`w-full bg-white mx-auto p-5 md:py-7 2md:px-6 2md:py-12 ${modifyClasses}`}
      >
         {/* heading */}
         <h2 className='capitalize mb-4 text-center text-lg 2md:text-xl xl:text-2xl font-bold'>
            Login to your account
         </h2>

         <form
            ref={formEl}
            noValidate
            onSubmit={handleLoginEmail}
            className='w-full'
         >
            <div className='w-full space-y-3 md:space-y-5 xs:w-[17rem] 2md:w-full 2md:mx-0 mx-auto'>
               {/* email */}
               <InputField1 type='email' name='email' placeholder='Email' />

               {/* password */}
               <div className='space-y-3'>
                  <PasswordField name='password' placeholder='Password' />
                  <button
                   onClick={(e)=>{
                     e.preventDefault()
                     closeLoginFormWithBackdrop(false)
                     openPasswordResetFormWithBackdrop(false)
                   }}
                     className='w-max block ml-auto text-primary text-sm xl:text-base'
                  >
                     Forgot password?
                  </button>
               </div>
            </div>

            {/* show errors here */}
            {loginErrors?.length > 0 && (
               <div className='space-y-1 mt-3 md:mt-4'>
                  {loginErrors.map(error => {
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

            <ButtonBtn
               loading={loginLoading}
               text='Sign In'
               modifyClasses='mx-auto block my-5'
            />

            <p className='text-sm text-center xl:text-base mb-3 md:mb-4'>
               Don&apos;t have an account?{' '}
               <button
                  onClick={e => {
                     e.preventDefault();
                     closeLoginFormWithBackdrop(false);
                     openSignupFormWithBackdrop(false);
                  }}
                  className='text-primary font-semibold'
               >
                  Register
               </button>
            </p>
         </form>

         <p className='text-center mb-3 md:mb-4'>Or</p>

         <GoogleLoginBtn
            onClickFunction={handleLoginGoogle}
            modifyClasses='w-max mx-auto'
         />
      </div>
   );
};

LoginForm.propTypes = {
   modifyClasses: PropTypes.string,
};

export default LoginForm;
