'use client';

// redux
import { useSelector, useDispatch } from 'react-redux';

const useRedux = () => {
   const dispatch = useDispatch();

   return { dispatch, useSelector };
};

export default useRedux;
