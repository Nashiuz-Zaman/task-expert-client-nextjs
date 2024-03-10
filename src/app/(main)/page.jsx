// components
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';
import Banner from '@/components/page-related/home/Banner/Banner';
import LoginModal from '@/components/forms/LoginModal/LoginModal';
import RegistrationModal from '@/components/forms/RegistrationModal/RegtistrationModal';
import PasswordResetModal from '@/components/forms/PasswordResetModal/PasswordResetModal';
import About from '@/components/page-related/home/About/About';
import Features from '@/components/page-related/home/Features/Features';

const Home = () => {
   return (
      <>
         <section className='mt-sectionGapSm 2md:mt-sectionGapMd lg:mt-24 xl:mt-[7.5rem] mb-sectionGapMd md:mb-sectionGapLg'>
            <InnerContainer>
               <Banner />
            </InnerContainer>
         </section>

         <section className='mb-sectionGapMd md:mb-sectionGapLg'>
            <InnerContainer>
               <About />
            </InnerContainer>
         </section>

         <section
            id='features'
            className='mb-sectionGapMd md:mb-sectionGapLg'
         >
            <InnerContainer>          
               <Features />
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
