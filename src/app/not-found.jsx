// next
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='min-h-screen flex justify-center items-center py-sectionGapLg'>
      <div className='max-w-[90rem] 3xl:max-w-full px-6 md:px-8 lg:px-12 2xl:px-0 mx-auto 3xl:px-[7rem]'>
        <div>
          {/* error message */}

          <p className='text-center text-3xl font-semibold'>
            404 | No page found
          </p>

          {/* link to go back to home */}
          <Link
            href={'/'}
            className='bg-primary rounded-full px-4 py-2 text-white block w-max mx-auto mt-8'
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
