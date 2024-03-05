'use client';

// react
import PropTypes from 'prop-types';

// components
import ButtonBtn from '@/components/buttons/ButtonBtn/ButtonBtn';
import InputField1 from '@/components/shared/InputField1/InputField1';
import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

const ProfileInfoChanger = ({ modifyClasses = '' }) => {
   return (
      <section className={`mx-5 ${modifyClasses}`}>
         <SectionHeading
            text='Change Information'
            modifyClasses='mb-4 text-center !text-2xl'
         />

         <form className='flex flex-col sm:flex-row gap-5 items-center'>
            <InputField1
               placeholder='New Username'
               modifyClasses='rounded-defaultLg'
            />

            <ButtonBtn text='Change' />
         </form>
      </section>
   );
};

ProfileInfoChanger.propTypes = {
   modifyClasses: PropTypes.string,
};

export default ProfileInfoChanger;
