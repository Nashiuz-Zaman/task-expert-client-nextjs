'use client';

// react
import PropTypes from 'prop-types';

// components
import DashboardMobileNav from '../DashboardMobileNav/DashboardMobileNav';
import UserProfile from '@/components/shared/UserProfile/UserProfile';

// hooks
import useFirebaseMethods from '@/hooks/useFirebaseMethods';

// redux
import { useSelector } from 'react-redux';

const DashboardHeader = ({ modifyClasses = '' }) => {
   const { profileData } = useSelector(store => store.auth);
   const { logout } = useFirebaseMethods();

   return (
      <header
         className={`h-[5.8rem] px-4 md:px-8 flex items-centers border-b border-lightBorder ${modifyClasses}`}
      >
         <div className='basis-full flex items-center justify-between'>
            <DashboardMobileNav modifyClasses='block lg:hidden' />

            {/* if user is truthy, show the userprofile */}
            {profileData && (
               <UserProfile
                  profile={profileData}
                  modifyClasses='ml-auto'
                  logoutFunction={logout}
               />
            )}
         </div>
      </header>
   );
};

DashboardHeader.propTypes = {
   modifyClasses: PropTypes.string,
};

export default DashboardHeader;
