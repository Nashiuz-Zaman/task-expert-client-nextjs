'use client';

// icons
import { Icon } from '@iconify/react';

// redux
import { useSelector } from 'react-redux';
import DashboardNavHeading from '../DashboardNavHeading/DashboardNavHeading';
import PinnedTask from '../PinnedTask/PinnedTask';
import DashboardNavLink from '../DashboardNavLink/DashboardNavLink';

const DashboardNavContent = () => {
   const { pinnedTasks } = useSelector(store => store.task);
   const { dashboardRoute } = useSelector(store => store.dashboard);

   const inlineMarginClasses = 'mx-6';

   const primaryOptions = [
      {
         text: 'Manage Tasks',
         icon: <Icon icon='fluent:tasks-app-20-filled' />,
         url: `${dashboardRoute}/manage-tasks`,
      },
      {
         text: 'Analytics',
         icon: <Icon icon='solar:chart-2-bold' />,
         url: `${dashboardRoute}/analytics`,
      },
   ];

   const accountOptions = [
      {
         text: 'Settings',
         icon: <Icon icon='solar:settings-bold' />,
         url: `${dashboardRoute}/settings`,
      },
   ];
   return (
      <div className='mx-6 space-y-12'>
         {/* pinned tasks */}
         <div>
            <DashboardNavHeading text='Pinned Task' modifyClasses='mb-6' />

            {!pinnedTasks && (
               <PinnedTask
                  modifyClasses='ml-4'
                  task={{ title: 'No pinned task' }}
               />
            )}
         </div>

         {/* dashboard pages */}
         <div>
            <DashboardNavHeading text='Menu' modifyClasses='mb-6' />

            {/* the navigation menu */}
            <ul className='space-y-3'>
               {primaryOptions.map((option, i) => {
                  return (
                     <li key={i} className='ml-4'>
                        <DashboardNavLink linkData={option} />
                     </li>
                  );
               })}
            </ul>
         </div>

         {/* account pages */}
         <div>
            <DashboardNavHeading text='Account' modifyClasses='mb-6' />

            {/* the navigation menu */}
            <ul className='space-y-3'>
               {accountOptions.map((option, i) => {
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

export default DashboardNavContent;
