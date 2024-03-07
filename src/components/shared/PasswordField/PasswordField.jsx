'use client';

// react
import PropTypes from 'prop-types';
import { useState } from 'react';

// icons
import { Icon } from '@iconify/react';

const PasswordField = ({
   placeholder = 'Default placeholder',
   name = '',
   modifyClasses = '',
   label,
   labelModifyClasses = '',
   inputModifyClasses = '',
}) => {
   const [showPassword, setShowPassword] = useState(false);

   return (
      <label className={`block w-full text-textPrimary ${modifyClasses}`}>
         {label && (
            <span
               className={`block font-bold text-sm xs:text-base md:text-lg mb-2 md:mb-4 ${labelModifyClasses}`}
            >
               {label}
            </span>
         )}

         <div
            className={`w-full pl-4 py-2 items-center rounded-inherit border border-neutral-400 grid grid-cols-[1fr_max-content] ${modifyClasses}`}
         >
            <input
               className={`w-full pr-4 text-textPrimary focus:outline-none text-xs xs:text-sm md:text-base ${inputModifyClasses}`}
               type={showPassword ? 'text' : 'password'}
               name={name}
               placeholder={placeholder}
            />

            {/* show/no show password buttons */}
            <button
               aria-label='Show or hide password button'
               className='text-textPrimary mr-4 focus:outline-none password-custom-focus'
               type='button'
               onClick={e => {
                  e.preventDefault();
                  setShowPassword(prev => !prev);
               }}
            >
               <Icon
                  className='block'
                  icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'}
               />
            </button>
         </div>
      </label>
   );
};

PasswordField.propTypes = {
   placeholder: PropTypes.string,
   name: PropTypes.string,
   modifyClasses: PropTypes.string,
   inputModifyClasses: PropTypes.string,
   labelModifyClasses: PropTypes.string,
};

export default PasswordField;
