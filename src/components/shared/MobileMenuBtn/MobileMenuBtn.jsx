// react
import PropTypes from "prop-types";

// icon
import { IoIosMenu } from "react-icons/io";

const MobileMenuBtn = ({ openNavFunction, modifyClasses = "" }) => {
  return (
    <button
      className={`block w-max  ${modifyClasses}`}
      onClick={openNavFunction}
    >
      <IoIosMenu className="text-4xl text-black"></IoIosMenu>
    </button>
  );
};

MobileMenuBtn.propTypes = {
  openNavFunction: PropTypes.func,
  modifyClasses: PropTypes.string,
};
export default MobileMenuBtn;
