// react
import PropTypes from 'prop-types';

const TextareaField = ({
   theme = 'light',
   label = 'Default Label',
   name,
   defaultValueData,
   modifyClasses = '',
   placeholder = 'Default placeholder',
}) => {
   return (
      <div className={`${modifyClasses}`}>
         {/* label */}
         <label
            className={`block mb-1 font-bold ${
               theme === 'light' ? 'text-textPrimary' : 'text-white'
            }`}
         >
            {label}
         </label>

         {/* input area */}
         <textarea
            required
            defaultValue={defaultValueData}
            className={`block rounded-default !w-full text-sm lg:text-base p-1 md:p-2 font-inherit bg-lightGray h-12 ${
               theme === 'light' ? 'text-textPrimary' : 'text-white'
            }`}
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
   modifyClasses: PropTypes.string,
};

export default TextareaField;
