'use client';

// react
import PropTypes from 'prop-types';

// components
import ButtonBtn from '@/components/buttons/ButtonBtn/ButtonBtn';
import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

const ProfileRemover = ({ modifyClasses = '' }) => {
   return (
      <section className={`mx-5 ${modifyClasses}`}>
         <SectionHeading
            text='Delete Account'
            modifyClasses='mb-4 text-center !text-2xl sm:text-left'
         />

         <div className='flex flex-col sm:flex-row gap-8 items-center sm:justify-between 2md:flex-col'>
            <p className='text-neutral-500 font-medium leading-relaxed text-center sm:text-left sm:w-[25rem] 2md:w-full'>
               <span className='text-red-600 font-bold'>Warning!</span> If you
               delete your account, the action cannot be undone.
            </p>

            <ButtonBtn text='Delete Account' modifyClasses='2md:mr-auto' colorTheme='danger' />
         </div>
      </section>
   );
};

ProfileRemover.propTypes = {
   modifyClasses: PropTypes.string,
};

export default ProfileRemover;
