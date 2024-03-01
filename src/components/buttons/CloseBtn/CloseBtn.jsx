// react
import PropTypes from 'prop-types';

// react icon
import { AiOutlineClose } from 'react-icons/ai';

const CloseBtn = ({ theme = 'light', onClickFunction, modifyClasses = '' }) => {
   return (
      <button
         className={`ml-auto w-max block text-3xl ${
            theme === 'light' ? 'text-textPrimary' : 'text-white'
         } ${modifyClasses}`}
         onClick={onClickFunction}
      >
         <AiOutlineClose></AiOutlineClose>
      </button>
   );
};

CloseBtn.propTypes = {
   onClickFunction: PropTypes.func.isRequired,
   modifyClasses: PropTypes.string,
};

export default CloseBtn;
