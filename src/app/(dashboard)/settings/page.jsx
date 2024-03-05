// component
import ProfileInfoChanger from '@/components/page-related/settings/ProfileInfoChanger/ProfileInfoChanger';
import ProfilePhotoChanger from '@/components/page-related/settings/ProfilePhotoChanger/ProfilePhotoChanger';

const page = () => {
   return (
      <div className='h-full flex flex-col'>
         <div className='mx-4 md:mx-8 xl:mx-16 bg-white my-8 md:my-12 lg:my-14 xl:my-16 rounded-xl shadow-small'>

            {/* main heading */}
            <h2 className='bg-primary rounded-t-xl text-white font-semibold leading-none text-xl p-3 text-center'>
               Profile
            </h2>


            <ProfilePhotoChanger modifyClasses='my-8' />

            <ProfileInfoChanger />
         </div>
      </div>
   );
};

export default page;
