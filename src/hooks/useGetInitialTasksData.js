'use client';

// react
import { useEffect } from 'react';

// hooks
import useAxios from './useAxios';

// redux
import useRedux from './useRedux';
import {
   setTotalTasks,
   setIsLoading,
} from '@/lib/redux/features/task/taskSlice';

const useGetInitialTasksData = () => {
   const { dispatch, useSelector } = useRedux();
   const { profileData } = useSelector(store => store.auth);
   const { axiosCustom } = useAxios();

   useEffect(() => {
      const getInitialTasks = async email => {
         dispatch(setIsLoading(true));
         const res = await axiosCustom.get(`/tasks?email=${email}`);
         dispatch(setIsLoading(false));

         if (res.data.success) {
            dispatch(setTotalTasks(res.data.data));
         }
      };

      if (profileData?.email) {
         getInitialTasks(profileData.email);
      }
   }, [axiosCustom, profileData, dispatch]);

   // useEffect(() => {
   //    if (isLoading) {
   //       dispatch(setIsLoading(true));
   //    }

   //    if (!isLoading) {
   //       dispatch(setTotalTasks(data));
   //       dispatch(setIsLoading(false));
   //    }
   // }, [dispatch, isLoading, data]);

   // return { isLoading };
};

export default useGetInitialTasksData;
