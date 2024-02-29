'use client';

// react
import PropTypes from 'prop-types';

// icons
import { Icon } from '@iconify/react';

const PinBtn = ({ onClickFunction, text, modifyClasses = '' }) => {
   return (
      <button
         title='Pin Task'
         aria-label='Pin button'
         className={`flex items-center gap-2 text-neutral-500 text-xl hover:text-primary ${modifyClasses}`}
         onClick={onClickFunction}
      >
         <Icon className='text-inherit' icon='iconoir:pin-solid' />

         {text && <span className='text-inherit capitalize'>{text}</span>}
      </button>
   );
};

PinBtn.propTypes = {
   onClickFunction: PropTypes.func,
   text: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default PinBtn;
