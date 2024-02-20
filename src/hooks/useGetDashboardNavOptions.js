'use client';

// react
import { useCallback } from 'react';

// iconify
import { Icon } from '@iconify/react';

// redux
import { useDispatch } from 'react-redux';
import { setDashboardNavOptions } from '@/lib/redux/features/dashboard/dashboardSlice';

const useGetDashboardNavOptions = () => {
   const dispatch = useDispatch();

   const getDashboardNavOptions = useCallback(
      name => {
         const profileRoute = `/${name.toLowerCase().split(' ').join('-')}`;

         const navOptions = {
            profileRoute,
            options: [
               {
                  text: 'Manage Tasks',
                  icon: <Icon icon='fluent:tasks-app-20-filled' />,
                  url: `${profileRoute}/manage-tasks`,
               },
               {
                  text: 'Analytics',
                  icon: <Icon icon='solar:chart-2-bold' />,
                  url: `${profileRoute}/analytics`,
               },
            ],
            accountOptions: [
               {
                  text: 'Settings',
                  icon: <Icon icon='solar:settings-bold' />,
                  url: `${profileRoute}/settings`,
               },
            ],
         };

         dispatch(setDashboardNavOptions(navOptions));
      },
      [dispatch]
   );

   return { getDashboardNavOptions };
};

export default useGetDashboardNavOptions;
