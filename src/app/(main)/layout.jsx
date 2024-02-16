const MainLayout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col max-w-[120rem] mx-auto overflow-x-hidden'>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
