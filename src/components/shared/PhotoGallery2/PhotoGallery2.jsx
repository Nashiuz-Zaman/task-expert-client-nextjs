// react
import PropTypes from 'prop-types';

// next
import Image from 'next/image';

const PhotoGallery2 = ({ imagesData, modifyClasses = '' }) => {
  return (
    <div className={`w-full md:w-[70%] lg:w-[50%] mx-auto ${modifyClasses}`}>
      {/* all images grid */}
      <div className='grid grid-cols-3 md:grid-cols-4 gap-5'>
        {imagesData &&
          imagesData.map((imageData, idx) => {
            const { imageSource, altText } = imageData;

            return (
              <div
                key={idx}
                className='w-full h-full aspect-square shadow-medium overflow-hidden'
              >
                <Image
                  width={300}
                  height={300}
                  className='block w-full h-full object-cover'
                  src={imageSource}
                  alt={altText}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

PhotoGallery2.propTypes = {
  imagesData: PropTypes.array,
  modifyClasses: PropTypes.string,
};

export default PhotoGallery2;
