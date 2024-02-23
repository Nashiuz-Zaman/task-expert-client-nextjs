import PropTypes from 'prop-types';

const InputField1 = ({
   name,
   type = 'text',
   placeholder = 'Default Placeholder',
   modifyClasses = '',
}) => {
   return (
      <input
         name={name}
         type={type}
         placeholder={placeholder}
         className={`block w-full rounded-default border border-textLight py-2 px-4 text-textPrimary ${modifyClasses}`}
      />
   );
};

InputField1.propTypes = {
   name: PropTypes.string,
   type: PropTypes.string,
   placeholder: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default InputField1;
