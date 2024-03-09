'use client';

// react
import PropTypes from 'prop-types';

// next
import Image from 'next/image';

// custom hook
import useCarousel1 from './useCarousel1';

const Carousel1 = ({ imagesData, interval =3000 }) => {
   const { curSlide, prevSlide, nextSlide } = useCarousel1(imagesData,interval);

   return (
      <div
         className='w-full aspect-[16/10] relative'
         style={{
            perspective: '1100px',
            perspectiveOrigin: 'center',
         }}
      >
         {/* forward slides */}
         {imagesData &&
            imagesData.map(imageData => {
               const { id, imageSource } = imageData;

               return (
                  <div
                     key={id}
                     style={{
                        backfaceVisibility: 'hidden',
                        MozBackfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        top: '50%',
                        transform: `translateY(-50%) translateX(${
                           id === curSlide
                              ? '50%'
                              : id < curSlide
                              ? '0%'
                              : id > curSlide
                              ? `300%`
                              : 'auto'
                        }) rotateY(${
                           id === curSlide
                              ? '0deg'
                              : id > curSlide
                              ? '-60deg'
                              : id < curSlide
                              ? '60deg'
                              : '0'
                        })`,
                     }}
                     className={`absolute shadow-medium rounded-xl overflow-hidden ease-out ${
                        id === curSlide || id === nextSlide || id === prevSlide
                           ? 'transition-all duration-500 opacity-100 visible z-30'
                           : 'transition-all duration-500 opacity-0 collapse z-10'
                     } ${id === curSlide ? 'w-1/2' : 'w-1/4'} aspect-[16/10]`}
                  >
                     <Image
                        style={{
                           backfaceVisibility: 'hidden',
                           MozBackfaceVisibility: 'hidden',
                           WebkitBackfaceVisibility: 'hidden',
                        }}
                        width={640}
                        height={450}
                        alt={'carousel image'}
                        src={imageSource}
                        className='w-full h-full object-cover'
                     />
                  </div>
               );
            })}
      </div>
   );
};

Carousel1.propTypes = {
   imagesData: PropTypes.array,
   interval: PropTypes.number
};

export default Carousel1;
