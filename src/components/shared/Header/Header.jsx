'use client';

// react
import PropTypes from 'prop-types';

// next
import Link from 'next/link';

// components
import BrandLogo from '@/components/shared/BrandLogo/BrandLogo';
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';
import MobileNav from '@/components/shared/MobileNav/MobileNav';

// hooks
import useFormVisiblity from '@/hooks/useFormVisiblity';
import useFirebaseMethods from '@/hooks/useFirebaseMethods';

// redux
import { useSelector } from 'react-redux';

const Header = ({ modifyClasses = '' }) => {
   const { profileData } = useSelector(store => store.auth);
   const { dashboardRoute } = useSelector(store => store.dashboard);
   const { openLoginFormWithBackdrop, openSignupFormWithBackdrop } =
      useFormVisiblity();
   const { logout } = useFirebaseMethods();

   // common btn classes
   const btnClasses = 'hover:text-primary transition-all duration-default';

   return (
      <header className={`pt-customXs pb-customXs ${modifyClasses}`}>
         <InnerContainer>
            {/* login/ register/ account name */}
            <div
               className={`flex ${
                  profileData
                     ? 'flex-col gap-2 sm:flex-row sm:gap-4'
                     : 'flex-row gap-4'
               } justify-center items-center 2md:justify-end lg:text-lg mb-customXs 2md:mb-custom2xs font-medium`}
            >
               {/* if no user then login and registration btns are shown */}
               {!profileData && (
                  <>
                     <button
                        onClick={openLoginFormWithBackdrop}
                        className={btnClasses}
                     >
                        Login
                     </button>

                     <button
                        onClick={openSignupFormWithBackdrop}
                        className={btnClasses}
                     >
                        Register
                     </button>
                  </>
               )}

               {/* if user available then show name and go to dashboard and logout btns */}
               {profileData && (
                  <>
                     <p>
                        Logged in as:{' '}
                        <span className='font-semibold'>
                           {profileData.name}
                        </span>
                     </p>

                     <Link
                        href={dashboardRoute + '/manage-tasks'}
                        className={`${btnClasses} underline text-primary`}
                     >
                        Visit Dashboard
                     </Link>
                     <button onClick={logout} className={btnClasses}>
                        Sign Out
                     </button>
                  </>
               )}
            </div>

            <div className='grid grid-cols-[1fr_3fr_1fr] 2md:grid-cols-2 items-center'>
               {/* div for design purpose */}
               <div className='2md:hidden'>&nbsp;</div>

               {/* website logo */}
               <BrandLogo modifyClasses='justify-self-center 2md:justify-self-start' />

               {/* auth related options login/logout etc */}
               <div className='flex items-center gap-3 justify-self-end'>
                  {/* mobile nav button and mobile nav menu */}
                  <MobileNav />
               </div>
            </div>
         </InnerContainer>
      </header>
   );
};

Header.propTypes = {
   modifyClasses: PropTypes.string,
};

export default Header;
