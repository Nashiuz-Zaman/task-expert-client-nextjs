// react
import PropTypes from 'prop-types';

// components
import DashboardHeader from '@/components/page-related/dashboard-home/DashboardHeader/DashboardHeader';
import DashboardNav from '@/components/page-related/dashboard-home/DashboardNav/DashboardNav';

const DashboardLayout = ({ children }) => {
   return (
      <div className='max-w-[120rem] mx-auto h-screen grid grid-cols-1 lg:grid-cols-[18rem_1fr] xl:grid-cols-[22.5rem_1fr]'>
         <DashboardNav modifyClasses='hidden lg:block border-r border-lightBorder' />

         <div className='h-full'>
            <DashboardHeader />

            <div className='h-[calc(100vh-5.8rem)] overflow-y-auto'>
               {/* page  */}
               {children}
            </div>
         </div>
      </div>
   );
};

DashboardLayout.propTypes = {
   children: PropTypes.any,
};

export default DashboardLayout;
