// react
import PropTypes from 'prop-types';

// components
import BrandLogo from '../../../shared/BrandLogo/BrandLogo';
import DashboardNavContent from '../DashboardNavContent/DashboardNavContent';

const DashboardNav = ({ modifyClasses = '' }) => {
   // common css classes
   const inlineMarginClasses = 'mx-6';

   return (
      <div className={`py-9 ${modifyClasses}`}>
         {/* website logo */}
         <BrandLogo
            modifyClasses={`${inlineMarginClasses} mb-customSm lg:!h-10`}
         />

         <DashboardNavContent />
      </div>
   );
};

DashboardNav.propTypes = {
   modifyClasses: PropTypes.string,
};

export default DashboardNav;
