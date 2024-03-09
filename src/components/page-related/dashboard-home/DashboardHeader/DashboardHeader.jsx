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
         className={`h-[3.5rem] md:h-[4rem] 2md:h-[5.8rem] px-4 md:px-8 flex items-centers border-b border-neutral-200 ${modifyClasses}`}
      >
         <div className='basis-full flex items-center justify-between'>
            <DashboardMobileNav modifyClasses='block 2xl:hidden' />

            {/* if user is truthy, show the userprofile */}
            {profileData && (
               <UserProfile
                  profileData={profileData}
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
