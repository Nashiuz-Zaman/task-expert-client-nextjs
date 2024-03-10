// react
import PropTypes from 'prop-types';

const Text = ({ text, modifyClasses = '' }) => {
   return (
      <p className={`!leading-normal text-neutral-600 text-lg lg:text-xl ${modifyClasses}`}>
         {text}
      </p>
   );
};

Text.propTypes = {
   text: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default Text;
