// components
import BannerText from '@/components/page-related/home/Banner/BannerText/BannerText';
import Video from '@/components/shared/Video/Video';

// data
import { homeTopBannerTextContent } from '@/uiData/homeUiContent';
const bannerVideo = '/banner-video.mp4';

const Banner = () => {
   // extract heading and subheading
   const { heading, subheading } = homeTopBannerTextContent;

   return (
      <div className='grid grid-cols-1 gap-12 sm:gap-[5rem] lg:gap-0 lg:grid-cols-2 items-center'>
         {/* banner text part */}
         <div>
            <BannerText heading={heading} subheading={subheading} />
         </div>

         {/* banner image part */}
         <div>
            <div className='w-full h-full shadow-medium'>
               <Video videoSource={bannerVideo} soundBtn={false} />
            </div>
         </div>
      </div>
   );
};

export default Banner;
