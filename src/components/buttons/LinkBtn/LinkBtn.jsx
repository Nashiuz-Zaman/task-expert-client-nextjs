// react imports
import PropTypes from 'prop-types';

// react router imports
import Link from 'next/link';

const LinkBtn = ({
   text,
   url,
   colorTheme = '',
   modifyClasses = '',
   theme = 'light',
}) => {
   // common classes
   const outlinedClasses =
      'bg-transparent border border-gray-300 hover:border-white text-gray-300 hover:text-white';

   const oulinedPrimaryClasses = `bg-transparent border ${
      theme === 'dark'
         ? 'border-white text-white'
         : 'border-primary text-primary '
   }  hover:text-primaryDark hover:border-primaryDark`;

   const primaryClasses = `border ${
      theme === 'dark'
         ? 'bg-primaryDarkTheme border-primaryDarkTheme'
         : 'bg-primary border-primary'
   } hover:border-primaryDark hover:bg-primaryDark text-white`;

   const blackClasses =
      'bg-blackLight border border-blackLight hover:bg-textPrimary hover:border-textPrimary text-white';

   const allClasses = `block w-max transition-all duration-default rounded-defaultLg text-center px-6 py-3 3xl:text-xl active:scale-[0.98] font-medium ${modifyClasses}`;

   return (
      <Link
         className={`${
            colorTheme === 'outlined'
               ? outlinedClasses
               : colorTheme === 'outlinedPrimary'
               ? oulinedPrimaryClasses
               : colorTheme === 'black'
               ? blackClasses
               : primaryClasses
         } ${allClasses} ${modifyClasses}`}
         href={url}
      >
         {text}
      </Link>
   );
};

LinkBtn.propTypes = {
   text: PropTypes.string,
   url: PropTypes.string,
   colorTheme: PropTypes.string,
   modifyClasses: PropTypes.string,
   theme: PropTypes.string,
};

export default LinkBtn;
