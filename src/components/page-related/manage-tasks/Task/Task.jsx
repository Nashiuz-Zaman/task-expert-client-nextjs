'use client';

// react
import { useState } from 'react';
import PropTypes from 'prop-types';

//  icons
import { Icon } from '@iconify/react';

// component
import Priority from '@/components/shared/Priority/Priority';
import EditBtn from '@/components/shared/EditBtn/EditBtn';
import DeleteBtn from '@/components/shared/DeleteBtn/DeleteBtn';
import PinBtn from '@/components/shared/PinBtn/PinBtn';
import ViewDetailsBtn from '@/components/shared/ViewDetailsBtn/ViewDetailsBtn';

// hook
import useMethodsForTaskDatabase from '@/hooks/useMethodsForTaskDatabase';
import useGetTimeData from '@/hooks/useGetTimeData';

// redux
import { useSelector } from 'react-redux';

// utils
import { useTaskDragDropProvider } from '@/utlis/TaskDragDropUtils';

const Task = ({ taskData }) => {
   const { _id, title, description, deadline, priorityLevel } = taskData;
   const [isDragging, setIsDragging] = useState(false);
   const { deleteTask, updateTasks } = useMethodsForTaskDatabase();
   const { totalTasks } = useSelector(store => store.task);
   const { findDropzoneElementId, dropzoneElementRefs } =
      useTaskDragDropProvider();
   const { getDayMonthNameYearStr } = useGetTimeData();

   const deadlineStr = getDayMonthNameYearStr(new Date(deadline));

   return (
      <div
         className={`border border-inherit rounded-lg p-3 pb-4 text-lg flex flex-col cursor-grab shadow-sm ${
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
            if (status) {
               updateTasks(_id, status, totalTasks);
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
            <Priority priorityLevel={priorityLevel} />

            <div className='flex items-center gap-2 text-2xl'>
               <ViewDetailsBtn modifyClasses='text-xl' />
               <EditBtn />
               <PinBtn />
               <DeleteBtn
                  onClickFunction={() => {
                     deleteTask(_id, totalTasks);
                  }}
               />
            </div>
         </div>

         {/* title */}
         <h4 className='font-extrabold text-lg mb-2 leading-none'>{title}</h4>

         {/* deadline */}
         <div title='Deadline' className='flex items-center gap-1'>
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
