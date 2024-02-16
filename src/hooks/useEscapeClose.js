'use client';

// react
import { useEffect } from 'react';

const useEscapeClose = (handler = null) => {
  useEffect(() => {
    const handleEscapeKey = e => {
      if (e.key === 'Escape') {
        handler && handler();
      }
    };

    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handler]);
};

export default useEscapeClose;
