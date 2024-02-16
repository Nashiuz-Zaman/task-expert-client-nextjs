'use client';

// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  openNav,
  closeNav,
} from '@/lib/redux/features/mobileNav/mobileNavSlice';
import { setOpen } from '@/lib/redux/features/backdrop/backdropSlice';

const useMobileNavigation = () => {
  const mobileNavOpen = useSelector(store => store.mobileNav.mobileNavOpen);
  const dispatch = useDispatch();

  const openMobileNav = () => {
    dispatch(openNav());
    dispatch(setOpen(true));
  };
  const closeMobileNav = () => {
    dispatch(closeNav());
    dispatch(setOpen(false));
  };

  return { mobileNavOpen, openMobileNav, closeMobileNav };
};

export default useMobileNavigation;
