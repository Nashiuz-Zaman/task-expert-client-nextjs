// react imports
import PropTypes from 'prop-types';

const InnerContainerLeft = ({ children, modifyClasses = '' }) => {
  return (
    <div
      className={`w-full pl-5 xs:pl-6 md:pl-8 lg:pl-12 xl:pl-[3.5rem] 2xl:pl-[4.5rem] 3xl:pl-[7rem] ${modifyClasses}`}
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
