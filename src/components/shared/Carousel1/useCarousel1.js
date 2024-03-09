// react
import { useEffect, useState } from "react";

const useCarousel1 = (imagesData, interval = 3000) => {
  const lastSlide = imagesData.length - 1;
  const [curSlide, setCurSlide] = useState(0);
  const prevSlide = curSlide === 0 ? -1 : curSlide - 1;
  const nextSlide = curSlide === lastSlide ? -1 : curSlide + 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurSlide((prev) => {
        return prev === lastSlide ? 0 : prev + 1;
      });

      clearTimeout(timer);
    }, interval);

    return () => {
      clearTimeout(timer);
    };
  }, [curSlide, lastSlide, interval]);

  // go to next slide
  const goNextSlide = () => {
    if (curSlide !== lastSlide) {
      setCurSlide((prev) => prev + 1);
    }
  };

  // go to prev slide
  const goPrevSlide = () => {
    if (curSlide !== 0) {
      setCurSlide((prev) => prev - 1);
    }
  };

  return {
    curSlide,
    setCurSlide,
    goNextSlide,
    goPrevSlide,
    prevSlide,
    nextSlide,
    lastSlide,
  };
};

export default useCarousel1;
