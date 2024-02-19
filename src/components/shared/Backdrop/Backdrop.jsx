// client component
'use client';

// redux
import { useSelector } from 'react-redux';

// react
import PropTypes from 'prop-types';

const Backdrop = ({ onClickFunction = null, modifyClasses = '' }) => {
   const { backdropOpen } = useSelector(store => store.backdrop);

   return (
      <div
         onClick={onClickFunction}
         className={`fixed w-screen top-0 left-0 h-screen z-20 bg-[rgba(0,0,0,0.25)] transition-all duration-default ${
            backdropOpen ? 'opacity-100 visible' : 'opacity-0 collapse'
         } ${modifyClasses}`}
      ></div>
   );
};

Backdrop.propTypes = {
   modifyClasses: PropTypes.string,
   onClickFunction: PropTypes.any,
};

export default Backdrop;
