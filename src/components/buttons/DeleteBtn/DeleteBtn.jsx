'use client';

// react
import PropTypes from 'prop-types';

// icons
import { Icon } from '@iconify/react';

const DeleteBtn = ({ onClickFunction, text, modifyClasses = '' }) => {
   return (
      <button
         title='Delete'
         aria-label='Delete button'
         className={`flex items-center gap-2 text-red-500 ${modifyClasses}`}
         onClick={onClickFunction}
      >
         <Icon
            style={{ fontSize: 'inherit' }}
            className='text-inherit'
            icon='material-symbols:delete'
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

DeleteBtn.propTypes = {
   onClickFunction: PropTypes.func,
   text: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default DeleteBtn;
