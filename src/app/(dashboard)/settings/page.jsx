// component
import ProfileInfoChanger from '@/components/page-related/settings/ProfileInfoChanger/ProfileInfoChanger';
import ProfilePhotoChanger from '@/components/page-related/settings/ProfilePhotoChanger/ProfilePhotoChanger';
import ProfileRemover from './../../../components/page-related/settings/ProfileRemover/ProfileRemover';

const Settings = () => { 
   return (
      <div className='h-max'>
         <div className='mx-4 md:mx-8 xl:mx-16 bg-white rounded-xl shadow-small border border-neutral-200 my-8 md:my-12 lg:my-14 xl:my-16 animate-fadeIn'>
            {/* main heading */}
            <h2 className='bg-white border-b border-neutral-200 rounded-t-xl font-medium leading-none text-xl xl:text-2xl p-4 text-center'>
               Profile
            </h2>

            <div className='grid grid-cols-1 2md:grid-cols-2 lg:grid-cols-[1fr_2fr] py-8 2md:py-16 lg:pb-20'>
               <ProfilePhotoChanger modifyClasses='mb-8 2md:mb-0' />

               <div>
                  <ProfileInfoChanger modifyClasses='mb-8' />

                  <ProfileRemover />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Settings;
