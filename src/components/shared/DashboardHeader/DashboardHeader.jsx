'use client';

// react
import PropTypes from 'prop-types';

// components
import DashboardMobileNav from '../DashboardMobileNav/DashboardMobileNav';
import UserProfile from '../UserProfile/UserProfile';
import BrandLogo from '../BrandLogo/Brandlogo';

// hooks
import useFirebaseMethods from '@/hooks/useFirebaseMethods';

// redux
import { useSelector } from 'react-redux';

const DashboardHeader = ({ modifyClasses = '' }) => {
   const { profileData } = useSelector(store => store.auth);
   const { logout } = useFirebaseMethods();

   return (
      <header
         className={`h-[5.5rem] px-8 flex items-center bg-primary ${modifyClasses}`}
      >
         <div className='basis-full flex items-center justify-between'>
            <div className='flex gap-4 items-center sm:flex-row sm:gap-6'>
               <DashboardMobileNav
                  modifyClasses='block xl:hidden'                
               />

               <BrandLogo theme='dark' modifyClasses='h-[2.5rem]' />
            </div>

            {/* if user is truthy, show the userprofile */}
            {profileData && (
               <UserProfile profile={profileData} logoutFunction={logout} />
            )}
         </div>
      </header>
   );
};

DashboardHeader.propTypes = {
   modifyClasses: PropTypes.string,
};

export default DashboardHeader;
