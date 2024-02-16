// components
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';
import Banner from '@/components/page-related/home/Banner/Banner';
import TargetAudience from '@/components/page-related/home/TargetAudience/TargetAudience';

const Home = () => {
  return (
    <>
      <section className='mt-custom2md mb-custom2xl'>
        <InnerContainer>
          <Banner />
        </InnerContainer>
      </section>

      <section id='learn-more' className='mb-custom3xl'>
        <InnerContainer>
          <TargetAudience />
        </InnerContainer>
      </section>
    </>
  );
};

export default Home;
