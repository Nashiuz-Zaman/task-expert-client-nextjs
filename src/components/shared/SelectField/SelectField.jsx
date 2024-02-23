// react
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const SelectField = ({
   theme = 'light',
   label = 'Default Label',
   name = '',
   options,
   defaultValueData,
   modifyClasses = '',
}) => {
   const [value, setValue] = useState('');

   useEffect(() => {
      if (defaultValueData !== undefined) {
         setValue(defaultValueData.toString());
      }
   }, [defaultValueData]);

   const handleSelect = e => {
      setValue(parseInt(e.target.value));
   };

   return (
      <div className={`${modifyClasses}`}>
         {/* label */}
         <label
            className={`${
               theme === 'light' ? 'text-textPrimary' : 'text-white'
            } block mb-1 font-bold capitalize`}
         >
            {label}:
         </label>

         {/* select options */}
         <select
            required
            onChange={e => {
               handleSelect(e);
            }}
            value={value}
            name={name}
            className={`block w-full text-sm lg:text-base rounded-default p-[5px] md:p-[8.5px] lg:p-[9px] bg-neutral-100 ${
               theme === 'light' ? 'text-textPrimary' : 'text-gray-500'
            }`}
         >
            {options?.map(option => {
               return (
                  <option key={option.id} value={option.value}>
                     {option.text}
                  </option>
               );
            })}
         </select>
      </div>
   );
};

SelectField.propTypes = {
   theme: PropTypes.string,
   label: PropTypes.string,
   name: PropTypes.string,
   options: PropTypes.array,
   defaultValueData: PropTypes.any,
   modifyClasses: PropTypes.string,
};

export default SelectField;
