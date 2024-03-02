'use client';

// react
import PropTypes from 'prop-types';
import { useState } from 'react';

// icon
import { Icon } from '@iconify/react';

const FilterBtn = ({ text = 'Filter', renderChildren, modifyClasses = '' }) => {
   const [showMenu, setShowMenu] = useState(false);

   const handleClick = () => {
      setShowMenu(prev => !prev);
   };

   return (
      <div className={`relative shadow-sm  ${modifyClasses}`}>
         <button
            onClick={handleClick}
            className='flex gap-2 bg-white hover:text-primary hover:border-primary border border-neutral-300 items-center rounded-[inherit] px-2 py-1 transition-all duration-default'
         >
            <Icon className='text-xl' icon='ph:sliders-light' />{' '}
            <p className='hidden md:block text-lg'>{text}</p>
         </button>

         {renderChildren && renderChildren(showMenu, setShowMenu)}
      </div>
   );
};

FilterBtn.propTypes = {
   text: PropTypes.string,
   renderChildren: PropTypes.func,
   modifyClasses: PropTypes.string,
};

export default FilterBtn;
