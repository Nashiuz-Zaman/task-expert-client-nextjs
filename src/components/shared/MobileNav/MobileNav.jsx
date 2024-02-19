'use client';

// react
import PropTypes from 'prop-types';

// next
import Link from 'next/link';

// components
import MobileMenuCloseBtn from '@/components/shared/MobileMenuCloseBtn/MobileMenuCloseBtn';
import BrandLogo from '@/components/shared/BrandLogo/Brandlogo';
import MobileMenuBtn from '@/components/shared/MobileMenuBtn/MobileMenuBtn';
import ButtonBtn from '@/components/shared/ButtonBtn/ButtonBtn';

// hook
import useMobileNavigation from '@/hooks/useMobileNavigation';
import useEscapeClose from '@/hooks/useEscapeClose';
import useFirebaseMethods from '@/hooks/useFirebaseMethods';

// redux
import { useSelector } from 'react-redux';

// data
import { navOptions } from '@/uiData/navigationOptions';

const MobileNav = ({ modifyClasses = '' }) => {
   const { profileData } = useSelector(store => store.auth);
   const { mobileNavOpen, openMobileNav, closeMobileNav } =
      useMobileNavigation();
   const { logout } = useFirebaseMethods();

   // add escape key close functionality
   useEscapeClose(closeMobileNav);

   // one single place for the link classes
   const linkClasses =
      'leading-[normal] px-2 py-1 rounded-default text-white hover:text-primaryLightest font-medium transition-all duration-200';

   return (
      //  mobile nav starts here
      <div>
         <MobileMenuBtn size={35} openNavFunction={openMobileNav} />

         <nav
            className={`block h-screen fixed top-0 right-0 w-full sm:w-[50%] md:w-[40%] lg:w-[35%] 2xl:w-[20%] translate-x-full origin-center transition-all duration-default z-40 ${
               mobileNavOpen ? '!translate-x-0' : ''
            } p-8 bg-gradient-to-br from-primaryDark to bg-primary ${modifyClasses}`}
         >
            {/* X cross button to close nav */}
            <MobileMenuCloseBtn
               onClickFunction={closeMobileNav}
               modifyClasses='mb-customXs'
            />

            {/* brand logo */}
            <BrandLogo
               theme='dark'
               modifyClasses='block w-max mx-auto sm:mx-0 sm:mr-auto mb-customXs h-9'
               onClickFunction={closeMobileNav}
            />

            {/* regular part */}
            <ul className='flex flex-col items-center sm:items-start gap-3'>
               {/* this part will be always shown */}
               {navOptions?.map(option => {
                  return (
                     <li key={option.id} onClick={closeMobileNav}>
                        <Link className={linkClasses} href={option.url}>
                           {option.text}
                        </Link>
                     </li>
                  );
               })}
            </ul>

            {profileData && (
               <ButtonBtn
                  text='Sign Out'
                  colorTheme='outlined'
                  onClickFunction={() => {
                     logout();
                     closeMobileNav();
                  }}
                  modifyClasses='mt-customXs mx-auto sm:mx-0'
               />
            )}
         </nav>
      </div>
   );
};

MobileNav.propTypes = {
   modifyClasses: PropTypes.string,
};

export default MobileNav;
