// react imports
import PropTypes from 'prop-types';

const InnerContainerLeft = ({ children, modifyClasses = '' }) => {
  return (
    <div
      className={`w-full pl-4 xs:pl-6 md:pl-8 lg:pl-10 xl:pl-14 2xl:pl-20 3xl:pl-28 ${modifyClasses}`}
    >
      {children}
    </div>
  );
};

InnerContainerLeft.propTypes = {
  children: PropTypes.node,
  modifyClasses: PropTypes.string,
};

export default InnerContainerLeft;
