// component
import AllTasks from '@/components/page-related/manage-tasks/AllTasks/AllTasks';
import TaskCreateForm from '@/components/forms/TaskCreateForm/TaskCreateForm';
import TaskUtilsHeader from '@/components/page-related/manage-tasks/TaskUtilsHeader/TaskUtilsHeader';

// utils
import { TaskDragDropProvider } from '@/utils/TaskDragDropUtils';
import TaskEditForm from '@/components/forms/TaskEditForm/TaskEditForm';

const ManageTasks = () => {
   return (
      <div className='h-full flex flex-col'>
         {/* make this section's postion relative for the form below */}
         <section className='mb-customSm relative'>
            <TaskUtilsHeader />
            <TaskCreateForm />
            <TaskEditForm />
         </section>

         <section className='grow overflow-x-auto xl:!overflow-hidden px-4 md:px-8 xl:px-16'>
            <TaskDragDropProvider>
               <AllTasks />
            </TaskDragDropProvider>
         </section>
      </div>
   );
};

export default ManageTasks;
