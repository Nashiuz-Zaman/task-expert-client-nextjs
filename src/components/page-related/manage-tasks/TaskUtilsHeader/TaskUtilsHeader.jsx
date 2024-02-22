'use client';

// react
import PropTypes from 'prop-types';

// components
import FilterBtn from '@/components/shared/FilterBtn/FilterBtn';
import SortBtn from '@/components/shared/SortBtn/SortBtn';
import Searchbar from '@/components/shared/Searchbar/Searchbar';
import AddBtn from '@/components/shared/AddBtn/AddBtn';

// hook
import useFormVisiblity from '@/hooks/useFormVisiblity';

const TaskUtilsHeader = ({ modifyClasses = '' }) => {
   const { openTaskCreateForm } = useFormVisiblity();

   return (
      <div
         className={`flex items-center justify-between bg-white py-2 px-4 md:px-8 ${modifyClasses}`}
      >
         <AddBtn
            onClickFunction={openTaskCreateForm}
            text='Create Task'
            modifyClasses='!bg-primary !border-primary hover:!bg-primaryLight hover:!border-primaryLight !text-white !rounded-xl'
         />

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
