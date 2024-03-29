'use client';

// react
import PropTypes from 'prop-types';

// next
import { useRouter } from 'next/navigation';

// components
import ButtonBtn from '@/components/buttons/ButtonBtn/ButtonBtn';
import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

// hooks
import useFirebaseMethods from '@/hooks/useFirebaseMethods';
import useAxios from '@/hooks/useAxios';

// redux
import useRedux from '@/hooks/useRedux';
import {
   setProfileData,
   setUserShouldExist,
} from '@/lib/redux/features/auth/authSlice';

// utils
import { showToast } from '@/utils/toastify';

const ProfileRemover = ({ modifyClasses = '' }) => {
   const { dispatch, useSelector } = useRedux();
   const { profileData } = useSelector(store => store.auth);
   const { deleteUserAccount } = useFirebaseMethods();
   const { axiosSecure } = useAxios();
   const router = useRouter();

   const handleDelete = async () => {
      try {
         const email = profileData?.email;
         router.push('/');

         const res = await deleteUserAccount();

         if (res.status === 'success') {
            const userDeleteRes = await axiosSecure.delete(`/users/${email}`);

            if (userDeleteRes.data.status === 'success') {
               dispatch(setProfileData(null));
               dispatch(setUserShouldExist(false));
               localStorage.removeItem('token');
               localStorage.removeItem('email');
               showToast('Account Deleted', 'success');
            }
         }
      } catch (error) {
         console.log(error);
         showToast('Something went wrong', 'error');
      }
   };

   return (
      <section className={`mx-5 ${modifyClasses}`}>
         <SectionHeading
            text='Delete Account'
            modifyClasses='mb-4 text-center !text-2xl sm:text-left'
         />

         <div className='flex flex-col sm:flex-row gap-8 items-center sm:justify-between 2md:flex-col'>
            <p className='text-neutral-500 font-medium leading-relaxed text-center sm:text-left sm:w-[25rem] 2md:w-full'>
               <span className='text-red-600 font-bold'>Warning!</span> If you
               delete your account, the action cannot be undone
            </p>

            <ButtonBtn
               onClickFunction={handleDelete}
               text='Delete Account'
               modifyClasses='2md:mr-auto'
               colorTheme='danger'
            />
         </div>
      </section>
   );
};

ProfileRemover.propTypes = {
   modifyClasses: PropTypes.string,
};

export default ProfileRemover;
