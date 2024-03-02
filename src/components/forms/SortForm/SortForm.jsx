'use client';

//react
import PropTypes from 'prop-types';

// component
import InputRadioField from '@/components/shared/InputRadioField/InputRadioField';

// redux
import { useDispatch } from 'react-redux';

const SortForm = ({ params, curCheckedParam, setCurCheckedParam }) => {
   const dispatch = useDispatch();

   const handleChange = e => {
      const param = parseInt(e.target.value);
      dispatch(setCurCheckedParam(param));
   };

   return (
      <div>
         {params.map(option => {
            return (
               <InputRadioField
                  key={option.id}
                  paramData={option}
                  onChangeFunction={handleChange}
                  checked={curCheckedParam === option.value}
               />
            );
         })}
      </div>
   );
};

SortForm.propTypes = {
   params: PropTypes.array,
   curCheckedParam: PropTypes.number,
   setCurCheckedParam: PropTypes.func,
};

export default SortForm;
