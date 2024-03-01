'use client';

// react
import PropTypes from 'prop-types';

// icons
import { Icon } from '@iconify/react';

const MoveToOngoingBtn = ({ onClickFunction, text, modifyClasses = '' }) => {
   return (
      <button
         title='Move to Ongoing'
         aria-label='Move to Ongoing button'
         className={`flex items-center gap-2 text-neutral-500 text-xl hover:text-primary ${modifyClasses}`}
         onClick={onClickFunction}
      >
         <Icon className='text-inherit' icon='ph:clock-clockwise-duotone' />

         {text && <span className='text-inherit capitalize'>{text}</span>}
      </button>
   );
};

MoveToOngoingBtn.propTypes = {
   onClickFunction: PropTypes.func,
   text: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default MoveToOngoingBtn;
