// react
import PropTypes from 'prop-types';

// icon
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const MobileMenuBtn = ({
   openNavFunction,
   theme = 'light',
   modifyClasses = '',
}) => {
   return (
      <button
         aria-label='Open Mobile Navigation'
         className={`inline-block border group rounded-md md:rounded-lg xl:rounded-xl transition-all duration-default ${
            theme === 'light'
               ? 'border-textPrimary active:border-primary lg:hover:border-primary'
               : 'border-white'
         }  ${modifyClasses}`}
         onClick={openNavFunction}
      >
         <BiDotsHorizontalRounded
            className={`block transition-all duration-default text-[1.4rem] md:text-[2rem] xl:text-[2.8rem] m-1 ${
               theme === 'light'
                  ? 'text-textPrimary active:text-primary lg:group-hover:text-primary'
                  : 'text-white '
            }`}
         ></BiDotsHorizontalRounded>
      </button>
   );
};

MobileMenuBtn.propTypes = {
   openNavFunction: PropTypes.func,
   theme: PropTypes.string,
   modifyClasses: PropTypes.string,
};
export default MobileMenuBtn;
