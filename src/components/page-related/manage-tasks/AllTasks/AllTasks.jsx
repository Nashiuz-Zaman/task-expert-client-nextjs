'use client';

// react
import PropTypes from 'prop-types';

// component
import StatusSpecificTasks from '../StatusSpecificTasks/StatusSpecificTasks';
import LoadingSpinner from '@/components/shared/LoadingSpinner/LoadingSpinner';

// hooks
import useGetInitialTasksData from '@/hooks/useGetInitialTasksData';
import useTaskSeparator from '@/hooks/useTaskSeparator';
import useMethodsForTaskDatabase from '@/hooks/useMethodsForTaskDatabase';

// redux
import { useSelector } from 'react-redux';

// utils
import { useTaskDragDropProvider } from '@/utlis/TaskDragDropUtils';

const AllTasks = ({ modifyClasses = '' }) => {
   // fetch initial tasks data
   useGetInitialTasksData();
   const { dropzoneElementRefs } = useTaskDragDropProvider();
   const { totalTasks, isLoading } = useSelector(store => store.task);
   const { sortToLatest } = useMethodsForTaskDatabase();
   const { getStatusSpecificTasks } = useTaskSeparator();

   const totalTasksSeparated =
      totalTasks && getStatusSpecificTasks(sortToLatest(totalTasks));

   return (
      <div
         className={`mx-4 md:mx-8 xl:mx-16 min-h-[70vh] flex flex-col shadow-large bg-white rounded-2xl  ${modifyClasses}`}
      >
         {isLoading && (
            <LoadingSpinner
               text='Loading Data'
               textSizeClass='!text-3xl !text-primary'
               loaderSizeClass='!text-4xl !text-primary'
               modifyClasses='grow flex items-center justify-center'
            />
         )}

         {!isLoading && (
            <div className={`grid grid-cols-1 lg:grid-cols-3 grow gap-4 p-7`}>
               {totalTasksSeparated?.map(singleCollection => {
                  return (
                     <StatusSpecificTasks
                        ref={dropzoneElementRefs}
                        key={singleCollection.id}
                        tasksData={singleCollection}
                     />
                  );
               })}
            </div>
         )}
      </div>
   );
};

AllTasks.propTypes = {
   modifyClasses: PropTypes.string,
};

export default AllTasks;
