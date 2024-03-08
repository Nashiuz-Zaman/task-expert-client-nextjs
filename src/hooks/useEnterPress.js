'use client';

// react
import { useEffect } from 'react';

const useEnterPress = (condition, callbackFunc = null) => {
   useEffect(() => {
      let eventTimer;
      let handler;
 
      if (condition) {
         handler = e => {
            if (e.key.toLowerCase() === 'enter') {
               e.preventDefault();         
               callbackFunc && callbackFunc();
            }
         };

         eventTimer = setTimeout(() => {
            window.addEventListener('keydown', handler);
            clearTimeout(eventTimer);
         }, 150);
      } else {
         window.removeEventListener('keydown', handler);
      }

      return () => {
         clearTimeout(eventTimer);
         window.removeEventListener('keydown', handler);
      };
   }, [condition, callbackFunc]);
};

export default useEnterPress;
