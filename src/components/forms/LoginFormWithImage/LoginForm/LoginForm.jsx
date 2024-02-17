'use client';

// react imports
import PropTypes from 'prop-types';

// component
import ButtonBtn from '@/components/shared/ButtonBtn/ButtonBtn';
import GoogleLoginBtn from '@/components/shared/GoogleLoginBtn/GoogleLoginBtn';
import PasswordField from '@/components/shared/PasswordField/PasswordField';

// hooks
import useLoginForm from '@/hooks/useLoginForm';

// redux
import { useSelector } from 'react-redux';
import InputField from '@/components/shared/InputField/InputField';

const LoginForm = ({ modifyClasses = '' }) => {
   const { loginErrors } = useSelector(store => store.auth);
   const { handleLoginEmail, handleLoginGoogle } = useLoginForm();

   return (
      <div
         className={`w-full mx-auto py-12 px-5 xsm:px-8 sm:px-10 2md:px-12 lg:px-10 ${modifyClasses}`}
      >
         {/* heading */}
         <h2 className='capitalize mb-custom2xsm text-center text-2xl'>
            Login to your account
         </h2>

         {/* form */}
         <form noValidate onSubmit={handleLoginEmail} className='w-full'>
            <div className='w-full space-y-5 xsm:w-[17rem] 2md:w-full 2md:mx-0 mx-auto'>
               {/* email */}
               <InputField type='email' name='email' placeholder='Email' />

               {/* password */}
               <PasswordField name='password' placeholder='Password' />
            </div>

            {/* show errors here */}
            {loginErrors?.length > 0 && (
               <div className='space-y-1 mt-4'>
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
               text='Sign In'
               modifyClasses='mx-auto block my-custom2xsm'
            />
            <p className='text-sm text-center xl:text-base'>
               Don&apos;t have an account?{' '}
               <button className='text-primary font-semibold'>Register</button>
            </p>
         </form>

         <p className='text-center my-4'>Or</p>

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