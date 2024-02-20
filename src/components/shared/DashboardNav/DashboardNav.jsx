'use client';

// react
import PropTypes from 'prop-types';

// components
import BrandLogo from '../BrandLogo/Brandlogo';
import PinnedTask from '@/components/page-related/dashboard-home/PinnedTask/PinnedTask';
import DashboardNavHeading from '@/components/page-related/dashboard-home/DashboardNavHeading/DashboardNavHeading';
import DashboardNavLink from '@/components/page-related/dashboard-home/DashboardNavLink/DashboardNavLink';

// redux
import { useSelector } from 'react-redux';

const DashboardNav = ({ modifyClasses = '' }) => {
   const { dashboardNavOptions } = useSelector(store => store.dashboard);
   const { pinnedTasks } = useSelector(store => store.task);

   // common css classes
   const inlineMarginClasses = 'mx-6';

   return (
      <div className={`py-9 ${modifyClasses}`}>
         {/* website logo */}
         <BrandLogo
            modifyClasses={`${inlineMarginClasses} mb-customSm lg:!h-10`}
         />

         {/* pinned tasks */}
         <div className={`${inlineMarginClasses} mb-customXs`}>
            <DashboardNavHeading text='Pinned Task' modifyClasses='mb-6' />

            {!pinnedTasks && (
               <PinnedTask
                  modifyClasses='ml-4'
                  task={{ title: 'No pinned task' }}
               />
            )}
         </div>

         {/* dashboard pages */}
         <div className={`${inlineMarginClasses} mb-customXs`}>
            <DashboardNavHeading text='Menu' modifyClasses='mb-6' />

            {/* the navigation menu */}
            <ul className='block space-y-3'>
               {dashboardNavOptions?.options?.map((option, i) => {
                  return (
                     <li key={i} className='ml-4'>
                        <DashboardNavLink linkData={option} />
                     </li>
                  );
               })}
            </ul>
         </div>

         {/* account pages */}
         <div className={`${inlineMarginClasses} mb-customXs`}>
            <DashboardNavHeading text='Account' modifyClasses='mb-6' />

            {/* the navigation menu */}
            <ul className='block space-y-3'>
               {dashboardNavOptions?.accountOptions?.map((option, i) => {
                  return (
                     <li key={i} className='ml-4'>
                        <DashboardNavLink linkData={option} />
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

DashboardNav.propTypes = {
   modifyClasses: PropTypes.string,
};

export default DashboardNav;
