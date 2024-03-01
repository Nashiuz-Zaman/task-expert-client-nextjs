// react
import PropTypes from 'prop-types';

// hooks
import useClickOutside from '../../../hooks/useClickOutside';

const MenuPanel = ({ show = false, setShow, children }) => {
   const handleClickOutside = e => {
      if (!e.target.closest('.menu-panel-focus')) {
         setShow(false);
      }
   };
   useClickOutside(show, handleClickOutside);

   return (
      <div
         className={`absolute w-max top-3/4 right-0 z-30 bg-white border border-neutral-300 shadow-xl rounded-xl p-4 px-5 space-y-4 menu-panel-focus ${
            show ? 'block' : 'hidden'
         }`}
      >
         {children}
      </div>
   );
};

MenuPanel.propTypes = {
   show: PropTypes.bool,
   setShow: PropTypes.func,
   children: PropTypes.any,
};

export default MenuPanel;
