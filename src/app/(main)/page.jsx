// components
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';
import Banner from '@/components/page-related/home/Banner/Banner';
import TargetAudience from '@/components/page-related/home/TargetAudience/TargetAudience';
import LoginModal from '@/components/forms/LoginModal/LoginModal';
import RegistrationModal from '@/components/forms/RegistrationModal/RegtistrationModal';
import PasswordResetModal from '@/components/forms/PasswordResetModal/PasswordResetModal';
import About from '@/components/page-related/home/About/About';

const Home = () => {
   return (
      <>
         <section className='mt-11 lg:mt-24 xl:mt-[7.5rem] mb-sectionGapMd md:mb-sectionGapLg'>
            <InnerContainer>
               <Banner />
            </InnerContainer>
         </section>

         <section className='mb-sectionGapMd md:mb-sectionGapLg'>
            <InnerContainer>
               <About />
            </InnerContainer>
         </section>

         <section id='learn-more' className='mb-sectionGapMd md:mb-sectionGapLg'>
            <InnerContainer>
               <TargetAudience />
            </InnerContainer>
         </section>

         {/* forms */}
         <InnerContainer>
            <LoginModal />
            <RegistrationModal />
            <PasswordResetModal />
         </InnerContainer>
      </>
   );
};

export default Home;
