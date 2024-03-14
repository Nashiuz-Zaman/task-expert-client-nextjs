// react
import PropTypes from 'prop-types';

// next
import Image from 'next/image';
import { Icon } from '@iconify/react';

const ProfilePhoto = ({ imageSource, modifyClasses = '' }) => {
   return (
      <div
         className={`w-32 border border-neutral-300 mx-auto aspect-square rounded-full overflow-hidden ${modifyClasses}`}
      >
         {!imageSource && (
            <div className='w-full h-full p-4 flex items-center justify-center'>
               <Icon
                  className='w-full h-full text-neutral-300'
                  icon='mingcute:user-3-fill'
               />
            </div>
         )}


         {/* image */}
         {imageSource && (
            <Image
               width={400}
               height={400}
               className='w-full h-full object-cover'
               src={imageSource}
               alt='profile picture'
            />
         )}
      </div>
   );
};

ProfilePhoto.propTypes = {
   imageSource: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default ProfilePhoto;
