'use client';

// react
import PropTypes from 'prop-types';

// components
import ButtonBtn from '@/components/buttons/ButtonBtn/ButtonBtn';
import InputField1 from '@/components/shared/InputField1/InputField1';
import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

// hooks
import useFirebaseMethods from '@/hooks/useFirebaseMethods';

// redux
import useRedux from '@/hooks/useRedux';
import { setProfileData } from '@/lib/redux/features/auth/authSlice';

// utils
import { axiosSecure } from '@/hooks/useAxios';
import { showToast } from '@/utils/toastify';


const ProfileInfoChanger = ({ modifyClasses = '' }) => {
   const { dispatch, useSelector } = useRedux();
   const { profileData } = useSelector(store => store.auth);
   const { updateFirebaseProfile } = useFirebaseMethods();

   // name change function
   const handleNameChange = async e => {
    
         e.preventDefault();
         const username = e.target.name;
         await updateFirebaseProfile(username, profileData?.imageSource);

         const updatedUser = {
            name:username,
         };

         const res = await axiosSecure.patch(
            `/users/${profileData.email}`,
            updatedUser
         );

         if (res.data.status === 'success') {
            showToast('Username Changed', 'success');
            dispatch(setProfileData(res.data.user));
            e.target.reset();
         }
     
   };

   return (
      <section
         className={`mx-5 pb-8 border-b border-neutral-200 ${modifyClasses}`}
      >
         <SectionHeading
            text='Change Information'
            modifyClasses='mb-8 text-center !text-2xl sm:text-left'
         />

         <form
            onSubmit={handleNameChange}
            className='flex flex-col sm:flex-row gap-5 items-center sm:items-end mb-8 sm:w-[25rem] 2md:w-full lg:w-[25rem]'
         >
            <InputField1
               label='New Username'
               placeholder='username'
               name='name'
               modifyClasses='rounded-defaultLg text-center sm:text-left'
            />

            <ButtonBtn text='Save' modifyClasses='!px-4 !py-2' />
         </form>

         <form className='flex flex-col sm:flex-row gap-5 items-center sm:items-end sm:w-[25rem] 2md:w-full lg:w-[25rem]'>
            <InputField1
               label='New Password'
               placeholder='password'
               name='password'
               modifyClasses='rounded-defaultLg text-center sm:text-left'
            />

            <ButtonBtn text='Save' modifyClasses='!px-4 !py-2' />
         </form>
      </section>
   );
};

ProfileInfoChanger.propTypes = {
   modifyClasses: PropTypes.string,
};

export default ProfileInfoChanger;
