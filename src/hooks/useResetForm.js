'use client';

// react
import { useCallback } from 'react';

// redux
import { useDispatch } from 'react-redux';

const useResetForm = () => {
   const dispatch = useDispatch();

   const resetFormFieldsAndErrors = useCallback(
      (formElRef, setErrors) => {
         formElRef.current.reset();
         dispatch(setErrors([]));
      },
      [dispatch]
   );

   return { resetFormFieldsAndErrors };
};

export default useResetForm;
