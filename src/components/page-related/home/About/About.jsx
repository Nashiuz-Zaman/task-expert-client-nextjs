'use client';

// components
import Carousel1 from '@/components/shared/Carousel1/Carousel1';
import Carousel2 from '@/components/shared/Carousel2/Carousel2';
import Text from '@/components/shared/Text/Text';

// hooks
import useMediaQueryMatcher from '@/hooks/useMediaQueryMatcher';

// data
import { aboutContent } from '@/uiData/homeUiContent';
import { useEffect, useState } from 'react';

const About = () => {
   const { isComputer } = useMediaQueryMatcher();
   const [isClient, setIsClient] = useState(false);
   const { images } = aboutContent;

   useEffect(() => {
      setIsClient(true);
   }, []);


   const heading = isClient ? (
      <h2
         className={`text-2xl !leading-snug font-bold mb-5 sm:mb-7 2md:text-left 2md:mb-5 2md:text-3xl xl:text-4xl 3xl:text-5xl`}
      >
         Task Expert <br /> Your <span className='text-primary'>Personal</span>{' '}
         Assistant<span className='text-primary'>.</span>
      </h2> 
   ) : ''

   const description = isClient ? (
      <Text
         modifyClasses='sm:basis-1/2'
         text="Welcome to Task Expert, your all-in-one solution for efficient task management. Whether you're a professional, student, or anyone in need of streamlined productivity, Task Expert offers a minimalist yet powerful interface. Seamlessly organize tasks into 'Todo,' 'Completed,' and 'Ongoing' states. Create, edit, and delete tasks effortlessly, and pin/unpin for quick access. Delve into task details to monitor progress and check the countdown to deadlines. With Task Expert, simplify your day, stay organized, and boost productivity effortlessly."
      />
   ) : ''

   // if screen is smaller than 1024px
   if (isClient && isComputer === false) {
      return (
         <div className='xs:w-[25rem] xs:mx-auto text-center sm:text-left sm:w-full'>
            {heading}

            <div className='sm:flex flex-row-reverse items-stretch gap-5 md:gap-10'>
               <Carousel2
                  imagesData={images}
                  modifyClasses='mb-6 xs:w-[25rem] sm:w-[initial] sm:basis-1/2 sm:mb-0 mx-auto sm:mx-0'
                  interval={3500}
               />
               {description}
            </div>
         </div>
      );
   }

   // if screen is at least 1024px
   if (isClient && isComputer === true) {
      return (
         <div className='grid gap-4 grid-cols-[1fr_1.5fr] xl:gap-6 2xl:gap-8 3xl:gap-14 items-center'>
            <div>
               {heading}
               {description}
            </div>

            <Carousel1  imagesData={images}/>
         </div>
      );
   }
};

export default About;
