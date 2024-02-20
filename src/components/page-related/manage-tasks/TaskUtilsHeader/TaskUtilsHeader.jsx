// react
import PropTypes from 'prop-types';

// components
import FilterBtn from '@/components/shared/FilterBtn/FilterBtn';
import SortBtn from '@/components/shared/SortBtn/SortBtn';
import Searchbar from '@/components/shared/Searchbar/Searchbar';

const TaskUtilsHeader = ({ modifyClasses = '' }) => {
   return (
      <div
         className={`flex items-center justify-between bg-white py-2 px-4 md:px-8 ${modifyClasses}`}
      >
         <h2>Tasks</h2>

         {/* filter sort and search */}
         <div className='flex items-center gap-3'>
            <FilterBtn modifyClasses='!rounded-xl' />
            <SortBtn modifyClasses='!rounded-xl' />
            <Searchbar modifyClasses='!rounded-xl' />
         </div>
      </div>
   );
};

TaskUtilsHeader.propTypes = {
   modifyClasses: PropTypes.string,
};

export default TaskUtilsHeader;
