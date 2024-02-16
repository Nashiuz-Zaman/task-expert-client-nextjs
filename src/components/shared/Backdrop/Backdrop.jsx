// client component
'use client';

// redux
import { useSelector } from 'react-redux';

// react
import PropTypes from 'prop-types';

const Backdrop = ({ clickHandler = null, modifyClasses = '' }) => {
  const { open } = useSelector(store => store.backdrop);

  return (
    <div
      onClick={clickHandler}
      className={`fixed w-screen top-0 left-0 h-screen z-20 backdrop-blur-sm transition-all duration-default ${
        open ? 'opacity-100 visible' : 'opacity-0 collapse'
      } ${modifyClasses}`}
    ></div>
  );
};

Backdrop.propTypes = {
  modifyClasses: PropTypes.string,
  clickHandler: PropTypes.any,
};

export default Backdrop;
