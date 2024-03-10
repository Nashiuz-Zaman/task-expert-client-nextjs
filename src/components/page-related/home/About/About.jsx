'use client';

// react
import { useEffect, useState } from 'react';

// components
import Carousel1 from '@/components/shared/Carousel1/Carousel1';
import Carousel2 from '@/components/shared/Carousel2/Carousel2';
import Text from '@/components/shared/Text/Text';

// hooks
import useMediaQueryMatcher from '@/hooks/useMediaQueryMatcher';

// data
import { aboutContent } from '@/uiData/homeUiContent';
import LinkBtn from '@/components/buttons/LinkBtn/LinkBtn';

const About = () => {
   const { isComputer } = useMediaQueryMatcher();
   const [isClient, setIsClient] = useState(false);
   const { images } = aboutContent;

   useEffect(() => {
      setIsClient(true);
   }, []);

   const heading = (
      <h2
         className={`text-2xl !leading-snug font-bold 2md:text-3xl xl:text-4xl 3xl:text-5xl md:col-span-2`}
      >
         Your <span className='text-primary'>Personal</span>{' '}
         Assistant<span className='text-primary'>.</span>
      </h2>
   );

   const description = (
      <Text
         modifyClasses='sm:basis-1/2 !leading-[1.7] text-left md:order-3'
         text="Task Expert: Your simple solution for getting things done! Ideal for professionals, students, or anyone aiming for a clutter-free day. Organize tasks easily into 'Todo,' 'Completed,' and 'Ongoing.' Effortlessly create, edit, and delete tasks, and pin for quick access. Dive into details to track progress and see time remaining. Simplify your day, stay organized, and boost productivity with Task Expert."
      />
   );

   // if screen is smaller than 1024px
   if (isClient && isComputer === false) {
      return (
         <div className='text-center grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-x-6 md:text-left'>
            {heading}

            <LinkBtn
               text='Discover Features'
               url='#'
               modifyClasses='mx-auto md:mx-0 md:col-span-2'
            />

            <Carousel2
               imagesData={images}
               modifyClasses='md:order-4 md:self-stretch'
               interval={3500}
            />
            
            {description}
         </div>
      );
   }

   // if screen is at least 1024px
   if (isClient && isComputer === true) {
      return (
         <div className='grid gap-4 grid-cols-2 xl:gap-6 2xl:gap-8 3xl:gap-14 items-center'>
            <div className='space-y-7'>
               {heading}
               <LinkBtn text='Discover Features' url='#' />
               {description}
            </div>

            <Carousel1 imagesData={images} />
         </div>
      );
   }
};

export default About;
