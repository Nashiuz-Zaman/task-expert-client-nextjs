// react imports
import PropTypes from 'prop-types';

// react icon
import { FcGoogle } from 'react-icons/fc';

const GoogleLoginBtn = ({
   text = 'Continue with Google',
   onClickFunction,
   modifyClasses = '',
}) => {
   return (
      <button
         onClick={onClickFunction}
         className={`bg-transparent border border-textLight hover:bg-[rgba(255,255,255,0.5)] transition-all duration-300 rounded-full px-5 py-2 text-lg flex items-center gap-2 mt-4 ${modifyClasses}`}
      >
         <FcGoogle className='text-2xl' /> <span>{text}</span>
      </button>
   );
};

GoogleLoginBtn.propTypes = {
   text: PropTypes.string,
   onClickFunction: PropTypes.func,
   modifyClasses: PropTypes.string,
};

export default GoogleLoginBtn;
