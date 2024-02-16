// imports
import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';
import PhotoGallery2 from '@/components/shared/PhotoGallery2/PhotoGallery2';
import LinkBtn from '@/components/shared/LinkBtn/LinkBtn';

// data
import { targetAudienceTextContent } from '@/uiData/homeUiContent';

const TargetAudience = () => {
  const { images, heading, subheading, description } =
    targetAudienceTextContent;

  return (
    <div>
      {/* heading */}
      <SectionHeading
        text={heading}
        modifyClasses='text-center text-5xl !font-extrabold mb-customXsm'
      />

      <PhotoGallery2 imagesData={images} modifyClasses='mb-customSm' />

      {/* subheading */}
      <p className='font-semibold text-3xl text-center mb-4 text-primary'>
        {subheading}
      </p>

      {/* description */}
      <p className='w-full md:w-[80%] lg:w-[60%] lg:text-xl font-medium mx-auto text-center leading-[1.6] mb-customXsm'>
        {description}
      </p>

      <LinkBtn
        url='/register'
        text="Sign Up - It's free!"
        modifyClasses='mx-auto'
      />
    </div>
  );
};

export default TargetAudience;
