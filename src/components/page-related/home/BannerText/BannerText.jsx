// react
import PropTypes from 'prop-types';

// component
import LinkBtn from '@/components/shared/LinkBtn/LinkBtn';

function BannerText({ heading, subheading }) {
  return (
    <div className='w-full h-full flex items-center text-center lg:text-left'>
      <div className='w-full lg:w-[80%]'>
        {/* text part */}
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl 3xl:text-6xl mb-4 2md:mb-5'>
          {heading}
        </h1>
        <p className='text-lg md:text-xl 3xl:text-2xl xsm:w-[80%] md:w-[60%] lg:w-full mx-auto mb-5 2md:mb-6'>
          {subheading}
        </p>

        {/* buttons */}
        <div className='flex flex-col sm:flex-row gap-2 justify-center items-center lg:flex-col lg:items-start xl:flex-row xl:justify-start lg:gap-2 3xl:gap-3'>
          <LinkBtn text="Let's Explore" url='/task-management' />
          <LinkBtn
            text='Learn More'
            url='#learn-more'
            colorTheme='outlinedPrimary'
            hashed={true}
          />
        </div>
      </div>
    </div>
  );
}

BannerText.propTypes = {
  heading: PropTypes.node,
  subheading: PropTypes.node,
};

export default BannerText;
