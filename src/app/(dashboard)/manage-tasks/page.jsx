// component
import AllTasks from '@/components/page-related/manage-tasks/AllTasks/AllTasks';
import TaskCreateForm from '@/components/forms/TaskCreateForm/TaskCreateForm';
import TaskUtilsHeader from '@/components/page-related/manage-tasks/TaskUtilsHeader/TaskUtilsHeader';

// utils
import { TaskDragDropProvider } from '@/utils/TaskDragDropUtils';
import TaskEditForm from '@/components/forms/TaskEditForm/TaskEditForm';
import TaskDetailsPanel from '@/components/page-related/manage-tasks/TaskDetailsPanel/TaskDetailsPanel';

const ManageTasks = () => {
   return (
      <div className='h-full flex flex-col'>
         {/* make this section's postion relative for the forms below */}
         <section className='mb-8 md:mb-12 lg:mb-14 xl:mb-16 relative'>
            <TaskUtilsHeader />
            <TaskCreateForm />
            <TaskEditForm />
            <TaskDetailsPanel />
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
