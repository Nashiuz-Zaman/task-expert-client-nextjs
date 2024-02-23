'use client';

// shared components
import ButtonBtn from '../../shared/ButtonBtn/ButtonBtn';
import CloseBtn from '@/components/shared/CloseBtn/CloseBtn';
import InputField2 from '@/components/shared/InputField2/InputField2';
import TextareaField from '@/components/shared/TextareaField/TextareaField';
import SelectField from '@/components/shared/SelectField/SelectField';

// custom hooks
import useMethodsForTaskDatabase from '@/hooks/useMethodsForTaskDatabase';
import useEscapeClose from '../../../hooks/useEscapeClose';
import useFormVisiblity from '@/hooks/useFormVisiblity';
import useClickOutside from '@/hooks/useClickOutside';
import useGetTimeData from '@/hooks/useGetTimeData';

// redux
import useRedux from '@/hooks/useRedux';
import { setTaskToEdit } from '@/lib/redux/features/task/taskSlice';

// data
import { priorityOptions } from '@/uiData/formsUiData';

const TaskEditForm = () => {
   const { dispatch, useSelector } = useRedux();
   const { profileData } = useSelector(store => store.auth);
   const { taskEditFormOpen } = useSelector(store => store.form);
   const { taskToEdit } = useSelector(store => store.task);
   const { createTask } = useMethodsForTaskDatabase();
   const { closeTaskEditForm } = useFormVisiblity();
   const { getDayMonthNameYearStr } = useGetTimeData();
   const deadlineStr = getDayMonthNameYearStr(new Date(taskToEdit?.deadline))
      .split(' ')
      .join('-');

   // close form and reset the taskToEdit state
   const handleCloseForm = () => {
      closeTaskEditForm();
      dispatch(setTaskToEdit(null));
   };

   const handleClickOutside = e => {
      if (!e.target.closest('.task-edit-form-focus')) {
         handleCloseForm();
      }
   };

   // add support clicking outside and escape key press
   useEscapeClose(handleCloseForm);
   useClickOutside(taskEditFormOpen, handleClickOutside);

   // all form values come from their inputs but date comes from the state
   const handleEditTask = e => {
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
            taskEditFormOpen ? 'opacity-100 visible' : 'opacity-0 collapse'
         } transition-all !duration-default shadow-medium w-[19rem] md:w-[25rem] fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-4 bg-white z-40 rounded-xl task-edit-form-focus`}
      >
         <CloseBtn onClickFunction={handleCloseForm} modifyClasses='!text-xl' />

         {/* form starts here */}
         <form onSubmit={handleEditTask} className='block space-y-3'>
            {/* title */}
            <InputField2
               defaultValueData={taskToEdit?.title}
               label='Title'
               name='title'
               placeholder='Task Title'
            />

            {/* description */}
            <TextareaField
               defaultValueData={taskToEdit?.description}
               label='Description'
               name='description'
               placeholder='Task Description'
            />

            {/* deadline */}
            <InputField2
               defaultValueData={deadlineStr}
               label='Deadline'
               name='deadline'
               placeholder='DD-MMM-YYYY'
            />

            {/* priority */}
            <SelectField
               label='Priority'
               name='priority'
               options={priorityOptions}
               defaultValueData={taskToEdit?.priorityLevel}
            />

            {/* submit button */}
            <ButtonBtn text='Save' modifyClasses='!ml-auto !mt-5' />
         </form>
      </div>
   );
};

export default TaskEditForm;
