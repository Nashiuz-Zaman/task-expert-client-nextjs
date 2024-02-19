// react
import PropTypes from 'prop-types';

// components
import DashboardHeader from '@/components/shared/DashboardHeader/DashboardHeader';
import DashboardNav from '@/components/shared/DashboardNav/DashboardNav';

const DashboardLayout = ({ children }) => {
   return (
      <div className='h-screen flex flex-col'>
         {/* dashboard header */}
         <DashboardHeader />

         {/* container below the header */}
         <div className='grow grid grid-cols-1 xl:grid-cols-[22.5rem_1fr]'>
            {/* left side */}
            <div className='hidden xl:block bg-lightGray border-r border-lightBorder'>
               <DashboardNav />
            </div>

            {/* right side */}
            <div className='h-[calc(100vh-5.8rem)] py-[4rem] px-4 md:px-8 overflow-y-auto'>
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
