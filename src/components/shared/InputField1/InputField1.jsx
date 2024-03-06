import PropTypes from 'prop-types';

const InputField1 = ({
   name,
   label,
   type = 'text',
   placeholder = 'Default Placeholder',
   modifyClasses = '',
}) => {
   return (
      <label className={`w-full text-textPrimary ${modifyClasses}`}>
         {label && <span className='block font-bold text-sm sm:text-base mb-2 md:mb-4'>{label}</span>}

         <input
            name={name}
            type={type}
            placeholder={placeholder}
            className='block w-full rounded-default border text-sm sm:text-base border-neutral-400 py-2 px-4'
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
};

export default InputField1;
