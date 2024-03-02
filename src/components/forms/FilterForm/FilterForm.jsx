'use client';

//react
import PropTypes from 'prop-types';

// component
import InputCheckboxField from '@/components/shared/InputCheckboxField/InputCheckboxField';

// redux
import { useDispatch } from 'react-redux';

const FilterForm = ({ params, curCheckedParams, setCurCheckedParams }) => {
   const dispatch = useDispatch();

   const handleChange = e => {
      const param = parseInt(e.target.value);

      if (curCheckedParams.includes(param)) {
         const tempArr = curCheckedParams.filter(el => el !== param);
         dispatch(setCurCheckedParams(tempArr));
         return;
      }

      // else do this
      const tempArr = [...curCheckedParams];
      tempArr.push(param);
      dispatch(setCurCheckedParams(tempArr));
   };

   return (
      <div>
         {params.map(option => {
            return (
               <InputCheckboxField
                  key={option.id}
                  paramData={option}
                  onChangeFunction={handleChange}
                  checked={curCheckedParams.includes(option.value)}
               />
            );
         })}
      </div>
   );
};

FilterForm.propTypes = {
   params: PropTypes.array,
   curCheckedParams: PropTypes.array,
   setCurCheckedParams: PropTypes.func,
};

export default FilterForm;
