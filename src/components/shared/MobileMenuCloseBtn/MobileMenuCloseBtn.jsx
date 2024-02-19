// react
import PropTypes from 'prop-types';

// react icon
import { AiOutlineClose } from 'react-icons/ai';

const MobileMenuCloseBtn = ({ onClickFunction, modifyClasses = '' }) => {
   return (
      <button
         className={`ml-auto w-max block ${modifyClasses}`}
         onClick={onClickFunction}
      >
         <AiOutlineClose className='text-3xl text-white'></AiOutlineClose>
      </button>
   );
};

MobileMenuCloseBtn.propTypes = {
   onClickFunction: PropTypes.func.isRequired,
   modifyClasses: PropTypes.string,
};

export default MobileMenuCloseBtn;
