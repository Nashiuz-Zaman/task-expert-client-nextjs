'use client';

// react
import { useEffect, useCallback } from 'react';

// components
import LoginFormWithImage from '../LoginFormWithImage/LoginFormWithImage';

// hooks
import useClickOutside from '@/hooks/useClickOutside';
import useFormVisiblity from '@/hooks/useFormVisiblity';
import useStopScrolling from '@/hooks/useStopScrolling';
import useEnterPress from '@/hooks/useEnterPress';

// redux
import { useSelector } from 'react-redux';

// data
import loginImg from './../../../assets/forms/login.webp';

const LoginModal = () => {
   const { loginFormOpen } = useSelector(store => store.form);
   const { closeLoginFormWithBackdrop } = useFormVisiblity();
   const { stopYAxisScrolling } = useStopScrolling();

   useEffect(() => {
      stopYAxisScrolling(loginFormOpen);
   }, [loginFormOpen, stopYAxisScrolling]);

   const handleClickOutside = useCallback(
      e => {
         if (
            e.target.closest('.login-custom-focus') ||
            e.target.tagName.toLowerCase() === 'svg' ||
            e.target.tagName.toLowerCase() === 'path'
         ) {
            return;
         }

         closeLoginFormWithBackdrop();
      },
      [closeLoginFormWithBackdrop]
   );
   useClickOutside(loginFormOpen, handleClickOutside);
   useEnterPress(loginFormOpen);

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
