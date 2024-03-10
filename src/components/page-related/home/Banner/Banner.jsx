// next js
import Image from 'next/image';

// components
import BannerText from '@/components/page-related/home/Banner/BannerText/BannerText';

// data
import { homeTopBannerTextContent } from '@/uiData/homeUiContent';
import bannerImg from './../../../../assets/banner/banner.webp';

const Banner = () => {
   // extract heading and subheading
   const { heading, subheading } = homeTopBannerTextContent;

   return (
      <div className='grid grid-cols-1 gap-12 sm:gap-20 lg:gap-4 xl:gap-6 2xl:gap-8 3xl:gap-14 lg:grid-cols-2 items-center'>
         {/* banner text part */}
         <BannerText
            heading={heading}
            subheading={subheading}
            modifyClasses='lg:animate-fadeInFromLeft'
         />

         {/* banner image part */}
         <div className='w-full h-full xs:w-[27rem] sm:w-[30rem] md:w-[40rem] lg:w-full mx-auto animate-[fade-in_600ms_ease-out_forwards] lg:animate-fadeInFromRight'>
            <Image
               width={600}
               height={450}
               priority={true}
               src={bannerImg}
               className='!w-full !h-full !object-cover rounded-l-full rounded-tr-full shadow-medium'
               alt='Woman working on a laptop'
            />
         </div>
      </div>
   );
};

export default Banner;
