'use client';

// shared components
import ButtonBtn from '../../buttons/ButtonBtn/ButtonBtn';
import CloseBtn from '@/components/buttons/CloseBtn/CloseBtn';
import SelectField from '@/components/shared/SelectField/SelectField';
import InputField2 from '@/components/shared/InputField2/InputField2';
import TextareaField from './../../shared/TextareaField/TextareaField';

// custom hooks
import useTaskDatabaseMethods from '@/hooks/useTaskDatabaseMethods';
import useEscapeClose from '../../../hooks/useEscapeClose';
import useFormVisiblity from '@/hooks/useFormVisiblity';
import useClickOutside from '@/hooks/useClickOutside';

// redux
import { useSelector } from 'react-redux';

// data
import { priorityOptions } from '@/uiData/formsUiData';

const TaskCreateForm = () => {
   const { profileData } = useSelector(store => store.auth);
   const { taskCreateFormOpen } = useSelector(store => store.form);
   const { createTask } = useTaskDatabaseMethods();
   const { closeTaskCreateForm } = useFormVisiblity();

   const handleClickOutside = e => {
      if (!e.target.closest('.task-create-form-focus')) {
         closeTaskCreateForm();
      }
   };

   // add support clicking out side and escape key press
   useEscapeClose(closeTaskCreateForm);
   useClickOutside(taskCreateFormOpen, handleClickOutside);

   const handleCreateTask = e => {
      e.preventDefault();

      // take all the necessary values
      const form = e.target;
      const title = form.title.value;
      const description = form.description.value;
      const deadline = new Date(form.deadline.value).toISOString();
      const priorityLevel = parseInt(form.priority.value);
      const date = new Date().toISOString();
      console.log(deadline);

      // Task data
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
      closeTaskCreateForm();
      form.reset();
   };

   return (
      <div
         className={`${
            taskCreateFormOpen ? 'block' : 'hidden'
         } translate-x-4 md:translate-x-8 shadow-xl w-[19rem] absolute top-0 translate-y-[3.2rem] left-0 p-4 bg-white border border-neutral-300 z-40 rounded-xl task-create-form-focus`}
      >
         <CloseBtn
            onClickFunction={closeTaskCreateForm}
            modifyClasses='!text-xl'
         />

         {/* form starts here */}
         <form onSubmit={handleCreateTask} className='block space-y-3'>
            {/* title */}
            <InputField2
               label='Title'
               maxLength={50}
               name='title'
               placeholder='Task Title'
            />

            {/* description */}
            <TextareaField
               label='Description'
               name='description'
               placeholder='Task Description'
            />

            {/* deadline */}
            <InputField2 label='Deadline' type='date' name='deadline' />

            {/* priority */}
            <SelectField
               label='Priority'
               name='priority'
               options={priorityOptions}
               defaultValueData={0}
            />

            {/* submit button */}
            <ButtonBtn text='Add Task' modifyClasses='!ml-auto !mt-5' />
         </form>
      </div>
   );
};

export default TaskCreateForm;
