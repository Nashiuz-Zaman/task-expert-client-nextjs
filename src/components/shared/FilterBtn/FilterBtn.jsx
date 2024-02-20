'use client';

// react
import PropTypes from 'prop-types';

// icon
import { Icon } from '@iconify/react';

const FilterBtn = ({ text = 'Filter', modifyClasses = '' }) => {
   return (
      <button
         className={`flex gap-2 items-center rounded-default bg-white hover:text-primary border border-neutral-300 shadow-sm px-2 py-1 transition-all duration-default ${modifyClasses}`}
      >
         <Icon className='text-xl' icon='ph:sliders-light' />{' '}
         <p className='hidden md:block text-lg'>{text}</p>
      </button>
   );
};

FilterBtn.propTypes = {
   modifyClasses: PropTypes.string,
};

export default FilterBtn;
