// react
import PropTypes from 'prop-types';

// react icon
import { TbPinnedFilled } from 'react-icons/tb';

const PinnedTask = ({ task, modifyClasses = '' }) => {
   return (
      <div
         title={task.title}
         className={`flex items-center gap-3 font-medium text-xl ml-4 px-4 py-2 rounded-default text-neutral-500 border border-neutral-100 shadow-lg ${modifyClasses}`}
      >
         <TbPinnedFilled className='text-2xl' />{' '}
         <span className='truncate'>{task.title}</span>
      </div>
   );
};

PinnedTask.propTypes = {
   task: PropTypes.object,
   modifyClasses: PropTypes.string,
};

export default PinnedTask;
