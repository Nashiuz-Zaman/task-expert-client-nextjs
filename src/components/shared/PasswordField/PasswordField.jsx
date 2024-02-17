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
         className={`w-full py-2 items-center rounded-default border border-textLight grid grid-cols-[1fr_max-content] ${modifyClasses}`}
      >
         <input
            className='w-full px-4 text-textPrimary focus:outline-none'
            type={showPassword ? 'text' : 'password'}
            name={name}
            placeholder={placeholder}
         />

         {/* show/no show password buttons */}
         <button
            aria-label='Show or hide password button'
            className='text-textPrimary pr-4'
            onClick={e => {
               e.preventDefault();
               setShowPassword(prev => !prev);
            }}
         >
            {showPassword ? <IoEyeOff size={25} /> : <IoEye size={25} />}
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
