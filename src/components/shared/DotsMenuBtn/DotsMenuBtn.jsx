// react
import PropTypes from 'prop-types';

// icons
import { Icon } from '@iconify/react';
import { useState } from 'react';

const DotsMenuBtn = ({ renderChildren, modifyClasses = '' }) => {
   const [showMenu, setShowMenu] = useState(false);

   const handleClick = () => {
      setShowMenu(prev => !prev);
   };

   return (
      <div className={`relative flex items-center ${modifyClasses}`}>
         <button
            onClick={handleClick}
            className={`text-neutral-500 hover:text-primary transition-all duration-default `}
         >
            <Icon
               className='text-4xl text-inherit'
               icon='heroicons-solid:dots-horizontal'
            />
         </button>

         {renderChildren &&
            typeof renderChildren === 'function' &&
            renderChildren(showMenu, setShowMenu)}
      </div>
   );
};

DotsMenuBtn.propTypes = {
   children: PropTypes.any,
   modifyClasses: PropTypes.string,
};

export default DotsMenuBtn;
