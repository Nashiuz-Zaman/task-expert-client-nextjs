'use client';

// react
import { useEffect, useCallback } from 'react';

// components
import LoginFormWithImage from '../LoginFormWithImage/LoginFormWithImage';

// hooks
import useClickOutside from '@/hooks/useClickOutside';

// redux
import useRedux from '@/hooks/useRedux';
import { setLoginFormOpen } from '@/lib/redux/features/form/formSlice';
import { setBackdropOpen } from '@/lib/redux/features/backdrop/backdropSlice';

// data
import loginImg from './../../../assets/forms/login.webp';

const LoginModal = () => {
   const { dispatch, useSelector } = useRedux();
   const { loginFormOpen } = useSelector(store => store.form);

   const handleClickOutside = useCallback(e => {
      if (!e.target.closest('.login-custom-focus')) {
         dispatch(setLoginFormOpen(false));
         dispatch(setBackdropOpen(false));
      }
   }, []);

   useClickOutside(loginFormOpen, handleClickOutside);

   useEffect(() => {
      if (loginFormOpen) {
         document.body.style.overflowY = 'hidden';
      } else {
         document.body.style.overflowY = 'auto';
      }
   }, [loginFormOpen]);

   return (
      <div
         className={`fixed w-full z-40 transition-all duration-default opacity-0 collapse top-1/2 left-1/2 -translate-y-full -translate-x-1/2 ${
            loginFormOpen ? '!opacity-100 !visible !-translate-y-1/2' : ''
         }`}
      >
         <LoginFormWithImage imageSource={loginImg} />
      </div>
   );
};

export default LoginModal;
