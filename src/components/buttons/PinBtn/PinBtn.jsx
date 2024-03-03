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
         className={`flex items-center gap-2 text-neutral-500 hover:text-primary ${modifyClasses}`}
         onClick={onClickFunction}
      >
         <Icon style={{fontSize: 'inherit'}} className='text-inherit' icon='iconoir:pin-solid' />

         {text && <span style={{fontSize: 'inherit'}} className='text-inherit capitalize'>{text}</span>}
      </button>
   );
};

PinBtn.propTypes = {
   onClickFunction: PropTypes.func,
   text: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default PinBtn;
