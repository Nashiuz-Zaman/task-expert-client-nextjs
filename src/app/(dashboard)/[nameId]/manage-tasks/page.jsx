'use client';

// component
import AllTasks from '@/components/page-related/manage-tasks/AllTasks/AllTasks';
import TaskUtilsHeader from '@/components/page-related/manage-tasks/TaskUtilsHeader/TaskUtilsHeader';

// utils
import { TaskDragDropProvider } from '@/utlis/TaskDragDropUtils';

const manageTasks = () => {
   return (
      <>
         <section className='mb-customSm'>
            <TaskUtilsHeader />
         </section>

         <section>
            <TaskDragDropProvider>
               <AllTasks />
            </TaskDragDropProvider>
         </section>
      </>
   );
};

export default manageTasks;
