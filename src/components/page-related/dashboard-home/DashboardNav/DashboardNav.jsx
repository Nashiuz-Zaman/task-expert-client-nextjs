// react
import PropTypes from 'prop-types';

// components
import BrandLogo from '../../../shared/BrandLogo/BrandLogo';
import DashboardNavContent from '../DashboardNavContent/DashboardNavContent';

const DashboardNav = ({ modifyClasses = '' }) => {
   return (
      <div className={`py-9 px-6 ${modifyClasses}`}>
         {/* website logo */}
         <BrandLogo modifyClasses='mb-customSm lg:!h-10' />

         <DashboardNavContent />
      </div>
   );
};

DashboardNav.propTypes = {
   modifyClasses: PropTypes.string,
};

export default DashboardNav;
