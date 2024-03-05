// react
import PropTypes from 'prop-types';

// next
import Link from 'next/link';

const DashboardNavLink = ({ linkData, onClickFunction, modifyClasses = '' }) => {
   const { icon, text, url } = linkData;

   return (
      <Link
      onClick={onClickFunction}
         className={`flex items-center gap-3 text-sm md:text-base lg:text-xl font-medium text-neutral-500 hover:text-primary transition-all duration-default ${modifyClasses}`}
         href={url}
      >
         <span style={{fontSize: 'inherit'}} className='inline-block'>{icon}</span>
         <span style={{fontSize: 'inherit'}} className='inline-block'>{text}</span>
      </Link>
   );
};

DashboardNavLink.propTypes = {
   linkData: PropTypes.object,
   onClickFunction: PropTypes.func,
   modifyClasses: PropTypes.string,
};

export default DashboardNavLink;
