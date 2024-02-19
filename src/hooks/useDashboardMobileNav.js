'use client';

// react
import { useSelector, useDispatch } from 'react-redux';

// redux
import { setDashboardMobileNavOpen } from '@/lib/redux/features/dashboard/dashboardSlice';
import { setBackdropOpen } from '@/lib/redux/features/backdrop/backdropSlice';

const useDashboardMobileNav = () => {
   const { dashboardMobileNavOpen } = useSelector(store => store.dashboard);
   const dispatch = useDispatch();

   const openDashboardMobileNav = () => {
      dispatch(setDashboardMobileNavOpen(true));
      dispatch(setBackdropOpen(true));
   };

   const closeDashboardMobileNav = () => {
      dispatch(setDashboardMobileNavOpen(false));
      dispatch(setBackdropOpen(false));
   };

   return {
      dashboardMobileNavOpen,
      openDashboardMobileNav,
      closeDashboardMobileNav,
   };
};

export default useDashboardMobileNav;
