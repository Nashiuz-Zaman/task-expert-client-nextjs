// react
import PropTypes from 'prop-types';

const InputRadioField = ({
   paramData,
   onChangeFunction,
   checked = false,
   modifyClasses = '',
}) => {
   const { text, value } = paramData;

   return (
      <label className={`flex items-center gap-2 font-medium ${modifyClasses}`}>
         <input
            type='radio'
            className='accent-textPrimary border border-neutral-500'
            value={value}
            checked={checked}
            onChange={onChangeFunction}
         />
         <span className='text-inherit'>{text}</span>
      </label>
   );
};

InputRadioField.propTypes = {
   paramData: PropTypes.object,
   onChangeFunction: PropTypes.func,
   checked: PropTypes.bool,
   modifyClasses: PropTypes.string,
};

export default InputRadioField;
