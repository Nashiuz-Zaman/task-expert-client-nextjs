import PropTypes from 'prop-types';

// custom hook
import useCarousel2 from './useCarousel2';

const Carousel2 = ({ imagesData, interval = 3000, modifyClasses = '' }) => {
   const { curSlide } = useCarousel2(imagesData, interval);

   return (
      <div
         className={`w-full aspect-[16/10] relative ${modifyClasses}`}
         style={{
            perspective: '1100px',
            perspectiveOrigin: 'center',
         }}
      >
         {/* background slides */}
         {imagesData &&
            imagesData.map(imageData => {
               const { id, imageSource } = imageData;

               return (
                  <div
                     key={id}
                     style={{ background: `url(${imageSource})` }}
                     className={`absolute rounded-xl w-full h-full -z-10 top-0 left-0 !bg-cover !bg-center duration-500 ${
                        id === curSlide ? 'opacity-100' : 'opacity-0'
                     }`}
                  ></div>
               );
            })}
      </div>
   );
};

Carousel2.propTypes = {
   imagesData: PropTypes.array,
   interval: PropTypes.number,
   modifyClasses: PropTypes.string,
};

export default Carousel2;
