// react
import PropTypes from 'prop-types';

//  icon
import { Icon } from '@iconify/react';

// component
import UnpinBtn from '@/components/shared/UnpinBtn/UnpinBtn';

// redux
import { useDispatch } from 'react-redux';
import { unpinTask } from '@/lib/redux/features/task/taskSlice';

const PinnedTask = ({ defaultValue = true, task, modifyClasses = '' }) => {
   const dispatch = useDispatch();

   return (
      <div
         title={task?.title ?? 'No Pinned tasks'}
         className={`flex items-center gap-3 font-medium text-xl px-4 py-2 rounded-default text-neutral-500 border border-neutral-100 shadow-lg ${modifyClasses}`}
      >
         {defaultValue && <Icon icon='bi:pin-fill' />}
         <span className='truncate'>
            {defaultValue ? 'No Pinned Tasks' : task.title}
         </span>
         {!defaultValue && (
            <UnpinBtn
               modifyClasses='!ml-auto'
               onClickFunction={() => {
                  dispatch(unpinTask(task?._id));
               }}
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
