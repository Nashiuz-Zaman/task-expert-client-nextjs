'use client';

// react
import { useEffect, useCallback } from 'react';

// components
import RegistrationFormWithImage from '../RegistrationFormWithImage/RegistrationFormWithImage';

// hooks
import useClickOutside from '@/hooks/useClickOutside';

// redux
import useRedux from '@/hooks/useRedux';
import { setRegistrationFormOpen } from '@/lib/redux/features/form/formSlice';
import { setBackdropOpen } from '@/lib/redux/features/backdrop/backdropSlice';

// data
import registrationImg from './../../../assets/forms/registration.webp';

const RegistrationModal = () => {
   const { dispatch, useSelector } = useRedux();
   const { registrationFormOpen } = useSelector(store => store.form);

   const handleClickOutside = useCallback(
      e => {
         if (
            e.target.closest('.registration-custom-focus') ||
            e.target.closest('.password-custom-focus')
         ) {
            return;
         }

         dispatch(setRegistrationFormOpen(false));
         dispatch(setBackdropOpen(false));
      },
      [dispatch]
   );

   useClickOutside(registrationFormOpen, handleClickOutside);

   useEffect(() => {
      if (registrationFormOpen) {
         document.body.style.overflowY = 'hidden';
      } else {
         document.body.style.overflowY = 'auto';
      }
   }, [registrationFormOpen]);

   return (
      <div
         className={`fixed w-full z-40 transition-all duration-default opacity-0 collapse top-1/2 left-1/2 -translate-y-full -translate-x-1/2 ${
            registrationFormOpen
               ? '!opacity-100 !visible !-translate-y-1/2'
               : ''
         }`}
      >
         <RegistrationFormWithImage imageSource={registrationImg} />
      </div>
   );
};

export default RegistrationModal;
