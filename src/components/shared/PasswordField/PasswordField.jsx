'use client';

// react
import PropTypes from 'prop-types';
import { useState } from 'react';

// react icons
import { IoEye, IoEyeOff } from 'react-icons/io5';

const PasswordField = ({
   placeholder = 'Default placeholder',
   name = '',
   modifyClasses = '',
}) => {
   const [showPassword, setShowPassword] = useState(false);

   return (
      <div
         className={`w-full pl-4 py-2 items-center rounded-default border border-textLight grid grid-cols-[1fr_max-content] ${modifyClasses}`}
      >
         <input
            className='w-full pr-4 text-textPrimary focus:outline-none'
            type={showPassword ? 'text' : 'password'}
            name={name}
            placeholder={placeholder}
         />

         {/* show/no show password buttons */}
         <button
            aria-label='Show or hide password button'
            className='text-textPrimary mr-4 focus:outline-none'
            type='button'
            onClick={e => {
               e.preventDefault();
               setShowPassword(prev => !prev);
            }}
         >
            {showPassword ? (
               <IoEyeOff className='password-custom-focus' size={25} />
            ) : (
               <IoEye className='password-custom-focus' size={25} />
            )}
         </button>
      </div>
   );
};

PasswordField.propTypes = {
   placeholder: PropTypes.string,
   name: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default PasswordField;
