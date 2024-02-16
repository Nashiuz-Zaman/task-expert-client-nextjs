// components
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';
import Banner from '@/components/page-related/home/Banner/Banner';

const Home = () => {
  return (
    <>
      <section className='mt-custom2md'>
        <InnerContainer>
          <Banner />
        </InnerContainer>
      </section>
    </>
  );
};

export default Home;
