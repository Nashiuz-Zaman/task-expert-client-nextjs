// components
import Header from '@/components/shared/Header/Header';

const MainLayout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col max-w-[120rem] mx-auto overflow-x-hidden'>
      <Header modifyClasses='mb-sectionGapMd' />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
