'use client';

// react
import PropTypes from 'prop-types';

// components
import FilterBtn from '@/components/buttons/FilterBtn/FilterBtn';
import SortBtn from '@/components/buttons/SortBtn/SortBtn';
import Searchbar from '@/components/shared/Searchbar/Searchbar';
import AddBtn from '@/components/buttons/AddBtn/AddBtn';

// hook
import useFormVisiblity from '@/hooks/useFormVisiblity';

const TaskUtilsHeader = ({ modifyClasses = '' }) => {
   const { openTaskCreateForm } = useFormVisiblity();

   return (
      <div
         className={`grid grid-cols-1 xs:grid-cols-[1fr_max-content] gap-4 xs:gap-2 items-center bg-white py-4 xs:py-2 px-4 md:px-8 ${modifyClasses}`}
      >
         {/* add, filter, search */}
         <div className='flex items-center'>
            <AddBtn
               onClickFunction={openTaskCreateForm}
               text='Create Task'
               modifyClasses='!bg-primary !border-primary hover:!bg-primaryLight hover:!border-primaryLight !text-white !rounded-xl'
            />

            <FilterBtn modifyClasses='!rounded-xl ml-auto mr-2' />
            <SortBtn modifyClasses='!rounded-xl' />
         </div>

         {/* search */}

         <Searchbar modifyClasses='!rounded-xl !w-full xs:!w-[15rem] justify-self-center md:justify-self-end' />
      </div>
   );
};

TaskUtilsHeader.propTypes = {
   modifyClasses: PropTypes.string,
};

export default TaskUtilsHeader;
