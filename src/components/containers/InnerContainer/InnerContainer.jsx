// react imports
import PropTypes from 'prop-types';

const InnerContainer = ({ children, modifyClasses = '' }) => {
  return (
    <div
      className={`w-full px-5 xs:px-6 md:px-8 lg:px-12 xl:px-[3.5rem] 2xl:px-[4.5rem] 3xl:px-[7rem] ${modifyClasses}`}
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
