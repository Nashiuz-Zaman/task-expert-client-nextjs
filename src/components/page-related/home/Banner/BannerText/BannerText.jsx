// react
import PropTypes from 'prop-types';

// component
import BannerTextBtns from './BannerTextBtns/BannerTextBtns';

function BannerText({ heading, subheading, modifyClasses = '' }) {
   return (
      <div
         className={`w-full h-full flex items-center text-center lg:text-left ${modifyClasses}`}
      >
         <div className='w-full lg:w-[80%]'>
            {/* text part */}
            <h1 className='font-bold text-3xl sm:text-4xl md:text-[2.6rem] xl:text-5xl 3xl:text-6xl mb-4 2md:mb-5 !leading-snug'>
               {heading}
            </h1>

            <p className='text-lg 2xl:text-[1.6rem] xs:w-[80%] md:w-[60%] lg:w-full mx-auto mb-5 2md:mb-6 font-medium !leading-snug text-neutral-600'>
               {subheading}
            </p>

            {/* buttons */}
            <BannerTextBtns />
         </div>
      </div>
   );
}

BannerText.propTypes = {
   heading: PropTypes.node,
   subheading: PropTypes.node,
   modifyClasses: PropTypes.string,
};

export default BannerText;
