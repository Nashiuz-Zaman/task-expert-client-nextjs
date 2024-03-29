// react
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

// components
import ButtonBtn from '@/components/buttons/ButtonBtn/ButtonBtn';
import GoogleLoginBtn from '@/components/buttons/GoogleLoginBtn/GoogleLoginBtn';
import InputField1 from '@/components/shared/InputField1/InputField1';
import PasswordField from '@/components/shared/PasswordField/PasswordField';

// hooks
import useRegistrationForm from '@/hooks/useRegistrationForm';
import useLoginMethods from '@/hooks/useLoginMethods';
import useResetForm from '@/hooks/useResetForm';
import useFormVisiblity from '@/hooks/useFormVisiblity';

// redux
import { useSelector } from 'react-redux';
import { setRegistrationErrors } from '@/lib/redux/features/auth/authSlice';

const RegistrationForm = ({ modifyClasses }) => {
   const { handleSignup } = useRegistrationForm();
   const { registrationErrors, registrationLoading } = useSelector(
      store => store.auth
   );
   const { registrationFormOpen } = useSelector(store => store.form);
   const { handleLoginGoogle } = useLoginMethods();
   const { resetFormFieldsAndErrors } = useResetForm();
   const { closeSignupFormWithBackdrop, openLoginFormWithBackdrop } =
      useFormVisiblity();
   const formEl = useRef();

   // clear form fields and errors when it disappears
   useEffect(() => {
      if (!registrationFormOpen) {
         resetFormFieldsAndErrors(formEl, setRegistrationErrors);
      }
   }, [registrationFormOpen, resetFormFieldsAndErrors]);

   return (
      <div
         className={`w-full bg-white mx-auto p-5 md:py-7 2md:px-6 2md:py-12 ${modifyClasses}`}
      >
         {/* heading */}
         <h2 className='capitalize mb-7 text-center font-bold text-lg 2md:text-xl xl:text-2xl'>
            Sign up. It&apos;s <span className='text-primary'>Free!</span>
         </h2>

         {/* form */}
         <form
            ref={formEl}
            noValidate
            onSubmit={handleSignup}
            className='w-full'
         >
            <div className='w-full space-y-3 md:space-y-5 xs:w-[17rem] 2md:w-full 2md:mx-0 mx-auto'>
               {/* username field */}
               <InputField1 name='name' placeholder='Username' />

               {/* email field */}
               <InputField1 type='email' name='email' placeholder='Email' />

               {/* password field */}
               <PasswordField name='password' placeholder='Password' />
            </div>

            {/* show errors here */}
            {registrationErrors?.length > 0 && (
               <div className='space-y-1 mt-4'>
                  {registrationErrors.map(error => {
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
               loading={registrationLoading}
               text='Sign Up'
               modifyClasses='mx-auto block my-5'
            />

            <p className='text-sm text-center xl:text-base mb-3 md:mb-4'>
               Already have an account?{' '}
               <button
                  onClick={e => {
                     e.preventDefault();
                     closeSignupFormWithBackdrop(false);
                     openLoginFormWithBackdrop(false);
                  }}
                  className='text-primary font-semibold'
               >
                  Log In
               </button>
            </p>
         </form>

         <p className='text-center mb-3 md:mb-4'>Or</p>

         <GoogleLoginBtn
            text='Sign up with Google'
            onClickFunction={handleLoginGoogle}
            modifyClasses='w-max mx-auto'
         />
      </div>
   );
};

RegistrationForm.propTypes = {
   modifyClasses: PropTypes.string,
};

export default RegistrationForm;
