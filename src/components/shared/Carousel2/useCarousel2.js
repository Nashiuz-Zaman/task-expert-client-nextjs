'use client'

// react
import { useEffect, useState } from "react";

const useCarousel2 = (imagesData, interval = 3000) => {
  const lastSlide = imagesData.length - 1;
  const [curSlide, setCurSlide] = useState(0);

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

  return {
    curSlide,
  };
};

export default useCarousel2;
