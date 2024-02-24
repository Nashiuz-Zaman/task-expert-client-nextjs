// components
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';
import Banner from '@/components/page-related/home/Banner/Banner';
import TargetAudience from '@/components/page-related/home/TargetAudience/TargetAudience';
import LoginModal from '@/components/forms/LoginModal/LoginModal';
import RegistrationModal from '@/components/forms/RegistrationModal/RegtistrationModal';

const Home = () => {
   return (
      <>
         <section className='mt-customXs lg:mt-customMd xl:mt-custom2md mb-customXl md:mb-custom2xl'>
            <InnerContainer>
               <Banner />
            </InnerContainer>
         </section>

         <section id='learn-more' className='mb-customXl md:mb-custom3xl'>
            <InnerContainer>
               <TargetAudience />
            </InnerContainer>
         </section>

         {/* forms */}
         <InnerContainer>
            <LoginModal />
            <RegistrationModal />
         </InnerContainer>
      </>
   );
};

export default Home;
