'use client';

// react
import { useCallback } from 'react';

const useStopScrolling = () => {
   const stopYAxisScrolling = useCallback((condition = false) => {
      if (condition) {
         document.body.style.overflowY = 'hidden';
         return;
      }

      document.body.style.overflowY = 'auto';
   }, []);

   return { stopYAxisScrolling };
};

export default useStopScrolling;
