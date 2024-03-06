// react imports
import PropTypes from 'prop-types';

// react router imports
import Link from 'next/link';

const LinkBtn = ({
   text,
   url,
   colorTheme = '',
   modifyClasses = '',
   // theme = 'light',
}) => {
   const colorThemeClass = `${colorTheme}Classes`;
   const allClasses = `block w-max transition-all duration-default rounded-defaultLg text-center px-4 py-2 text-sm sm:text-base active:scale-[0.98] font-medium ${colorThemeClass} ${modifyClasses}`;

   return (
      <Link className={allClasses} href={url}>
         {text}
      </Link>
   );
};

LinkBtn.propTypes = {
   text: PropTypes.string,
   url: PropTypes.string,
   colorTheme: PropTypes.string,
   modifyClasses: PropTypes.string,
   // theme: PropTypes.string,
};

export default LinkBtn;
