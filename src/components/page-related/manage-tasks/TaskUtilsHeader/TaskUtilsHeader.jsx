'use client';

// react
import PropTypes from 'prop-types';

// components
import FilterBtn from '@/components/buttons/FilterBtn/FilterBtn';
import SortBtn from '@/components/buttons/SortBtn/SortBtn';
import Searchbar from '@/components/shared/Searchbar/Searchbar';
import AddBtn from '@/components/buttons/AddBtn/AddBtn';
import MenuPanel from '@/components/shared/MenuPanel/MenuPanel';
import FilterForm from '@/components/forms/FilterForm/FilterForm';

// hook
import useFormVisiblity from '@/hooks/useFormVisiblity';

// redux
import useRedux from '@/hooks/useRedux';
import { setSearchTerm } from '@/lib/redux/features/search/searchSlice';
import { setTaskFilterParams } from '@/lib/redux/features/filter/filterSlice';

// data
import { priorityOptions } from '@/uiData/formsUiData';

const TaskUtilsHeader = ({ modifyClasses = '' }) => {
   const { dispatch, useSelector } = useRedux();
   const { taskFilterParams } = useSelector(store => store.filter);
   const { openTaskCreateForm } = useFormVisiblity();

   const handleSearchChange = e => {
      dispatch(setSearchTerm(e.target.value.toLowerCase()));
   };

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

            <FilterBtn
               renderChildren={(show, setShow) => {
                  return (
                     <MenuPanel
                        show={show}
                        setShow={setShow}
                        modifyClasses='!top-auto !bottom-0 !translate-y-[calc(100%+4px)] !w-[10rem] !px-3 !py-4 !space-y-0'
                     >
                        <p className='text-lg font-bold mb-2 text-center'>
                           By priority
                        </p>
                        <FilterForm
                           params={priorityOptions}
                           curCheckedParams={taskFilterParams}
                           setCurCheckedParams={setTaskFilterParams}
                        />
                     </MenuPanel>
                  );
               }}
               modifyClasses='!rounded-xl ml-auto mr-2'
            />

            <SortBtn modifyClasses='!rounded-xl' />
         </div>

         {/* search */}

         <Searchbar
            onChangeFunction={handleSearchChange}
            modifyClasses='!rounded-xl !w-full xs:!w-[15rem] justify-self-center md:justify-self-end'
         />
      </div>
   );
};

TaskUtilsHeader.propTypes = {
   modifyClasses: PropTypes.string,
};

export default TaskUtilsHeader;
