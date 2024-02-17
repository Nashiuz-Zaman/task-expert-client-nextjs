'use client';

// react
import { useEffect } from 'react';

const useClickOutside = (condition, callbackFunc) => {
   useEffect(() => {
      let clickEventTimer;

      if (condition) {
         clickEventTimer = setTimeout(() => {
            window.addEventListener('click', callbackFunc);
            clearTimeout(clickEventTimer);
         }, 250);
      } else {
         window.removeEventListener('click', callbackFunc);
      }

      return () => {
         clearTimeout(clickEventTimer);
         window.removeEventListener('click', callbackFunc);
      };
   }, [condition, callbackFunc]);
};

export default useClickOutside;
