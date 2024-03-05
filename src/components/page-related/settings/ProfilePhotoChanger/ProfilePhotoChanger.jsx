'use client';

// react
import PropTypes from 'prop-types';

// icons
import { Icon } from '@iconify/react';

// component
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import FileUploadBtn from '../../../buttons/FileUploadBtn/FileUploadBtn';

// redux
import useRedux from '@/hooks/useRedux';

const ProfilePhotoChanger = ({ modifyClasses = '' }) => {
   const { useSelector } = useRedux();
   const { profileData } = useSelector(store => store.auth);

   return (
      <section className={`mx-5 border-b border-neutral-200 pb-8 ${modifyClasses}`}>
         <ProfilePhoto
            imageSource={profileData?.imageSource}
            modifyClasses='mb-5'
         />

         <FileUploadBtn
            modifyClasses='w-max mx-auto'
            colorTheme='primaryOutlined'
         >
            <Icon icon='mdi:camera' /> <span>Upload New Photo</span>
         </FileUploadBtn>
      </section>
   );
};

ProfilePhotoChanger.propTypes = {
   modifyClasses: PropTypes.string,
};

export default ProfilePhotoChanger;
