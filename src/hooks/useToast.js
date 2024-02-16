'use client';

// toastify
import { toast } from 'react-toastify';

const useToast = () => {
  const showToast = (message, type, modifyClasses) => {
    toast(message, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      type: type,
      className: `${modifyClasses}`,
    });
  };

  return { showToast };
};

export default useToast;
