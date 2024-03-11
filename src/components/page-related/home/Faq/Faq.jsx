// component
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';
import QuestionAnswer from './QuestionAnswer/QuestionAnswer';

// data
import { faqContent } from '@/uiData/homeUiContent';

const Faq = () => {
   const { bgImg, set1, set2 } = faqContent;

   return (
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] xl:grid-cols-[1fr_1.85fr] 2xl:grid-cols-[1fr_2.25fr] gap-y-7 lg:gap-0'>
         {/* small screen heading */}
         <h2
            className={`text-2xl font-bold 2md:text-3xl text-center lg:hidden`}
         >
            FAQs<span className='text-primary'>.</span>
         </h2>

         {/* left side image */}
         <div
            className='w-full h-full aspect-[16/10] lg:aspect-auto bg-cover bg-center bg-no-repeat lg:rounded-r-[2rem] xl:rounded-r-[3rem]'
            style={{ backgroundImage: `url(${bgImg})` }}
         >
            &nbsp;
         </div>

         {/*  right side  */}
         <div className='w-full h-full py-2 2xl:py-4 lg:pl-6 2xl:pl-9 2xl:min-h-[30rem]'>
            {/* large screen heading */}
            <h2
               className={`text-2xl font-bold xl:text-4xl mb-6 3xl:mb-8 hidden lg:block`}
            >
               FAQs<span className='text-primary'>.</span>
            </h2>

            {/* faq questions and answers below */}
            <InnerContainer paddingSide='right' modifyClasses='grid grid-cols-1 2md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-4 lg:gap-5'>
               <div className='space-y-5'>
                  {set1?.map(question => {
                     return (
                        <QuestionAnswer key={question.id} data={question} />
                     );
                  })}
               </div>

               <div className='space-y-5'>
                  {set2?.map(question => {
                     return (
                        <QuestionAnswer key={question.id} data={question} />
                     );
                  })}
               </div>
            </InnerContainer>
         </div>
      </div>
   );
};

export default Faq;
