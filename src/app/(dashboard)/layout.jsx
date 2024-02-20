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

            <div
               style={{
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 1270 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(255, 134, 49, 1)" d="M 0 500 C 260.8 500 391.2 340 652 340 L 652 340 L 652 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(255, 134, 49, 1)" d="M 651 340 C 898.6 340 1022.4 211 1270 211 L 1270 211 L 1270 0 L 651 0 Z" stroke-width="0"></path> </svg>')`,
               }}
               className='h-[calc(100vh-5.8rem)] relative overflow-y-auto !bg-cover !bg-no-repeat !bg-center'
            >
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
