'use client';

// react
import PropTypes from 'prop-types';
import { useEffect } from 'react';

// next
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// components
import CloseBtn from '@/components/buttons/CloseBtn/CloseBtn';
import BrandLogo from '@/components/shared/BrandLogo/BrandLogo';
import MobileMenuBtn from '@/components/buttons/MobileMenuBtn/MobileMenuBtn';
import ButtonBtn from '@/components/buttons/ButtonBtn/ButtonBtn';

// hook
import useMobileNavigation from '@/hooks/useMobileNavigation';
import useEscapeClose from '@/hooks/useEscapeClose';
import useFirebaseMethods from '@/hooks/useFirebaseMethods';
import useClickOutside from '@/hooks/useClickOutside';
import useFormVisiblity from '@/hooks/useFormVisiblity';
import useStopScrolling from '@/hooks/useStopScrolling';

// redux
import { useSelector } from 'react-redux';

const MobileNav = ({ modifyClasses = '' }) => {
   const { profileData } = useSelector(store => store.auth);
   const { mobileNavOpen, openMobileNav, closeMobileNav } =
      useMobileNavigation();
   const { logout } = useFirebaseMethods();
   const router = useRouter();
   const { openLoginFormWithBackdrop } = useFormVisiblity();
   const { stopYAxisScrolling } = useStopScrolling();

   useEffect(() => {
      stopYAxisScrolling(mobileNavOpen);
   }, [mobileNavOpen, stopYAxisScrolling]);

   const handleClickOutside = e => {
      if (!e.target.closest('.mobilenav-focus')) {
         closeMobileNav();
      }
   };

   useClickOutside(mobileNavOpen, handleClickOutside);
   useEscapeClose(closeMobileNav);

   // common classes
   const linkClasses =
      'leading-[normal] px-2 py-1 rounded-default text-neutral-500 hover:text-primary font-medium transition-all duration-default capitalize';

   return (
      //  mobile nav starts here
      <div className='mobilenav-focus'>
         <MobileMenuBtn openNavFunction={openMobileNav} />

         <nav
            className={`block h-screen fixed top-0 right-0 w-full sm:w-[50%] md:w-[40%] lg:w-[35%] 2xl:w-[20%] translate-x-full origin-center transition-all duration-default z-40 ${
               mobileNavOpen ? '!translate-x-0' : ''
            } p-8 bg-white ${modifyClasses}`}
         >
            {/* X cross button to close nav */}
            <CloseBtn
               onClickFunction={closeMobileNav}
               modifyClasses='mb-customXs'
            />

            {/* brand logo */}
            <BrandLogo
               modifyClasses='block w-max mx-auto sm:mx-0 sm:mr-auto mb-customXs h-9'
               onClickFunction={closeMobileNav}
            />

            {/* regular part */}
            <ul className='flex flex-col items-center sm:items-start gap-3'>
               <li onClick={closeMobileNav}>
                  <Link className={linkClasses} href={'/'}>
                     home
                  </Link>
               </li>

               <li>
                  <button
                     className={linkClasses}
                     onClick={() => {
                        if (!profileData) {
                           closeMobileNav();
                           openLoginFormWithBackdrop();
                           return;
                        }

                        router.push(`/manage-tasks`);
                        closeMobileNav();
                     }}
                  >
                     Dashboard
                  </button>
               </li>

               <li onClick={closeMobileNav}>
                  <Link
                     className={linkClasses}
                     href={'https://nashiuz-zaman.web.app/'}
                  >
                     Meet The Developer
                  </Link>
               </li>
            </ul>

            {profileData && (
               <ButtonBtn
                  text='Sign Out'
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
