// react
import PropTypes from 'prop-types';

// icons
import { Icon } from '@iconify/react';

const DotMenuBtn = ({ onClickFunction, modifyClasses = '' }) => {
   return (
      <button onClick={onClickFunction} className={`${modifyClasses}`}>
         <Icon
            className='text-4xl text-neutral-500'
            icon='heroicons-solid:dots-horizontal'
         />
      </button>
   );
};

DotMenuBtn.propTypes = {
   onClickFunction: PropTypes.func,
   modifyClasses: PropTypes.string,
};

export default DotMenuBtn;
