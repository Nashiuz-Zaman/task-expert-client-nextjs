// react
import PropTypes from 'prop-types';

const InputField2 = ({
   theme = 'light',
   type = 'text',
   label = 'Default Label',
   placeholder = 'Default placeholder',
   name = '',
   maxLength = null,
   modifyClasses = '',
   defaultValueData = '',
   labelModifyClasses = '',
   inputModifyClasses = ''
}) => {
   return (
      <div className={`${modifyClasses}`}>
         <label className={`block text-sm xs:text-base md:text-lg mb-1 font-bold capitalize ${labelModifyClasses}`}>{label}</label>
         {/* input field */}
         <input        
            required
            placeholder={placeholder}
            maxLength={maxLength}
            defaultValue={defaultValueData}
            className={`${
               theme === 'light' ? 'text-textMediumLight' : 'text-white'
            } block rounded-default !w-full text-xs xs:text-sm md:text-base p-1 md:p-2 font-inherit bg-neutral-100 ${inputModifyClasses}`}
            type={type}
            name={name}
         />
      </div>
   );
};

InputField2.propTypes = {
   theme: PropTypes.string,
   type: PropTypes.string,
   label: PropTypes.string,
   placeholder: PropTypes.string,
   defaultValueData: PropTypes.string,
   inputModifyClasses: PropTypes.string,
   labelModifyClasses: PropTypes.string,
   name: PropTypes.string,
   maxLength: PropTypes.number,
   modifyClasses: PropTypes.string,
};

export default InputField2;
