// react imports
import PropTypes from 'prop-types';

// component
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';

const ButtonBtn = ({
   text,
   onClickFunction = null,
   colorTheme = 'primary',
   modifyClasses = '',
   // theme = 'light',
   loading = false,
   disabled = false,
}) => {
   
   const colorThemeClass = `${colorTheme}Classes`;

   const allClasses = `block min-w-[6rem] w-max capitalize transition-all duration-default rounded-defaultLg text-center text-sm sm:text-base px-4 py-2 active:scale-[0.98] disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed font-medium border ${colorThemeClass} ${modifyClasses}`;

   return (
      <button
         style={{ backfaceVisibility: 'hidden' }}
         disabled={disabled}
         onClick={onClickFunction}
         // decide the design of button according to the props
         className={allClasses}
      >
         {loading && (
            <LoadingSpinner
               onlyLoader={true}
               loaderSizeClass='text-xl xl:text-2xl'
            />
         )}
         {!loading && text}
      </button>
   );
};

ButtonBtn.propTypes = {
   text: PropTypes.string.isRequired,
   onClickFunction: PropTypes.func,
   colorTheme: PropTypes.string,
   modifyClasses: PropTypes.string,
   // theme: PropTypes.string,
   loading: PropTypes.bool,
   disabled: PropTypes.bool,
};

export default ButtonBtn;
