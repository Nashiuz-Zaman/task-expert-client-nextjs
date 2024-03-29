'use client';

// react
import PropTypes from 'prop-types';

// icons
import { Icon } from '@iconify/react';

const MoveToCompletedBtn = ({ onClickFunction, text, modifyClasses = '' }) => {
   return (
      <button
         title='Move to Completed'
         aria-label='Move to Completed button'
         className={`flex items-center gap-2 text-neutral-500 hover:text-primary ${modifyClasses}`}
         onClick={onClickFunction}
      >
         <Icon
            style={{ fontSize: 'inherit' }}
            className='text-inherit'
            icon='carbon:checkmark-filled'
         />

         {text && (
            <span
               style={{ fontSize: 'inherit' }}
               className='text-inherit capitalize'
            >
               {text}
            </span>
         )}
      </button>
   );
};

MoveToCompletedBtn.propTypes = {
   onClickFunction: PropTypes.func,
   text: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default MoveToCompletedBtn;
