'use client';

// react
import PropTypes from 'prop-types';

// icon
import { Icon } from '@iconify/react';

const AddBtn = ({ text = 'Add', onClickFunction, modifyClasses = '' }) => {
   return (
      <button
         onClick={onClickFunction}
         className={`flex gap-1 items-center rounded-default bg-white hover:text-primary border border-neutral-300 shadow-sm px-3 py-1 transition-all duration-default ${modifyClasses}`}
      >
         <Icon className='text-xl' icon='mdi:add-bold' />
         <p className='hidden md:block text-lg'>{text}</p>
      </button>
   );
};

AddBtn.propTypes = {
   onClickFunction: PropTypes.func,
   modifyClasses: PropTypes.string,
};

export default AddBtn;
