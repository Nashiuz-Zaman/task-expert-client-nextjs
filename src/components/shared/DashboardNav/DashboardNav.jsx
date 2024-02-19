'use client';

// react
import PropTypes from 'prop-types';

// next
import Link from 'next/link';

// redux
import { useSelector } from 'react-redux';

const DashboardNav = ({ modifyClasses = '' }) => {
   const { dashboardNavOptions } = useSelector(store => store.dashboard);

   const linkClasses =
      'block text-lg font-medium translate-x-0 hover:font-bold hover:translate-x-2 transition-all duration-default';

   return (
      <div className={`pl-8 pr-3 py-customSm ${modifyClasses}`}>
         <h2 className='text-xl font-bold mb-customXs'>Dashboard</h2>

         {/* the navigation menu */}
         <ul className={`space-y-3`}>
            {dashboardNavOptions?.options?.map((option, i) => {
               return (
                  <li key={i}>
                     <Link className={linkClasses} href={option.url}>
                        {option.text}
                     </Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

DashboardNav.propTypes = {
   modifyClasses: PropTypes.string,
};

export default DashboardNav;
