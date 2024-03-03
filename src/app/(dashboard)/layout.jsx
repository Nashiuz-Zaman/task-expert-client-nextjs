// react
import PropTypes from 'prop-types';

// components
import DashboardHeader from '@/components/page-related/dashboard-home/DashboardHeader/DashboardHeader';
import DashboardNav from '@/components/page-related/dashboard-home/DashboardNav/DashboardNav';

const DashboardLayout = ({ children }) => {
   return (
      <div className='max-w-[120rem] mx-auto h-screen grid grid-cols-1 2xl:grid-cols-[22.5rem_1fr]'>
         <DashboardNav modifyClasses='hidden 2xl:block border-r border-lightBorder' />

         <div className='h-full'>
            <DashboardHeader />

            <div
               style={{
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 1270 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(255, 134, 49, 1)" d="M 0 438 C 255.60000000000002 438 383.4 281 639 281 L 639 281 L 639 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(255, 134, 49, 1)" d="M 638 281 C 890.8 281 1017.2 131 1270 131 L 1270 131 L 1270 0 L 638 0 Z" stroke-width="0"></path> </svg>')`,
               }}
               className='h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] 2md:h-[calc(100vh-5.8rem)] relative overflow-y-auto !bg-cover !bg-no-repeat !bg-center'
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
