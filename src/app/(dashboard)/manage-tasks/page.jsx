// component
import AllTasks from '@/components/page-related/manage-tasks/AllTasks/AllTasks';
import TaskCreateForm from '@/components/forms/TaskCreateForm/TaskCreateForm';
import TaskUtilsHeader from '@/components/page-related/manage-tasks/TaskUtilsHeader/TaskUtilsHeader';
import TaskEditForm from '@/components/forms/TaskEditForm/TaskEditForm';
import TaskDetailsPanel from '@/components/page-related/manage-tasks/TaskDetailsPanel/TaskDetailsPanel';

// utils
import { TaskDragDropProvider } from '@/utils/TaskDragDropUtils';

let ManageTasks = () => {
   return (
      <div
         style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 1270 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(255, 134, 49, 1)" d="M 0 438 C 255.60000000000002 438 383.4 281 639 281 L 639 281 L 639 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(255, 134, 49, 1)" d="M 638 281 C 890.8 281 1017.2 131 1270 131 L 1270 131 L 1270 0 L 638 0 Z" stroke-width="0"></path> </svg>')`,
         }}
         className='h-full flex flex-col !bg-cover !bg-no-repeat !bg-center'
      >
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
