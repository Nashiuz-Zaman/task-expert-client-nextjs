'use client';

// react
import PropTypes from 'prop-types';
import { useState } from 'react';

// next
import Link from 'next/link';
import Image from 'next/image';

// component
import ButtonBtn from '../ButtonBtn/ButtonBtn';

// hooks
import useClickOutside from '@/hooks/useClickOutside';

//  react icon import
import { FaUserCircle } from 'react-icons/fa';

const UserProfile = ({ profile, logoutFunction, modifyClasses = '' }) => {
   const [showInfoPanel, setShowInfoPanel] = useState(false);

   // function to control info panel
   const handleShowInfoPanel = () => {
      setShowInfoPanel(prev => {
         return !prev;
      });
   };

   const handleClickOutside = e => {
      if (!e.target.closest('.userpanel-focus')) {
         setShowInfoPanel(false);
      }
   };

   useClickOutside(showInfoPanel, handleClickOutside);

   // declare name and photo variables
   let name, image;

   if (profile) {
      // assign name and photo variables
      name = profile.name;
      image = profile.imageSource;

      return (
         <div
            className={`h-8 md:h-10 xl:h-14 cursor-pointer relative ${modifyClasses}`}
         >
            {/* profile image container div */}
            <div
               onClick={handleShowInfoPanel}
               className='w-full h-full aspect-square border border-[#ddd]  rounded-full overflow-hidden'
            >
               {/* if no photo provided show default silhoutte photo */}
               {!image && (
                  <FaUserCircle className='w-full h-full object-contain text-white'></FaUserCircle>
               )}

               {/* if there is photo show this part */}
               {image !== null && (
                  <Image
                     width={400}
                     height={400}
                     className='w-full h-full object-cover'
                     src={image}
                     alt='user image'
                  />
               )}
            </div>

            {/* positioned div for userpanel menu */}
            <div
               className={`rounded-2xl w-[12rem] md:w-[15rem] bg-white border border-[#e5e5e5] shadow-xl p-4 absolute z-20 bottom-0 right-0  translate-y-[105%] transition-all duration-150 space-y-5 text-left cursor-default userpanel-focus ${
                  showInfoPanel ? 'opacity-100 visible' : 'opacity-0 collapse'
               }`}
            >
               <p className='font-semibold md:text-lg'>{name}</p>
               <Link
                  href='/'
                  className='block hover:text-primary transition-all duration-200'
               >
                  Go to website
               </Link>
               <ButtonBtn
                  onClickFunction={logoutFunction}
                  text='Sign Out'
                  modifyClasses='!p-0 bg-transparent !text-textPrimary border-0 hover:bg-transparent !text-base !text-left !w-full hover:!text-primary font-bold'
               />
            </div>
         </div>
      );
   }
};

UserProfile.propTypes = {
   profile: PropTypes.object,
   logoutFunction: PropTypes.func,
   modifyClasses: PropTypes.string,
};

export default UserProfile;
