// react
import PropTypes from 'prop-types';

// next
import Link from 'next/link';

// hooks
import useFirebaseMethods from '@/hooks/useFirebaseMethods';
import useFormVisiblity from '@/hooks/useFormVisiblity';

// redux
import { useSelector } from 'react-redux';

const HeaderAuthBtns = ({ modifyClasses = '' }) => {
   const { profileData, userLoading } = useSelector(store => store.auth);
   const { openLoginFormWithBackdrop, openSignupFormWithBackdrop } =
      useFormVisiblity();
   const { logout } = useFirebaseMethods();

   // common btn classes
   const btnClasses = 'hover:text-primary transition-all duration-default';

   return (
      <div
         className={`flex ${
            profileData
               ? 'flex-col gap-2 sm:flex-row sm:gap-4'
               : 'flex-row gap-4'
         } justify-center items-center 2md:justify-end text-sm xs:text-base lg:text-lg font-medium ${modifyClasses}`}
      >
         {userLoading && <p className='text-primary'>Loading User...</p>}

         {/* if no user then login and registration btns are shown */}
         {!userLoading && !profileData && (
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
         {!userLoading && profileData && (
            <>
               <p>
                  Logged in as:{' '}
                  <span className='font-semibold'>{profileData.name}</span>
               </p>

               <Link
                  href={'/manage-tasks'}
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
   );
};

HeaderAuthBtns.propTypes = {
   modifyClasses: PropTypes.string,
};

export default HeaderAuthBtns;
