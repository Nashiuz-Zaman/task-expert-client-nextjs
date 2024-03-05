'use client';

// react
import PropTypes from 'prop-types';

// component
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';

// redux
import useRedux from '@/hooks/useRedux';
import FileUploadBtn from './../../../buttons/FileUploadBtn/FileUploadBtn';
import { Icon } from '@iconify/react';

const ProfileInformation = ({ modifyClasses = '' }) => {
   const { useSelector } = useRedux();
   const { profileData } = useSelector(store => store.auth);

   return (
      <div className={`p-5 ${modifyClasses}`}>
         <ProfilePhoto
            imageSource={profileData?.imageSource}
            modifyClasses='mb-6'
         />

         <FileUploadBtn modifyClasses='w-max mx-auto' colorTheme='primaryOutlined'>
            <Icon icon='mdi:camera' /> <span>Upload New Photo</span>
         </FileUploadBtn>
      </div>
   );
};

ProfileInformation.propTypes = {
   modifyClasses: PropTypes.string,
};

export default ProfileInformation;
