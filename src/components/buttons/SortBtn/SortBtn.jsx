'use client';

// react
import { useState } from 'react';
import PropTypes from 'prop-types';

// icon
import { Icon } from '@iconify/react';

const SortBtn = ({ text = 'Sort', renderChildren, modifyClasses = '' }) => {
   const [showMenu, setShowMenu] = useState(false);

   const handleClick = () => {
      setShowMenu(prev => !prev);
   };

   return (
      <div className={`relative shadow-sm ${modifyClasses}`}>
         <button
            onClick={handleClick}
            className={`flex gap-2 items-center rounded-[inherit] bg-white hover:text-primary hover:border-primary border border-neutral-300 shadow-sm px-2 py-1 transition-all duration-default`}
         >
            <Icon className='text-xl' icon='ph:sort-descending-light' />{' '}
            <p className='hidden md:block text-lg'>{text}</p>
         </button>

         {renderChildren && renderChildren(showMenu, setShowMenu)}
      </div>
   );
};

SortBtn.propTypes = {
   text: PropTypes.string,
   renderChildren: PropTypes.func,
   modifyClasses: PropTypes.string,
};

export default SortBtn;
