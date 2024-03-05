// react
import PropTypes from 'prop-types';

// next
import Image from 'next/image';

const ProfilePhoto = ({ imageSource, modifyClasses = '' }) => {
   return (
      <div
         className={`w-28 border border-neutral-200 mx-auto aspect-square rounded-full overflow-hidden ${modifyClasses}`}
      >
         {/* image */}
         <Image
            width={400}
            height={400}
            className='w-full h-full object-cover'
            src={imageSource}
            priority={true}
            alt='profile picture'
         />
      </div>
   );
};

ProfilePhoto.propTypes = {
   imageSource: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default ProfilePhoto;