// component
import ProfileInformation from '@/components/page-related/settings/ProfileInformation/ProfileInformation';

const page = () => {
   return (
      <div className='h-full flex flex-col'>
         <div className='mx-4 md:mx-8 xl:mx-16 bg-white my-8 md:my-12 lg:my-14 xl:my-16 rounded-xl shadow-medium overflow-hidden'>
            {/* main heading */}
            <h2 className='bg-primary text-white font-semibold leading-none text-xl p-4 text-center'>Profile</h2>

            <ProfileInformation /> 
         </div>
      </div>
   );
};

export default page;
