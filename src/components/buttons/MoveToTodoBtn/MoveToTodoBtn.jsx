'use client';

// react
import PropTypes from 'prop-types';

// icons
import { Icon } from '@iconify/react';

const MoveToTodoBtn = ({ onClickFunction, text, modifyClasses = '' }) => {
   return (
      <button
         title='Move to Todo'
         aria-label='Move to Todo button'
         className={`flex items-center gap-2 text-neutral-500 hover:text-primary ${modifyClasses}`}
         onClick={onClickFunction}
      >
         <Icon
            style={{ fontSize: 'inherit' }}
            className='text-inherit'
            icon='fluent:clipboard-task-list-ltr-24-filled'
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

MoveToTodoBtn.propTypes = {
   onClickFunction: PropTypes.func,
   text: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default MoveToTodoBtn;
