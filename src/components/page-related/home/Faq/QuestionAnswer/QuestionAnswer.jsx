'use client';

// react
import { useState } from 'react';
import PropTypes from 'prop-types';

// icons
import { Icon } from '@iconify/react';

// component
import Text from '@/components/shared/Text/Text';
import Accordion from '@/components/shared/Accordion/Accordion';

const QuestionAnswer = ({ data, modifyClasses = '' }) => {
   const [expanded, setExpanded] = useState(false);
   const { question, answer } = data;

   return (
      <div
         onClick={() => setExpanded(prev => !prev)}
         className={`bg-white border border-neutral-200 px-4 py-6 rounded-xl shadow-sm 2xl:shadow-small cursor-pointer ${modifyClasses}`}
      >
         <div className='flex items-start justify-between gap-2'>
            {/* question */}
            <p className='font-semibold text-xl'>{question}</p>

            {/* caret button */}
            <button className='block text-primary' aria-label='Expand button'>
               <Icon
                  className={`text-xl 2xl:text-2xl transition-all duration-default ${
                     expanded ? 'rotate-180' : 'rotate-0'
                  }`}
                  icon='ph:caret-down-fill'
               />
            </button>
         </div>

         {/* answer */}
         <Accordion expanded={expanded}>
            <Text text={answer} modifyClasses='pt-4' />
         </Accordion>
      </div>
   );
};

QuestionAnswer.propTypes = {
   data: PropTypes.object,
   modifyClasses: PropTypes.string,
};

export default QuestionAnswer;
