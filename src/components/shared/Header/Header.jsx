'use client';

// react
import PropTypes from 'prop-types';

// components
import BrandLogo from '@/components/shared/BrandLogo/Brandlogo';
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';
import MobileNav from '@/components/shared/MobileNav/MobileNav';

// redux
import useRedux from '@/hooks/useRedux';
import {
   setLoginFormOpen,
   setRegistrationFormOpen,
} from '@/lib/redux/features/form/formSlice';
import { setBackdropOpen } from '@/lib/redux/features/backdrop/backdropSlice';

const Header = ({ modifyClasses = '' }) => {
   const { dispatch, useSelector } = useRedux();
   const { profileData, appLoading } = useSelector(store => store.auth);

   const openLoginForm = e => {
      e.preventDefault();
      dispatch(setLoginFormOpen(true));
      dispatch(setBackdropOpen(true));
   };

   const openSignupForm = e => {
      e.preventDefault();
      dispatch(setRegistrationFormOpen(true));
      dispatch(setBackdropOpen(true));
   };

   return (
      <header className={`pt-customXsm pb-customXsm ${modifyClasses}`}>
         <InnerContainer>
            {/* login/ register/ account name */}
            <div className='flex gap-4 justify-center items-center 2md:justify-end lg:text-lg mb-customXsm 2md:mb-custom2xsm font-medium'>
               <button
                  onClick={openLoginForm}
                  className='hover:text-primary transition-all duration-default'
               >
                  Login
               </button>

               <button
                  onClick={openSignupForm}
                  className='hover:text-primary transition-all duration-default'
               >
                  Register
               </button>
            </div>

            <div className='grid grid-cols-[1fr_3fr_1fr] 2md:grid-cols-2 items-center'>
               {/* div for design purpose */}
               <div className='2md:hidden'>&nbsp;</div>

               {/* website logo */}
               <BrandLogo modifyClasses='h-[3rem] 2xl:h-[4rem] justify-self-center 2md:justify-self-start' />

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
