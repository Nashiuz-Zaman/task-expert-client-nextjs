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
import useGetTimeData from '@/hooks/useGetTimeData';

// redux
import useRedux from '@/hooks/useRedux';
import { setTaskToEdit } from '@/lib/redux/features/task/taskSlice';

// data
import { priorityOptions } from '@/uiData/formsUiData';

const TaskEditForm = () => {
   const { dispatch, useSelector } = useRedux();
   const { taskEditFormOpen } = useSelector(store => store.form);
   const { taskToEdit, totalTasks } = useSelector(store => store.task);
   const { closeTaskEditForm } = useFormVisiblity();
   const { getDayMonthNameYearStr } = useGetTimeData();
   const { editTask } = useMethodsForTaskDatabase();
   const deadlineStr = getDayMonthNameYearStr(new Date(taskToEdit?.deadline))
      .split(' ')
      .join('-');

   // close form and reset the taskToEdit state
   const handleCloseForm = () => {
      closeTaskEditForm();
      dispatch(setTaskToEdit(null));
   };

   // add support clicking outside and escape key press
   useEscapeClose(handleCloseForm);

   // all form values come from their inputs but date comes from the state
   const handleEditTask = e => {
      e.preventDefault();

      // take all the necessary values
      const form = e.target;
      const title = form.title.value.trim();
      const description = form.description.value.trim();
      const deadline = form.deadline.value.trim();
      const priorityLevel = parseInt(form.priority.value.trim());

      // Task data summarized
      const editedTaskData = {
         title,
         description,
         deadline,
         priorityLevel,
      };

      editTask(taskToEdit._id, editedTaskData, totalTasks);
      handleCloseForm();
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
