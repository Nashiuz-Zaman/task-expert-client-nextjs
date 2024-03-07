'use client';

// react
import { useEffect, useCallback } from 'react';

// components
import PasswordResetForm from '../PasswordResetForm/PasswordResetForm';

// hooks
import useClickOutside from '@/hooks/useClickOutside';
import useFormVisiblity from '@/hooks/useFormVisiblity';
import useStopScrolling from '@/hooks/useStopScrolling';

// redux
import { useSelector } from 'react-redux';

const PasswordResetModal = () => {
   const { passwordResetFormOpen } = useSelector(store => store.form);
   const { closePasswordResetFormWithBackdrop } =
      useFormVisiblity();
   const { stopYAxisScrolling } = useStopScrolling();

   useEffect(() => {
      stopYAxisScrolling(passwordResetFormOpen);
   }, [passwordResetFormOpen, stopYAxisScrolling]);

   const handleClickOutside = useCallback(
      e => {
         if (e.target.closest('.password-reset-custom-focus')) {
            return;
         }
         closePasswordResetFormWithBackdrop();
      },
      [closePasswordResetFormWithBackdrop]
   );
   useClickOutside(passwordResetFormOpen, handleClickOutside);

   return (
      <div
         className={`fixed w-[16rem] xs:w-[20rem] sm:w-[25rem] rounded-2xl overflow-hidden z-40 transition-all duration-default opacity-0 collapse top-1/2 left-1/2 -translate-y-1/2 -translate-x-full ${
            passwordResetFormOpen
               ? '!opacity-100 !visible !-translate-x-1/2'
               : ''
         }`}
      >
         <PasswordResetForm />
      </div>
   );
};

export default PasswordResetModal;
