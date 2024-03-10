// react
import { useEffect, useState } from 'react';

const useCarousel1 = (imagesData, interval = 3000) => {
   const lastIndex = imagesData.length - 1;
   const firstIndex = 0;
   const [centerSlide, setCenterSlide] = useState(firstIndex);
   const leftSlide = centerSlide === firstIndex ? lastIndex : centerSlide - 1;
   const rightSlide = centerSlide === lastIndex ? firstIndex : centerSlide + 1;

   useEffect(() => {
      const timer = setTimeout(() => {
         setCenterSlide(prev => {
            return prev === lastIndex ? 0 : prev + 1;
         });

         clearTimeout(timer);
      }, interval);

      return () => {
         clearTimeout(timer);
      };
   }, [centerSlide, lastIndex, interval]);

   // go to next slide
   const goNextSlide = () => {
      if (centerSlide !== lastIndex) {
         setCenterSlide(prev => prev + 1);
      }
   };

   // go to prev slide
   const goPrevSlide = () => {
      if (centerSlide !== 0) {
         setCenterSlide(prev => prev - 1);
      }
   };

   return {
      centerSlide,
      setCenterSlide,
      goNextSlide,
      goPrevSlide,
      leftSlide,
      rightSlide,
      lastIndex,
   };
};

export default useCarousel1;
