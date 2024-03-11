'use client';

// react
import PropTypes from 'prop-types';

const Accordion = ({ children, expanded = false, modifyClasses = '' }) => {
   return (
      <div className={`${modifyClasses}`}>
         <div
            className={`grid grid-cols-1 transition-all duration-default ${
               expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
         >
            <div className='overflow-hidden'>{children}</div>
         </div>
      </div>
   );
};

Accordion.propTypes = {
   modifyClasses: PropTypes.string,
   expanded: PropTypes.bool,
   children: PropTypes.any,
};

export default Accordion;
