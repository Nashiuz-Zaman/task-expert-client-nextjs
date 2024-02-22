'use client';

// react
import PropTypes from 'prop-types';

// icons
import { Icon } from '@iconify/react';

const UnpinBtn = ({ onClickFunction, text, modifyClasses = '' }) => {
   return (
      <button
         title='Unpin Task'
         aria-label='Unpin button'
         className={`flex items-center gap-2 text-neutral-500 text-2xl ${modifyClasses}`}
         onClick={onClickFunction}
      >
         <Icon className='text-inherit' icon='f7:pin-slash-fill' />

         {text && <span className='text-inherit capitalize'>{text}</span>}
      </button>
   );
};

UnpinBtn.propTypes = {
   onClickFunction: PropTypes.func,
   text: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default UnpinBtn;
