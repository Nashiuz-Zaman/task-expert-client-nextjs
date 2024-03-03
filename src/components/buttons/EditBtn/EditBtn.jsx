'use client';

// react
import PropTypes from 'prop-types';

// icons
import { Icon } from '@iconify/react';

const EditBtn = ({ onClickFunction, text, modifyClasses = '' }) => {
   return (
      <button
         title='Edit'
         aria-label='Edit button'
         className={`flex items-center gap-2 text-neutral-500 hover:text-primary ${modifyClasses}`}
         onClick={onClickFunction}
      >
         <Icon style={{fontSize: 'inherit'}} className='text-inherit' icon='ic:round-edit' />

         {text && <span style={{fontSize: 'inherit'}} className='text-inherit capitalize'>{text}</span>}
      </button>
   );
};

EditBtn.propTypes = {
   onClickFunction: PropTypes.func,
   text: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default EditBtn;
