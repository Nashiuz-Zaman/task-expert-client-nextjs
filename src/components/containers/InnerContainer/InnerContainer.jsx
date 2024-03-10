// react imports
import PropTypes from 'prop-types';

const InnerContainer = ({ children, modifyClasses = '' }) => {
  return (
    <div
      className={`w-full px-4 xs:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 3xl:px-28 ${modifyClasses}`}
    >
      {children}
    </div>
  );
};

InnerContainer.propTypes = {
  children: PropTypes.node,
  modifyClasses: PropTypes.string,
};

export default InnerContainer;
