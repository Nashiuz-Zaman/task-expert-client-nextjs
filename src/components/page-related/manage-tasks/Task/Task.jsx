'use client';

// react
import { useState } from 'react';
import PropTypes from 'prop-types';

//  icons
import { Icon } from '@iconify/react';

// component
import PriorityCard from '@/components/shared/PriorityCard/PriorityCard';
import EditBtn from '@/components/buttons/EditBtn/EditBtn';
import DeleteBtn from '@/components/buttons/DeleteBtn/DeleteBtn';
import PinBtn from '@/components/buttons/PinBtn/PinBtn';
import ViewDetailsBtn from '@/components/buttons/ViewDetailsBtn/ViewDetailsBtn';
import DotsMenuBtn from '@/components/buttons/DotsMenuBtn/DotsMenuBtn';
import MenuPanel from '@/components/shared/MenuPanel/MenuPanel';
import MoveToOngoingBtn from '@/components/buttons/MoveToOngoingBtn/MoveToOngoingBtn';
import MoveToCompletedBtn from '@/components/buttons/MoveToCompletedBtn/MoveToCompletedBtn';

// hook
import useTaskDatabaseMethods from '@/hooks/useTaskDatabaseMethods';
import useFormVisiblity from '@/hooks/useFormVisiblity';

// redux
import useRedux from '@/hooks/useRedux';
import {
   setTaskToEdit,
   setTaskDetails,
   setShowTaskDetailsPanel,
} from '@/lib/redux/features/task/taskSlice';

// utils
import { useTaskDragDropProvider } from '@/utils/TaskDragDropUtils';
import { getDayMonthNameYearStr } from '@/utils/dateTimeMethods';


const Task = ({ taskData }) => {
   // necessary hooks and data extraction
   const { dispatch, useSelector } = useRedux();
   const { totalTasks, pinnedTasks } = useSelector(store => store.task);
   const [isDragging, setIsDragging] = useState(false);
   const { deleteTask, updateTasks, pinTask } = useTaskDatabaseMethods();
   const { findDropzoneElementId, dropzoneElementRefs } =
      useTaskDragDropProvider();
   const { openTaskEditForm } = useFormVisiblity();
   const { _id, title, deadline, priorityLevel } = taskData;
   const deadlineStr = getDayMonthNameYearStr(deadline);

   return (
      <div
         className={`border border-neutral-300 hover:bg-neutral-100 transition-all duration-default rounded-lg p-3 pb-4 text-lg flex flex-col cursor-grab shadow-sm ${
            isDragging
               ? 'opacity-30 !cursor-grabbing'
               : 'opacity-100 !cursor-pointer'
         }`}
         draggable={true}
         onTouchStart={() => {
            setIsDragging(true);
            // make the website body temporarily unscrollable
            document.body.style.overflowY = 'hidden';
         }}
         onTouchEnd={e => {
            const status = findDropzoneElementId(
               e,
               dropzoneElementRefs,
               'touch'
            );
            // make the website body scrollable again
            document.body.style.overflowY = 'auto';

            const statusLevel =
               status === 'todo' ? 0 : status === 'ongoing' ? 1 : 2;

            if (status) {
               updateTasks(_id, statusLevel, totalTasks);
            }
            setIsDragging(false);
         }}
         onDragStart={() => {
            setIsDragging(true);
         }}
         onDragEnd={e => {
            const status = findDropzoneElementId(
               e,
               dropzoneElementRefs,
               'mouse'
            );

            const statusLevel =
               status === 'todo' ? 0 : status === 'ongoing' ? 1 : 2;

            if (status) {
               updateTasks(_id, statusLevel, totalTasks);
            }
            setIsDragging(false);
         }}
      >
         {/* priority and top buttons */}
         <div className='flex items-center justify-between mb-[1.125rem]'>
            <PriorityCard priorityLevel={priorityLevel} />

            {/* three dotted menu button */}
            <DotsMenuBtn
               modifyClasses='ml-auto mr-2'
               renderChildren={(show, setShow) => {
                  return (
                     <MenuPanel show={show} setShow={setShow}>
                        <ViewDetailsBtn
                           onClickFunction={() => {
                              dispatch(setTaskDetails(taskData));
                              dispatch(setShowTaskDetailsPanel(true));
                              setShow(false);
                           }}
                           text='View Details'
                        />
                        <EditBtn
                           onClickFunction={() => {
                              setShow(false);
                              dispatch(setTaskToEdit(taskData));
                              openTaskEditForm();
                           }}
                           text='Edit Task'
                        />
                        <PinBtn
                           onClickFunction={() => {
                              setShow(false);
                              pinTask(taskData, pinnedTasks);
                           }}
                           text='Pin Task'
                        />

                        <MoveToOngoingBtn text='Mark as Ongoing' />
                        <MoveToCompletedBtn text='Mark as Completed' />

                        {/* delete button */}
                        <DeleteBtn
                           onClickFunction={() => {
                              deleteTask(_id, totalTasks);
                           }}
                           text='Delete'
                        />
                     </MenuPanel>
                  );
               }}
            />
         </div>

         {/* title */}
         <h4 className='font-extrabold text-lg mb-2 leading-none'>{title}</h4>

         {/* deadline */}
         <div title='Deadline' className='flex w-max items-center gap-1'>
            <Icon
               className='text-neutral-500 text-xl'
               icon='ph:calendar-fill'
            />
            <span className='text-neutral-500 font-semibold text-sm !leading-none'>
               {deadlineStr}
            </span>
         </div>
      </div>
   );
};

Task.propTypes = {
   taskData: PropTypes.object,
};

export default Task;
