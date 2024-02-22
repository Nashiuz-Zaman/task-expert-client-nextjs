'use client';

// shared components
import ButtonBtn from '../../shared/ButtonBtn/ButtonBtn';
import CloseBtn from '@/components/shared/CloseBtn/CloseBtn';

// custom hooks
import useMethodsForTaskDatabase from '@/hooks/useMethodsForTaskDatabase';
import useEscapeClose from '../../../hooks/useEscapeClose';
import useFormVisiblity from '@/hooks/useFormVisiblity';
import useClickOutside from '@/hooks/useClickOutside';

// redux
import { useSelector } from 'react-redux';

const TaskCreateForm = () => {
   const { profileData } = useSelector(store => store.auth);
   const { taskCreateFormOpen } = useSelector(store => store.form);
   const { createTask } = useMethodsForTaskDatabase();
   const { closeTaskCreateForm } = useFormVisiblity();

   const handleClickOutside = e => {
      if (!e.target.closest('.task-create-form-focus')) {
         closeTaskCreateForm();
      }
   };

   // add support clicking out side and escape key press
   useEscapeClose(closeTaskCreateForm);
   useClickOutside(taskCreateFormOpen, handleClickOutside);

   // common css classes
   const labelClasses = 'block mb-1 font-bold';
   const inputClasses =
      'block rounded-default !w-full text-sm lg:text-base p-1 md:p-2 font-inherit bg-lightGray';

   // all form values come from their inputs but date comes from the state
   const handleCreateTask = e => {
      e.preventDefault();

      // take all the necessary values
      const form = e.target;
      const title = form.title.value;
      const description = form.description.value;
      const deadline = form.deadline.value;
      const priorityLevel = parseInt(form.priority.value);
      const date = new Date().toISOString();

      // Task data summarized
      const taskData = {
         title,
         description,
         statusLevel: 0,
         deadline,
         priorityLevel,
         lastUpdated: date,
         email: profileData.email,
      };

      createTask(taskData);
      form.reset();
   };

   return (
      <div
         className={`${
            taskCreateFormOpen ? 'block' : 'hidden'
         } translate-x-4 md:translate-x-8 shadow-medium w-[19rem] absolute bottom-0 translate-y-[calc(100%-2px)] left-0 p-4 bg-white z-40 rounded-xl task-create-form-focus`}
      >
         <CloseBtn
            onClickFunction={closeTaskCreateForm}
            modifyClasses='!text-xl'
         />

         {/* form starts here */}
         <form onSubmit={handleCreateTask} className='block space-y-3'>
            {/* title */}
            <div>
               <label className={labelClasses}>Title</label>
               <input
                  name='title'
                  className={inputClasses}
                  type='text'
                  required
               />
            </div>

            {/* description */}
            <div>
               <label className={labelClasses}>Description</label>
               <textarea
                  name='description'
                  className={`${inputClasses} h-12`}
                  required
               ></textarea>
            </div>

            {/* deadline */}
            <div>
               <label className={labelClasses}>Deadline</label>
               <input
                  name='deadline'
                  className={inputClasses}
                  type='text'
                  placeholder='dd-mm-yyyy'
                  required
               />
            </div>

            {/* priority */}
            <div>
               <label className={labelClasses}>Priority</label>
               <select
                  className={`block w-full text-sm lg:text-base rounded-default p-[5px] md:p-[8.5px] lg:p-[9px] bg-lightGray`}
                  name='priority'
               >
                  <option value='0'>Low</option>
                  <option value='1'>Moderate</option>
                  <option value='2'>High</option>
               </select>
            </div>

            {/* submit button */}
            <ButtonBtn text='Add Task' modifyClasses='!ml-auto !mt-5' />
         </form>
      </div>
   );
};

export default TaskCreateForm;
