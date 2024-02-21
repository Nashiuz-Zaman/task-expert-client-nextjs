'use client';

// react
import { useState } from 'react';
import PropTypes from 'prop-types';

// next
import Image from 'next/image';

// react icons
import { IoTrashSharp, IoChevronDownOutline } from 'react-icons/io5';

// component
import Accordion from '@/components/shared/Accordion/Accordion';

// hook
import useMethodsForTaskDatabase from '@/hooks/useMethodsForTaskDatabase';

// redux
import { useSelector } from 'react-redux';

// utils
import { useTaskDragDropProvider } from '@/utlis/TaskDragDropUtils';
import { Icon } from '@iconify/react';

const Task = ({ taskData }) => {
   const [isDragging, setIsDragging] = useState(false);
   const [expanded, setExpanded] = useState(false);
   const {
      _id,
      title,
      description,
      imageSource = null,
      deadline,
      priorityLevel,
   } = taskData;

   const { deleteTask, updateTasks } = useMethodsForTaskDatabase();

   const { totalTasks } = useSelector(store => store.task);

   const { findDropzoneElementId, dropzoneElementRefs } =
      useTaskDragDropProvider();

   // priority data info
   const priorities = [
      {
         text: 'Low',
         bgColor: 'bg-green-100',
         textColor: 'text-green-500',
      },
      {
         text: 'Medium',
         bgColor: 'bg-orange-100',
         textColor: 'text-orange-500',
      },
      {
         text: 'High',
         bgColor: 'bg-red-100',
         textColor: 'text-red-500',
      },
   ];

   // set priority color and text
   const priorityBgColor = priorities[priorityLevel]?.bgColor;
   const priorityTextColor = priorities[priorityLevel]?.textColor;
   const priorityText = priorities[priorityLevel]?.text;

   return (
      <div
         className={`border border-inherit rounded-lg p-3 text-lg flex flex-col cursor-grab shadow-sm ${
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
         <div className='flex items-center justify-between'>
            {/* priority */}
            <p
               className={`w-max mb-[1.125rem] px-3 py-[6px] font-medium rounded-md text-sm ${priorityBgColor} ${priorityTextColor}`}
               title={`${priorityText} priority task`}
            >
               {priorityText}
            </p>

            <div className='flex items-center gap-2 text-2xl'>
               <button>
                  <Icon className='text-neutral-500' icon='ic:round-edit' />
               </button>
               <button>
                  <Icon className='text-neutral-500' icon='tabler:pin-filled' />
               </button>
               <button>
                  <Icon
                     className='text-red-600 text-xl'
                     icon='icomoon-free:bin'
                  />
               </button>
            </div>
         </div>
         {/* title and delete button */}
         <h4 className='font-extrabold text-lg mb-[1.125rem]'>{title}</h4>

         <Image
            width={500}
            height={375}
            className='w-full aspect-[16/7.5] object-cover rounded-lg'
            src={imageSource}
            alt='task image'
         />

         {/* expand Button
         <button
            onClick={() => {
               setExpanded(prev => !prev);
            }}
            className='block w-full cursor-pointer pt-1 pb-2'
         >
            <IoChevronDownOutline
               className={`text-lg w-max mx-auto transition-all duration-default ${
                  expanded ? 'rotate-180' : 'rotate-0'
               }`}
            />
         </button> */}

         <Accordion expanded={expanded}>
            {/* description */}
            <div className='mb-2' title={description}>
               <span className='block font-semibold '>Description:</span>
               <p className='font-medium'>{description.substring(0, 55)}...</p>
            </div>

            {/* deadline */}
            <div className='flex items-center justify-between mt-auto mb-4'>
               <p>
                  <span className='font-semibold'>Deadline:</span> {deadline}
               </p>
            </div>
         </Accordion>
      </div>
   );
};

Task.propTypes = {
   taskData: PropTypes.object,
};

export default Task;
