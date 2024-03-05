'use client';

// react
import PropTypes from 'prop-types';

// icon
import { Icon } from '@iconify/react';

const Searchbar = ({
   onChangeFunction,
   placeholder = 'Search',
   modifyClasses = '',
}) => {
   return (
      <div
         className={`flex items-center gap-3 bg-neutral-100 px-2 py-2 md:py-1 rounded-default ${modifyClasses}`}
      >
         <Icon
            className='inline-block text-xl text-neutral-500'
            icon='iconamoon:search-light'
         />

         <input
            onChange={onChangeFunction}
            className='w-[15rem] text-sm md:text-base lg:text-lg bg-inherit placeholder:text-neutral-500 placeholder:capitalize focus:outline-none'
            type='text'
            placeholder={placeholder}
         />
      </div>
   );
};

Searchbar.propTypes = {
   onChangeFunction: PropTypes.func,
   placeholder: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default Searchbar;
