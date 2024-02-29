'use client';

// react
import PropTypes from 'prop-types';

// components
import CloseBtn from './../../../shared/CloseBtn/CloseBtn';
import Priority from '@/components/shared/Priority/Priority';

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

const TaskDetailsPanel = props => {
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
            } transition-all !duration-default shadow-medium fixed top-1/2 h-[30rem] aspect-square -translate-y-1/2 left-1/2 -translate-x-1/2 py-6 px-4 bg-white z-40 rounded-xl task-details-panel-focus`}
         >
            <CloseBtn
               onClickFunction={() => {
                  dispatch(setShowTaskDetailsPanel(false));
               }}
            />
            <Priority
               priorityLevel={taskDetails.priorityLevel}
               modifyClasses='mb-2'
            />
            <h3 className='text-2xl leading-none font-semibold mb-2'>
               {taskDetails.title}
            </h3>

            <p className='text-neutral-500 text-lg'>
               <span className='font-semibold'>Deadline:</span>{' '}
               {getDayMonthNameYearStr(taskDetails.deadline)}
            </p>
         </div>
      );
   }
};

TaskDetailsPanel.propTypes = {};

export default TaskDetailsPanel;
