'use client';

// hook
import useAxios from './useAxios';
import useToast from './useToast';

// redux
import useRedux from './useRedux';
import { setTotalTasks } from '@/lib/redux/features/task/taskSlice';

const useMethodsForTaskDatabase = () => {
   const { dispatch, useSelector } = useRedux();
   const { profileData } = useSelector(store => store.auth);
   const { axiosCustom } = useAxios();
   const { showToast } = useToast();

   const createTask = async newTaskInfo => {
      const res = await axiosCustom.post(`/tasks`, newTaskInfo);
      if (res.data.success) {
         showToast('Todo Added Successfully', 'success');
         // closeCreateForm();
         dispatch(setTotalTasks(res.data.updatedTasks));
      }
      return;
   };

   const sortToLatest = arr => {
      const sortedArr = [...arr].sort(
         (a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated)
      );

      return sortedArr;
   };

   const updateTasks = async (draggedTaskId, updatedStatus, tasks) => {
      // find latest time
      const lastUpdated = new Date().toISOString();

      // create a new array
      const updatedTasks = tasks.map(task => {
         return task._id === draggedTaskId
            ? { ...task, statusLevel: updatedStatus, lastUpdated }
            : task;
      });

      // update redux task state with new array
      dispatch(setTotalTasks(updatedTasks));

      // send the update information to the database
      const updatedTask = {
         _id: draggedTaskId,
         statusLevel: updatedStatus,
         lastUpdated,
      };

      const res = await axiosCustom.patch(
         `/tasks/update/${draggedTaskId}`,
         updatedTask
      );

      // show success toast on success
      if (res.data.success) {
         showToast('Tasks Updated Successfully', 'success');

         dispatch(setTotalTasks(res.data.updatedTasks));
         return true;
      }

      return false;
   };

   const deleteTask = async (_id, tasks) => {
      const remainingTasks = tasks.filter(task => task._id !== _id);
      dispatch(setTotalTasks(remainingTasks));

      const res = await axiosCustom.delete(
         `/tasks/delete/${_id}?email=${profileData.email}`
      );
      if (res.data.success) {
         showToast('Task Deleted Successfully', 'success');
         dispatch(setTotalTasks(res.data.updatedTasks));
      }
      return;
   };

   return {
      sortToLatest,
      updateTasks,
      deleteTask,
      createTask,
   };
};

export default useMethodsForTaskDatabase;
