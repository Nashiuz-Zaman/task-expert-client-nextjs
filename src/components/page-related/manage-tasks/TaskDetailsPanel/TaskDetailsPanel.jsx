'use client';

// icons
import { Icon } from '@iconify/react';

// components
import CloseBtn from '../../../buttons/CloseBtn/CloseBtn';
import PriorityCard from '@/components/shared/PriorityCard/PriorityCard';
import TimeRemainingCard from '@/components/shared/TimeRemainingCard/TimeRemainingCard';
import DeleteBtn from '@/components/buttons/DeleteBtn/DeleteBtn';

// hooks
import useClickOutside from '@/hooks/useClickOutside';
import useEscapeClose from '@/hooks/useEscapeClose';
import useTaskDatabaseMethods from '@/hooks/useTaskDatabaseMethods';

// redux
import useRedux from '@/hooks/useRedux';
import {
   setShowTaskDetailsPanel,
   setTaskDetails,
} from '@/lib/redux/features/task/taskSlice';

// utils
import { getDayMonthNameYearStr } from '@/utils/dateTimeMethods';

const TaskDetailsPanel = () => {
   const { dispatch, useSelector } = useRedux();
   const { deleteTask } = useTaskDatabaseMethods();
   const { taskDetails, showTaskDetailsPanel, totalTasks, pinnedTasks } =
      useSelector(store => store.task);

   const closeTaskDetailsPanel = () => {
      dispatch(setShowTaskDetailsPanel(false));
      dispatch(setTaskDetails(null));
   };

   const handleClickOutside = e => {
      if (!e.target.closest('.task-details-panel-focus')) {
         closeTaskDetailsPanel();
      }
   };

   useClickOutside(showTaskDetailsPanel, handleClickOutside);
   useEscapeClose(closeTaskDetailsPanel);

   if (taskDetails) {
      return (
         <div
            className={`${
               showTaskDetailsPanel
                  ? 'opacity-100 visible'
                  : 'opacity-0 collapse'
            } transition-all !duration-default shadow-small border border-neutral-300 fixed top-1/2 w-[90%] sm:w-[30rem] -translate-y-1/2 left-1/2 -translate-x-1/2 p-6 bg-white z-40 rounded-xl task-details-panel-focus`}
         >
            {/* close button */}
            <CloseBtn
               modifyClasses='bg-primaryLight text-white text-xl rounded-defaultLg p-1 mb-3'
               onClickFunction={() => {
                  dispatch(setShowTaskDetailsPanel(false));
               }}
            />

            {/* title */}
            <h3 className='text-xl lg:text-2xl !leading-none font-extrabold mb-5'>
               {taskDetails.title}
            </h3>

            {/* priority card */}
            <PriorityCard
               priorityLevel={taskDetails.priorityLevel}
               modifyClasses='mb-4'
            />

            {/* deadline  */}
            <div className='text-sm md:text-base 3xl:text-lg flex items-center gap-1 mb-1'>
               <Icon icon='ph:calendar-fill' className='block' />
               <p className='font-semibold'>
                  <span>Deadline: </span>
                  <span>{getDayMonthNameYearStr(taskDetails.deadline)}</span>
               </p>
            </div>

            {/* time remaining */}

            <TimeRemainingCard
               text='Time Left: '
               modifyClasses='text-sm font-semibold md:text-base 3xl:text-lg mb-7'
               deadline={taskDetails.deadline}
            />

            {/* description */}

            <div className='h-[10rem] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-white mb-5'>
               <h4 className='text-lg lg:text-xl font-extrabold mb-2'>
                  Description
               </h4>
               <p className='lg:text-lg font-medium'>
                  {taskDetails.description}
               </p>
            </div>

            {/* buttons */}

            <DeleteBtn
               onClickFunction={() => {
                  deleteTask(taskDetails._id, totalTasks, pinnedTasks);
                  closeTaskDetailsPanel();
               }}
               text='Delete Task'
               modifyClasses='font-medium w-max ml-auto'
            />
         </div>
      );
   }
};

export default TaskDetailsPanel;
