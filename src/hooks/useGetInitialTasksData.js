'use client';

// react
import { useEffect } from 'react';

// hooks
import { axiosPublic } from './useAxios';

// redux
import useRedux from './useRedux';
import {
   setTotalTasks,
   setIsLoading,
} from '@/lib/redux/features/task/taskSlice';

const useGetInitialTasksData = () => {
   const { dispatch, useSelector } = useRedux();
   const { profileData } = useSelector(store => store.auth);

   useEffect(() => {
      const getInitialTasks = async email => {
         dispatch(setIsLoading(true));
         const res = await axiosPublic.get(`/tasks?email=${email}`);
         dispatch(setIsLoading(false));

         if (res.data.status === 'success') {
            dispatch(setTotalTasks(res.data.data));
         }
      };

      if (profileData?.email) {
         getInitialTasks(profileData.email);
      }
   }, [profileData, dispatch]);
};

export default useGetInitialTasksData;
