'use client';

// react imports
import PropTypes from 'prop-types';

// next
import Link from 'next/link';
import Image from 'next/image';

// data
import logoPrimary from '@/assets/websiteLogo/logo-primary.webp';
import logoWhite from '@/assets/websiteLogo/logo-white.webp';

const BrandLogo = ({
  modifyClasses = '',
  imageModifyClasses = '',
  theme = 'light',
}) => {
  
  return (
    <Link className={`block w-max h-full ${modifyClasses}`} href='/'>
      <Image
        style={{ width: 'auto' }}
        priority={true}
        src={theme === 'light' ? logoPrimary : logoWhite}
        alt='Company Logo'
        className={`block h-[3rem] ${imageModifyClasses}`}
      />
    </Link>
  );
};

BrandLogo.propTypes = {
  modifyClasses: PropTypes.string,
  imageModifyClasses: PropTypes.string,
  theme: PropTypes.bool,
};

export default BrandLogo;
