'use client';

// react
import PropTypes from 'prop-types';
import { useState } from 'react';

// component
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import ProfilePhotoChangeBtn from '@/components/buttons/ProfilePhotoChangeBtn/ProfilePhotoChangeBtn';
import ButtonBtn from '@/components/buttons/ButtonBtn/ButtonBtn';

// hooks
import useFirebaseMethods from '@/hooks/useFirebaseMethods';
import useAxios from '@/hooks/useAxios';

// redux
import useRedux from '@/hooks/useRedux';
import { setProfileData } from '@/lib/redux/features/auth/authSlice';

// utils
import { uploadImage } from '@/utils/uploadImage';
import { showToast } from '@/utils/toastify';
import { Icon } from '@iconify/react';

// img bb api
const imageUploadAPIKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
const imageUploadAPI = `https://api.imgbb.com/1/upload?key=${imageUploadAPIKey}`;

const ProfilePhotoChanger = ({ modifyClasses = '' }) => {
   const [file, setFile] = useState(null);
   const [selectedImage, setSelectedImage] = useState(null);
   const [loading, setLoading] = useState(false);
   const { dispatch, useSelector } = useRedux();
   const { profileData } = useSelector(store => store.auth);
   const { updateFirebaseProfile } = useFirebaseMethods();
   const {axiosSecure} = useAxios()

   const handleConfirm = async () => {
      setLoading(true);
      const res = await uploadImage(file, imageUploadAPI);
      if (res.data.success) {
         await updateFirebaseProfile(
            profileData?.name,
            res.data.data.display_url
         );

         const updatedUser = {
            imageSource: res.data.data.display_url,
         };

         //  user update api call
         const userUpdateRes = await axiosSecure.patch(
            `/users/${profileData?.email}`,
            updatedUser
         );

         if (userUpdateRes.data.status === 'success') {
            dispatch(setProfileData(userUpdateRes.data.user));
            showToast('Photo Updated', 'success');
            setSelectedImage(null)
            setFile(null)
            setLoading(false);
         }
      }
   };

   return (
      <section
         className={`mx-5 border-b border-neutral-200 pb-8 2md:pb-0 2md:border-b-0 2md:border-r ${modifyClasses}`}
      >
         <div className='relative w-max mx-auto'>
            <ProfilePhoto
               imageSource={
                  selectedImage ? selectedImage : profileData?.imageSource
               }
               modifyClasses={`mb-5 2md:mb-8 ${
                  loading ? 'opacity-30' : 'opacity-100'
               }`}
            />

            <ProfilePhotoChangeBtn
               setFile={setFile}
               colorTheme='whiteNeutral'
               setSelectedImage={setSelectedImage}
               modifyClasses='absolute -bottom-4 right-3'
            />

            {loading && (
               <Icon
                  className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-4xl text-blackLight'
                  icon='eos-icons:bubble-loading'
               />
            )}
         </div>

         {selectedImage && (
            <ButtonBtn
               onClickFunction={handleConfirm}
               modifyClasses='min-w-max mx-auto'
               text='Confirm'
            />
         )}
      </section>
   );
};

ProfilePhotoChanger.propTypes = {
   modifyClasses: PropTypes.string,
};

export default ProfilePhotoChanger;
