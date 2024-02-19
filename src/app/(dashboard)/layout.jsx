// react
import PropTypes from 'prop-types';

// components
import DashboardHeader from '@/components/shared/DashboardHeader/DashboardHeader';
import DashboardFooter from '@/components/shared/DashboardFooter/DashboardFooter';
import DashboardNav from '@/components/shared/DashboardNav/DashboardNav';

// data
import { dashboardNavOptions } from '@/uiData/navigationOptions';

const DashboardLayout = ({ children }) => {
   return (
      <div className='h-screen flex flex-col'>
         <DashboardHeader />

         {/* container below the header */}
         <div className='grow grid grid-cols-1 xl:grid-cols-[20rem_1fr]'>
            {/* left side */}
            <div className='hidden xl:block bg-lightGray border-r border-lightBorder'>
               <DashboardNav navOptions={dashboardNavOptions} />
            </div>

            {/* right side start */}
            <div className='flex flex-col h-full'>
               {/* page  */}
               <div className='h-[calc(100vh-11.0859375rem)] overflow-y-auto py-elementGapLg px-elementGapSm md:px-elementGapMd xl:px-elementGapLg'>
                  {children}
               </div>

               {/* footer */}
               <DashboardFooter />
            </div>
            {/* right side end */}
         </div>
      </div>
   );
};

DashboardLayout.propTypes = {
   children: PropTypes.any,
};

export default DashboardLayout;
