import PropTypes from 'prop-types';

const InputField1 = ({
   name,
   label,
   type = 'text',
   placeholder = 'Default Placeholder',
   modifyClasses = '',
   labelModifyClasses = '',
   inputModifyClasses = ''
}) => {
   return (
      <label className={`w-full block text-textPrimary ${modifyClasses}`}>
         {label && <span className={`block font-bold text-sm xs:text-base md:text-lg mb-2 md:mb-4 ${labelModifyClasses}`}>{label}</span>}

         <input
            name={name}
            type={type}
            placeholder={placeholder}
            className={`block w-full rounded-default border text-xs xs:text-sm md:text-base border-neutral-400 py-2 px-4 ${inputModifyClasses}`}
         />
      </label>
   );
};

InputField1.propTypes = {
   name: PropTypes.string,
   label: PropTypes.string,
   type: PropTypes.string,
   placeholder: PropTypes.string,
   modifyClasses: PropTypes.string,
   inputModifyClasses: PropTypes.string,
   labelModifyClasses: PropTypes.string,
};

export default InputField1;
