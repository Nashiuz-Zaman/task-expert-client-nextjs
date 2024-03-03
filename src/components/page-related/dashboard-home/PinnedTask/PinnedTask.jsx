// react
import PropTypes from 'prop-types';

// component
import UnpinBtn from '@/components/buttons/UnpinBtn/UnpinBtn';

// hook
import useTaskDatabaseMethods from '@/hooks/useTaskDatabaseMethods';

// redux
import { useSelector } from 'react-redux';

const PinnedTask = ({ defaultValue = true, task, modifyClasses = '' }) => {
   const { unpinTask } = useTaskDatabaseMethods();
   const { pinnedTasks } = useSelector(store => store.task);

   return (
      <div
         title={task?.title ?? 'No Pinned tasks'}
         className={`flex items-center gap-3 font-medium text-sm md:text-lg lg:text-xl px-4 py-2 rounded-default text-neutral-500 border border-neutral-200 shadow-md ${modifyClasses}`}
      >
         <span className='truncate'>
            {defaultValue ? 'No Pinned Tasks' : task.title}
         </span>
         {!defaultValue && (
            <UnpinBtn
               onClickFunction={(e) => {
                  e.preventDefault()
                  unpinTask(task._id, pinnedTasks);
               }}
               modifyClasses='!ml-auto text-sm md:text-lg lg:text-xl'
            />
         )}
      </div>
   );
};

PinnedTask.propTypes = {
   defaultValue: PropTypes.bool,
   task: PropTypes.object,
   modifyClasses: PropTypes.string,
};

export default PinnedTask;
