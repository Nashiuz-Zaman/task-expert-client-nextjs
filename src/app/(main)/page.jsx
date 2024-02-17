// components
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';
import Banner from '@/components/page-related/home/Banner/Banner';
import TargetAudience from '@/components/page-related/home/TargetAudience/TargetAudience';
import LoginModal from '@/components/forms/LoginModal/LoginModal';

const Home = () => {
   return (
      <>
         <section className='mt-custom2md mb-customXl md:mb-custom2xl'>
            <InnerContainer>
               <Banner />
            </InnerContainer>
         </section>

         <section id='learn-more' className='mb-customXl md:mb-custom2xl'>
            <InnerContainer>
               <TargetAudience />
            </InnerContainer>
         </section>

         {/* forms */}
         <InnerContainer>
            <LoginModal />
         </InnerContainer>
      </>
   );
};

export default Home;
