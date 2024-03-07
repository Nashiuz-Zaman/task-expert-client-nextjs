// react
import PropTypes from 'prop-types';

const TextareaField = ({
   theme = 'light',
   label = 'Default Label',
   name,
   defaultValueData,
   maxLength = null,
   placeholder = 'Default placeholder',
   modifyClasses = '',
   labelModifyClasses = '',
   inputModifyClasses = ''
}) => {
   return (
      <div className={`${modifyClasses}`}>
         {/* label */}
         <label
            className={`block mb-1 font-bold text-sm xs:text-base md:text-lg ${
               theme === 'light' ? 'text-textPrimary' : 'text-white'
            } ${labelModifyClasses}`}
         >
            {label}
         </label>

         {/* input area */}
         <textarea
            maxLength={maxLength}
            required
            defaultValue={defaultValueData}
            className={`block rounded-default !w-full text-xs xs:text-sm md:text-base p-1 md:p-2 font-inherit bg-neutral-100 h-16 ${
               theme === 'light' ? 'text-textPrimary' : 'text-white'
            } ${inputModifyClasses}`}
            name={name}
            placeholder={placeholder}
         ></textarea>
      </div>
   );
};

TextareaField.propTypes = {
   theme: PropTypes.string,
   label: PropTypes.string,
   name: PropTypes.string,
   placeholder: PropTypes.string,
   defaultValueData: PropTypes.string,
   maxLength: PropTypes.number,
   inputModifyClasses: PropTypes.string,
   labelModifyClasses: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default TextareaField;
