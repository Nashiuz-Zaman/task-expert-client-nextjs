'use client';

// react
import PropTypes from 'prop-types';

// redux
import useRedux from '@/hooks/useRedux';

const TaskDetailsPanel = props => {
   const { dispatch, useSelector } = useRedux();
   const { taskDetails, showTaskDetailsPanel } = useSelector(
      store => store.task
   );
   console.log(taskDetails);

   return (
      <div
         className={`${
            showTaskDetailsPanel ? 'opacity-100 visible' : 'opacity-0 collapse'
         } transition-all !duration-default shadow-medium fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-4 bg-white z-40 rounded-xl task-edit-form-focus`}
      ></div>
   );
};

TaskDetailsPanel.propTypes = {};

export default TaskDetailsPanel;
