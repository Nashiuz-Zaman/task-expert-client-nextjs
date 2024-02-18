// react
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

// components
import ButtonBtn from '@/components/shared/ButtonBtn/ButtonBtn';
import GoogleLoginBtn from '@/components/shared/GoogleLoginBtn/GoogleLoginBtn';
import FileUploadBtn from '@/components/shared/FileUploadBtn/FileUploadBtn';
import InputField from '@/components/shared/InputField/InputField';
import PasswordField from '@/components/shared/PasswordField/PasswordField';

// hooks
import useRegistrationForm from '@/hooks/useRegistrationForm';
import useLoginForm from '@/hooks/useLoginForm';
import useResetForm from '@/hooks/useResetForm';

// react icons
import { IoCloudUpload } from 'react-icons/io5';

// redux
import { useSelector } from 'react-redux';
import { setRegistrationErrors } from '@/lib/redux/features/auth/authSlice';

const RegistrationForm = ({ modifyClasses }) => {
   const { handleSubmit } = useRegistrationForm();
   const { registrationErrors } = useSelector(store => store.auth);
   const { registrationFormOpen } = useSelector(store => store.form);
   const { handleLoginGoogle } = useLoginForm();
   const { resetFormFieldsAndErrors } = useResetForm();
   const formEl = useRef();

   // clear form fields and errors when it disappears
   useEffect(() => {
      if (!registrationFormOpen) {
         resetFormFieldsAndErrors(formEl, setRegistrationErrors);
      }
   }, [registrationFormOpen, resetFormFieldsAndErrors]);

   return (
      <div
         className={`w-full bg-white mx-auto py-12 px-5 xsm:px-8 sm:px-10 2md:px-12 lg:px-10 ${modifyClasses}`}
      >
         {/* heading */}
         <h2 className='capitalize mb-custom2xsm text-center text-2xl font-semibold'>
            Sign up. It&apos;s <span className='text-primary'>Free!</span>
         </h2>

         {/* form */}
         <form
            ref={formEl}
            noValidate
            onSubmit={handleSubmit}
            className='w-full'
         >
            <div className='w-full space-y-5 xsm:w-[17rem] 2md:w-full 2md:mx-0 mx-auto'>
               {/* username field */}
               <InputField name='name' placeholder='Username' />

               {/* photo upload button */}
               <div className='grid grid-cols-2 items-center'>
                  <p>Your Photo</p>

                  <FileUploadBtn>
                     Browse <IoCloudUpload size={25} />
                  </FileUploadBtn>
               </div>

               {/* email field */}
               <InputField type='email' name='email' placeholder='Email' />

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
               text='Sign Up'
               modifyClasses='mx-auto block my-custom2xsm'
            />

            <p className='text-sm text-center xl:text-base'>
               Already have an account?{' '}
               <button className='text-primary font-semibold'>Log In</button>
            </p>
         </form>

         <p className='text-center  my-4'>Or</p>

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
