// react
import PropTypes from 'prop-types';

const InputCheckboxField = ({
   paramData,
   onChangeFunction,
   checked = false,
   modifyClasses = '',
}) => {
   const { text, value } = paramData;

   return (
      <label className={`flex items-center gap-2 font-medium ${modifyClasses}`}>
         <input
            type='checkbox'
            className='accent-white text-white border border-neutral-500'
            value={value}
            checked={checked}
            onChange={onChangeFunction}
         />
         <span className='text-inherit'>{text}</span>
      </label>
   );
};

InputCheckboxField.propTypes = {
   paramData: PropTypes.object,
   onChangeFunction: PropTypes.func,
   checked: PropTypes.bool,
   modifyClasses: PropTypes.string,
};

export default InputCheckboxField;
