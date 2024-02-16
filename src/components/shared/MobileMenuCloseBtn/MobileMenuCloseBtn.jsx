// react
import PropTypes from "prop-types";

// react icon
import { AiOutlineClose } from "react-icons/ai";

const MobileMenuCloseBtn = ({ clickHandler }) => {
  return (
    <button className="ml-auto w-max block mb-10" onClick={clickHandler}>
      <AiOutlineClose className="text-3xl text-white"></AiOutlineClose>
    </button>
  );
};

MobileMenuCloseBtn.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default MobileMenuCloseBtn;
