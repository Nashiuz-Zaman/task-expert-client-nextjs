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
         className={`flex items-center gap-2 text-red-500 text-2xl ${modifyClasses}`}
         onClick={onClickFunction}
      >
         <Icon className='text-inherit' icon='typcn:delete' />
         {text && <span className='text-inherit capitalize'>{text}</span>}
      </button>
   );
};

DeleteBtn.propTypes = {
   onClickFunction: PropTypes.func,
   text: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default DeleteBtn;
