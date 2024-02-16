// react
import PropTypes from "prop-types";

// react icons
import { ImSpinner8 } from "react-icons/im";

const LoadingSpinner = ({
  text = "Loading",
  modifyClasses = "",
  modifyInnerContainerClasses = "",
  onlyLoader = false,
  textSizeClass = "text-base",
  loaderSizeClass = "text-base",
}) => {
  return (
    <div className={`${modifyClasses}`}>
      <div
        className={`flex flex-col md:flex-row justify-center items-center gap-3 ${modifyInnerContainerClasses}`}
      >
        {/* text */}
        {!onlyLoader && (
          <p style={{ color: "inherit" }} className={`${textSizeClass}`}>
            {text}
          </p>
        )}

        {/* loading spinner */}
        <ImSpinner8
          style={{ color: "inherit" }}
          className={`animate-spin ${loaderSizeClass}`}
        />
      </div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  text: PropTypes.string,
  onlyLoader: PropTypes.bool,
  modifyInnerContainerClasses: PropTypes.string,
  modifyClasses: PropTypes.string,
  loaderSizeClass: PropTypes.string,
  textSizeClass: PropTypes.string,
};

export default LoadingSpinner;
