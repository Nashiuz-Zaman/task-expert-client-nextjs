// react

import PropTypes from 'prop-types';

// icons
import { Icon } from '@iconify/react';

const LoadingSpinner = ({
   text = 'Loading',
   modifyClasses = '',
   modifyInnerContainerClasses = '',
   onlyLoader = false,
   textSizeClass = 'text-base',
   loaderSizeClass = 'text-base',
}) => {
   return (
      <div className={`${modifyClasses}`}>
         <div
            className={`flex grow flex-col md:flex-row justify-center items-center gap-3 ${modifyInnerContainerClasses}`}
         >
            {/* text */}
            {!onlyLoader && (
               <p style={{ color: 'inherit' }} className={textSizeClass}>
                  {text}
               </p>
            )}

            {/* loading spinner */}
            <Icon
               className={loaderSizeClass}
               icon='svg-spinners:3-dots-rotate'
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
