// react imports
import PropTypes from 'prop-types';

// next
import Link from 'next/link';
import Image from 'next/image';

// data
import logoPrimary from '@/assets/websiteLogo/logo-primary.webp';
import logoWhite from '@/assets/websiteLogo/logo-white.webp';

const BrandLogo = ({
   onClickFunction = null,
   modifyClasses = '',
   theme = 'light',
}) => {
   return (
      <Link onClick={onClickFunction} className={`block w-max ${modifyClasses}`} href='/'>
         <Image
            width={500}
            height={200}
            style={{ width: 'auto', height: 'inherit' }}
            priority={true}
            src={theme === 'light' ? logoPrimary : logoWhite}
            alt='Company Logo'
            className='block'
            quality={100}
         />
      </Link>
   );
};

BrandLogo.propTypes = {
   onClickFunction: PropTypes.func,
   modifyClasses: PropTypes.string,
   theme: PropTypes.string,
};

export default BrandLogo;
