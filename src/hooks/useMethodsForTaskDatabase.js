'use client';

// react
import { useCallback } from 'react';

// hook
import useAxios from './useAxios';
import useToast from './useToast';

// redux
import useRedux from './useRedux';
import { setTotalTasks } from '@/lib/redux/features/task/taskSlice';

// data
import { statusOptions } from '@/uiData/formsUiData';

const useMethodsForTaskDatabase = () => {
   const { dispatch, useSelector } = useRedux();
   const { profileData } = useSelector(store => store.auth);
   const { axiosPublic } = useAxios();
   const { showToast } = useToast();

   const sortByLatest = useCallback(arr => {
      const sortedArr = [...arr].sort(
         (a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated)
      );

      return sortedArr;
   }, []);

   const createTask = async newTaskData => {
      const res = await axiosPublic.post(`/tasks`, newTaskData);
      if (res.data.success) {
         showToast('Todo Added Successfully', 'success');
         // closeCreateForm();
         dispatch(setTotalTasks(res.data.updatedTasks));
      }
      return;
   };

   const editTask = useCallback(
      async (editedTaskId, editedTaskData, totalTasks) => {
         // return an updated array with the new data for the edited task only
         const updatedTasksAfterEdit = totalTasks.map(task => {
            if (task._id === editedTaskId) {
               return { ...task, ...editedTaskData };
            }

            return task;
         });

         // set the new array to the total tasks state in redux
         dispatch(setTotalTasks(updatedTasksAfterEdit));

         // update in the database
         const res = await axiosPublic.put(
            `/tasks/edit/${editedTaskId}`,
            editedTaskData
         );

         if (res.data.status === 'success') {
            showToast('Task Edited', 'success');
         }
      },
      [axiosPublic, dispatch, showToast]
   );

   const updateTasks = async (draggedTaskId, statusLevel, totalTasks) => {
      // find latest time
      const lastUpdated = new Date().toISOString();
      const statusLevelText = statusOptions[statusLevel].text;

      // create a new array
      const updatedTasksAfterStatusChange = totalTasks.map(task => {
         return task._id === draggedTaskId
            ? { ...task, statusLevel, lastUpdated }
            : task;
      });

      // update redux task state with new array
      dispatch(setTotalTasks(sortByLatest(updatedTasksAfterStatusChange)));

      // send the update information to the database
      const updatedTask = {
         statusLevel,
         lastUpdated,
      };

      const res = await axiosPublic.patch(
         `/tasks/update/${draggedTaskId}`,
         updatedTask
      );

      // show success toast on success
      if (res.data.status === 'success') {
         showToast(`Task moved to ${statusLevelText}`, 'success');
         return true;
      }

      return false;
   };

   const deleteTask = async (_id, tasks) => {
      const remainingTasks = tasks.filter(task => task._id !== _id);
      dispatch(setTotalTasks(remainingTasks));

      const res = await axiosPublic.delete(
         `/tasks/delete/${_id}?email=${profileData.email}`
      );
      if (res.data.success) {
         showToast('Task Deleted Successfully', 'success');
         dispatch(setTotalTasks(res.data.updatedTasks));
      }
      return;
   };

   return {
      sortByLatest,
      updateTasks,
      deleteTask,
      createTask,
      editTask,
   };
};

export default useMethodsForTaskDatabase;
