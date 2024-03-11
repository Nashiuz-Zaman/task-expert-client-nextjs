// react imports
import PropTypes from 'prop-types';

const InnerContainer = ({
   children,
   paddingSide = 'both',
   modifyClasses = '',
}) => {
   return (
      <div
         className={`w-full ${
            paddingSide === 'left'
               ? 'pl-4 xs:pl-6 md:pl-8 lg:pl-10 xl:pl-14 2xl:pl-20 3xl:pl-28'
               : paddingSide === 'right'
               ? 'pr-4 xs:pr-6 md:pr-8 lg:pr-10 xl:pr-14 2xl:pr-20 3xl:pr-28'
               : 'px-4 xs:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 3xl:px-28'
         }  ${modifyClasses}`}
      >
         {children}
      </div>
   );
};

InnerContainer.propTypes = {
   children: PropTypes.node,
   side: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default InnerContainer;
