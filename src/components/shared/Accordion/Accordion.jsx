// react
import PropTypes from "prop-types";

const Accordion = ({ children, expanded, modifyClasses = "" }) => {
  return (
    <div
      className={`grid grid-cols-1 transition-all duration-default ${
        expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      } ${modifyClasses}`}
    >
      <div className="overflow-hidden"> {children}</div>
    </div>
  );
};

Accordion.propTypes = {
  expanded: PropTypes.bool,
  modifyClasses: PropTypes.string,
  children: PropTypes.any,
};

export default Accordion;
