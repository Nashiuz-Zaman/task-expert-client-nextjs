'use client';

// react
import { useCallback } from 'react';

// redux
import { useDispatch } from 'react-redux';
import { setDashboardNavOptions } from '@/lib/redux/features/dashboard/dashboardSlice';

const useGetDashboardNavOptions = () => {
   const dispatch = useDispatch();

   const getDashboardNavOptions = useCallback(
      name => {
         const profileRoute = `/profile/${name
            .toLowerCase()
            .split(' ')
            .join('-')}`;

         const navOptions = {
            profileRoute,
            options: [
               {
                  text: 'Profile',
                  url: profileRoute,
               },
               {
                  text: 'Manage Tasks',
                  url: `${profileRoute}/tasks`,
               },
            ],
         };
         console.log(navOptions);

         dispatch(setDashboardNavOptions(navOptions));
      },
      [dispatch]
   );

   return { getDashboardNavOptions };
};

export default useGetDashboardNavOptions;
