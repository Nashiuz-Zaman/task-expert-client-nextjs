'use client';

// react
import PropTypes from 'prop-types';

// next
import Link from 'next/link';

// components
import BrandLogo from '../BrandLogo/Brandlogo';
import PinnedTask from '@/components/page-related/dashboard-home/PinnedTask/PinnedTask';
import DashboardNavHeading from '@/components/page-related/dashboard-home/DashboardNavHeading/DashboardNavHeading';

// redux
import { useSelector } from 'react-redux';

const DashboardNav = ({ modifyClasses = '' }) => {
   const { dashboardNavOptions } = useSelector(store => store.dashboard);
   const { pinnedTasks } = useSelector(store => store.task);

   // common css classes
   const linkClasses =
      'block text-lg font-medium translate-x-0 hover:font-bold hover:translate-x-2 transition-all duration-default';
   const inlineMarginClasses = 'mx-6';

   return (
      <div className={`py-9 ${modifyClasses}`}>
         {/* website logo */}
         <BrandLogo
            modifyClasses={`${inlineMarginClasses} mb-customXs lg:!h-10`}
         />

         {/* pinned tasks */}
         <div className={`${inlineMarginClasses} mb-customXs`}>
            <DashboardNavHeading text='Pinned Task' modifyClasses='mb-6' />

            {!pinnedTasks && <PinnedTask task={{ title: 'No pinned task' }} />}
         </div>

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
