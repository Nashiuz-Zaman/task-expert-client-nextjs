'use client';

// react
import PropTypes from 'prop-types';

// components
import BrandLogo from '@/components/shared/BrandLogo/Brandlogo';
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';
import MobileNav from '@/components/shared/MobileNav/MobileNav';

// redux
// import { useSelector } from 'react-redux';

const Header = ({ modifyClasses = '' }) => {
  // const { profileData, appLoading } = useSelector(store => store.auth);

  return (
    <header className={`py-customXsm ${modifyClasses}`}>
      <InnerContainer>
        <div className='grid grid-cols-1 gap-customXsm sm:gap-0 sm:grid-cols-2 items-center'>
          {/* website logo */}
          <div className='justify-self-center sm:justify-self-start'>
            <BrandLogo modifyClasses='h-[3rem]' />
          </div>

          {/* auth related options login/logout etc */}
          <div className='flex items-center gap-3 justify-self-center sm:justify-self-end'>
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
