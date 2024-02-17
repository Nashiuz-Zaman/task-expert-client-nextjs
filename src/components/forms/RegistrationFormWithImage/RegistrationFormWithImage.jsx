'use client';

// react
import PropTypes from 'prop-types';

// react-router
import Image from 'next/image';

// components
import RegistrationForm from './RegistrationForm/RegistrationForm';

const RegistrationFormWithImage = ({ imageSource }) => {
   return (
      <div
         className={`grid grid-cols-1 2md:grid-cols-[1fr_max-content] rounded-2xl overflow-hidden mx-auto w-[90%] xsm:w-max 2md:w-[90%] lg:w-[56rem] 2xl:w-[60rem] shadow-medium registration-custom-focus`}
      >
         {/* image */}
         <div className='hidden 2md:block w-full h-full overflow-hidden'>
            <Image
               width={700}
               height={500}
               className='!w-full !h-full !object-cover'
               src={imageSource}
               alt='cover image'
            />
         </div>

         {/* Registration form */}
         <div className='w-full flex items-center'>
            <RegistrationForm />
         </div>
      </div>
   );
};

RegistrationFormWithImage.propTypes = {
   imageSource: PropTypes.any,
};

export default RegistrationFormWithImage;
