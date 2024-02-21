'use client';

// react
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// component
import Task from '../Task/Task';
import LoadingSpinner from '@/components/shared/LoadingSpinner/LoadingSpinner';

// hook
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';

/* eslint-disable react/display-name */
const StatusSpecificTasks = forwardRef(({ tasksData }, ref) => {
   const { name, statusSpecificTasks } = tasksData;
   const { isLoading } = useSelector(store => store.task);

   return (
      <div
         id={name}
         className='bg-white border border-neutral-200 h-full rounded-2xl px-3 py-4 drop-target'
         // ref collection
         ref={el => {
            if (!ref.current.includes(el) && el !== null) {
               ref.current.push(el);
            }
         }}
         // dragover event handle
         onDragOver={e => {
            e.preventDefault();
         }}
      >
         {/* task status label and count */}
         <div className='flex items-center gap-3 mb-7'>
            <h3 className='font-bold text-2xl'>{name}</h3>
            <p className='min-w-7 py-1 flex items-center justify-center border border-neutral-200 bg-neutral-100 text-neutral-500 rounded-md !leading-none'>
               {statusSpecificTasks.length}
            </p>

            <button className='ml-auto'>
               <Icon
                  className='text-4xl text-neutral-500'
                  icon='heroicons-solid:dots-horizontal'
               />
            </button>
         </div>

         {/* loading spinner */}
         {isLoading && (
            <LoadingSpinner
               onlyLoader={true}
               modifyClasses='text-3xl py-elementGapSm'
            />
         )}

         {/* if tasks available */}
         {!isLoading && statusSpecificTasks?.length > 0 && (
            <ul className='space-y-3'>
               {statusSpecificTasks.map(task => {
                  return (
                     <li key={task._id}>
                        <Task taskData={task} />
                     </li>
                  );
               })}
            </ul>
         )}

         {/* if no task */}
         {!isLoading && statusSpecificTasks?.length < 1 && (
            <p className='text-primary font-semibold mt-[14rem] text-center py-elementGapSm'>{`No ${name} Tasks`}</p>
         )}
      </div>
   );
});

StatusSpecificTasks.propTypes = {
   tasksData: PropTypes.object,
};

export default StatusSpecificTasks;
