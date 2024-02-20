// react
import PropTypes from 'prop-types';

// next
import Link from 'next/link';

const DashboardNavLink = ({ linkData, modifyClasses = '' }) => {
   const { icon, text, url } = linkData;

   return (
      <Link
         className={`flex items-center gap-3 text-xl font-medium text-neutral-500 hover:text-primary transition-all duration-default ${modifyClasses}`}
         href={url}
      >
         <span className='inline-block text-3xl'>{icon}</span>
         <span className='inline-block'>{text}</span>
      </Link>
   );
};

DashboardNavLink.propTypes = {
   linkData: PropTypes.object,
   modifyClasses: PropTypes.string,
};

export default DashboardNavLink;
