// react
import PropTypes from 'prop-types';

// icon
import { Icon } from '@iconify/react';

const ProfilePhotoChangeBtn = ({
   colorTheme = 'primary',
   setSelectedImage,
   setFile,
   text,
   modifyClasses = '',
}) => {
   const handleFileChange = e => {
      const file = e.target.files[0];
      setFile(file);

      if (file) {
         const reader = new FileReader();

         reader.onload = e => {
            const imageData = e.target.result;
            setSelectedImage(imageData);
         };

         reader.readAsDataURL(file);
      }
   };

   const colorThemeClass = `${colorTheme}Classes`;

   return (
      <div
         className={`rounded-defaultLg border transition-all duration-default px-3 py-2 cursor-pointer ${colorThemeClass} ${modifyClasses}`}
      >
         <label style={{ fontSize: 'inherit' }} className='cursor-pointer'>
            {!text && (
               <Icon style={{ fontSize: 'inherit' }} icon='mdi:camera' />
            )}

            {text && (
               <div
                  style={{ fontSize: 'inherit' }}
                  className='flex w-full items-center justify-center gap-2'
               >
                  <Icon icon='mdi:camera' />
                  <span>{text}</span>
               </div>
            )}

            <input
               onChange={handleFileChange}
               className='hidden'
               type='file'
               name='file'
            />
         </label>
      </div>
   );
};

ProfilePhotoChangeBtn.propTypes = {
   text: PropTypes.string,
   colorTheme: PropTypes.string,
   setFile: PropTypes.func,
   setSelectedImage: PropTypes.func,
   modifyClasses: PropTypes.string,
};

export default ProfilePhotoChangeBtn;
