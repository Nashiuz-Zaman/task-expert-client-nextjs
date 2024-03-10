// react
import PropTypes from 'prop-types';

const Text = ({ text, modifyClasses = '' }) => {
   return (
      <p className={` text-neutral-600 text-lg lg:text-base 2xl:text-lg 3xl:text-xl !leading-normal ${modifyClasses}`}>
         {text}
      </p>
   );
};

Text.propTypes = {
   text: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default Text;
