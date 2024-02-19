// react
import PropTypes from 'prop-types';

// icon
import { RiMenu5Fill } from 'react-icons/ri';

const MobileMenuBtn = ({
   openNavFunction,
   theme = 'light',
   modifyClasses = '',
   size = 24,
}) => {
   return (
      <button
         className={`block w-max ${
            theme === 'light' ? 'text-textPrimary' : 'text-white'
         }  ${modifyClasses}`}
         onClick={openNavFunction}
      >
         <RiMenu5Fill size={size} style={{ color: 'inherit' }}></RiMenu5Fill>
      </button>
   );
};

MobileMenuBtn.propTypes = {
   openNavFunction: PropTypes.func,
   theme: PropTypes.string,
   size: PropTypes.number,
   modifyClasses: PropTypes.string,
};
export default MobileMenuBtn;
