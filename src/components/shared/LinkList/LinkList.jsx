// react
import PropTypes from 'prop-types';

// next
import Link from 'next/link';

const LinkList = ({
   linksData = null,
   modifyClasses = '',
   linksModifyClasses = '',
}) => {
   const linkClasses = `transition-all duration-default capitalize xl:text-lg text-white hover:underline ${linksModifyClasses}`;

   return (
      <ul className={`flex flex-col gap-1 ${modifyClasses}`}>
         {/* these links will always be here */}
         {linksData &&
            linksData.map(option => {
               return (
                  <li key={option.id}>
                     <Link className={linkClasses} href={option.url}>
                        {option.text}
                     </Link>
                  </li>
               );
            })}
      </ul>
   );
};

LinkList.propTypes = {
   linksData: PropTypes.array,
   linksModifyClasses: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default LinkList;
