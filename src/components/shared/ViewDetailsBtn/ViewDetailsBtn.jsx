'use client';

// react
import PropTypes from 'prop-types';

// icons
import { Icon } from '@iconify/react';

const ViewDetailsBtn = ({ onClickFunction, text, modifyClasses = '' }) => {
   return (
      <button
         title='View Details'
         aria-label='View Details Button'
         className={`flex items-center gap-2 text-neutral-500 text-xl hover:text-primary ${modifyClasses}`}
         onClick={onClickFunction}
      >
         <Icon className='text-inherit' icon='ph:magnifying-glass-plus-fill' />

         {text && <span className='text-inherit capitalize'>{text}</span>}
      </button>
   );
};

ViewDetailsBtn.propTypes = {
   onClickFunction: PropTypes.func,
   text: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default ViewDetailsBtn;
