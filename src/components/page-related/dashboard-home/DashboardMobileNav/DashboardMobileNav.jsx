'use client';

// react
import PropTypes from 'prop-types';

// next
import Link from 'next/link';

// components
import MobileMenuCloseBtn from '@/components/shared/MobileMenuCloseBtn/MobileMenuCloseBtn';
import MobileMenuBtn from '@/components/shared/MobileMenuBtn/MobileMenuBtn';
import ButtonBtn from '@/components/shared/ButtonBtn/ButtonBtn';
import BrandLogo from '@/components/shared/BrandLogo/Brandlogo';

// hook
import useDashboardMobileNav from '@/hooks/useDashboardMobileNav';
import useEscapeClose from '@/hooks/useEscapeClose';
import useFirebaseMethods from '@/hooks/useFirebaseMethods';

// redux
import { useSelector } from 'react-redux';

const DashboardMobileNav = ({
   modifyClasses = '',
   MenuBtnModifyClasses = '',
}) => {
   // initial functions and data extraction
   const {
      dashboardMobileNavOpen,
      openDashboardMobileNav,
      closeDashboardMobileNav,
   } = useDashboardMobileNav();
   const { logout } = useFirebaseMethods();
   const { dashboardNavOptions } = useSelector(store => store.dashboard);

   // add escape key close functionality
   useEscapeClose(closeDashboardMobileNav);

   // common link casses
   const linkClasses =
      'leading-[normal] px-2 py-1 rounded-default text-white hover:text-primaryLightest font-medium transition-all duration-200';

   return (
      <div className={`${modifyClasses}`}>
         <MobileMenuBtn
            modifyClasses={MenuBtnModifyClasses}
            theme='dark'
            openNavFunction={openDashboardMobileNav}
         />

         {/* mobile navigation */}
         <nav
            className={`block h-screen fixed top-0 left-0 w-full sm:w-[50%] md:w-[40%] lg:w-[35%] 2xl:w-[20%] -translate-x-full origin-center transition-all duration-default z-40 overflow-x-hidden ${
               dashboardMobileNavOpen ? '!translate-x-0' : ''
            } p-8 bg-blackLight`}
         >
            {/* close nav button */}
            <MobileMenuCloseBtn
               onClickFunction={closeDashboardMobileNav}
               modifyClasses='mb-customXs'
            />

            {/* brandlogo */}
            <BrandLogo
               onClickFunction={closeDashboardMobileNav}
               theme='dark'
               modifyClasses='h-[3rem] mb-customXs'
            />

            {/* the navigation menu */}
            <ul className='flex flex-col gap-3'>
               {/* this part will be always shown */}
               {dashboardNavOptions?.options?.map((option, i) => {
                  return (
                     <li key={i} onClick={closeDashboardMobileNav}>
                        <Link className={linkClasses} href={option.url}>
                           {option.text}
                        </Link>
                     </li>
                  );
               })}
            </ul>

            {/* signout button */}
            <ButtonBtn
               text='Sign Out'
               colorTheme='outlined'
               onClickFunction={() => {
                  logout();
                  closeDashboardMobileNav();
               }}
               modifyClasses='mt-customXs'
            />
         </nav>
      </div>
   );
};

DashboardMobileNav.propTypes = {
   modifyClasses: PropTypes.string,
   MenuBtnModifyClasses: PropTypes.string,
};

export default DashboardMobileNav;
