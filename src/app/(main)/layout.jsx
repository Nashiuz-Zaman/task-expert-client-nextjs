// components
import Footer from '@/components/shared/Footer/Footer';
import Header from '@/components/shared/Header/Header';

const MainLayout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col max-w-[120rem] mx-auto overflow-x-hidden'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
