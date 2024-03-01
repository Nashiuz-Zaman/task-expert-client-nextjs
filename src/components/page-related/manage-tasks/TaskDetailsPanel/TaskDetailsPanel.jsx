'use client';

// components
import CloseBtn from '../../../buttons/CloseBtn/CloseBtn';
import PriorityCard from '@/components/shared/PriorityCard/PriorityCard';

// hooks
import useClickOutside from '@/hooks/useClickOutside';
import useEscapeClose from '@/hooks/useEscapeClose';

// redux
import useRedux from '@/hooks/useRedux';
import {
   setShowTaskDetailsPanel,
   setTaskDetails,
} from '@/lib/redux/features/task/taskSlice';

// utils
import { getDayMonthNameYearStr } from '@/utils/dateTimeMethods';
import { Icon } from '@iconify/react';
import TimeRemainingCard from '@/components/shared/TimeRemainingCard/TimeRemainingCard';

const TaskDetailsPanel = () => {
   const { dispatch, useSelector } = useRedux();
   const { taskDetails, showTaskDetailsPanel } = useSelector(
      store => store.task
   );

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
            } transition-all !duration-default shadow-medium fixed top-1/2 w-[90%] sm:w-[30rem] h-[30rem] aspect-square -translate-y-1/2 left-1/2 -translate-x-1/2 py-6 px-4 bg-white z-40 rounded-xl task-details-panel-focus`}
         >
            <CloseBtn
               onClickFunction={() => {
                  dispatch(setShowTaskDetailsPanel(false));
               }}
            />
            <PriorityCard
               priorityLevel={taskDetails.priorityLevel}
               modifyClasses='mb-2'
            />
            <h3 className='text-xl lg:text-2xl leading-none font-semibold mb-2'>
               {taskDetails.title}
            </h3>

            <div className='text-sm md:text-base 3xl:text-lg text-neutral-500 flex items-center gap-1'>
               <Icon icon='ph:calendar-fill' className='block' />
               <p>
                  <span className='font-medium'>Deadline: </span>
                  <span>{getDayMonthNameYearStr(taskDetails.deadline)}</span>
               </p>
            </div>

            <TimeRemainingCard
               text='Finish By: '
               modifyClasses='text-neutral-500 text-sm md:text-base 3xl:text-lg'
               deadline={taskDetails.deadline}
            />
         </div>
      );
   }
};

export default TaskDetailsPanel;
