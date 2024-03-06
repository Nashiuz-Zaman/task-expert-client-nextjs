'use client';

// react
import PropTypes from 'prop-types';
import { useState } from 'react';

//  icon
import { Icon } from '@iconify/react';

// next
import Link from 'next/link';
import Image from 'next/image';

// hooks
import useClickOutside from '@/hooks/useClickOutside';
import useEscapeClose from '@/hooks/useEscapeClose';

const UserProfile = ({ profileData, logoutFunction, modifyClasses = '' }) => {
   const [showInfoPanel, setShowInfoPanel] = useState(false);

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
   useEscapeClose(() => {
      setShowInfoPanel(false);
   });

   const optionsClasses =
      'flex font-semibold items-center gap-2 hover:text-primary transition-all duration-200';

   // declare name and photo variables
   let name, image;

   if (profileData) {
      // assign name and photo variables
      name = profileData.name;
      image = profileData.imageSource;

      return (
         <div
            className={`h-8 md:h-10 xl:h-14 cursor-pointer relative ${modifyClasses}`}
         >
            {/* profile image container div */}
            <div
               onClick={handleShowInfoPanel}
               className='w-full h-full aspect-square border border-neutral-300  rounded-full overflow-hidden'
            >
               {/* if no photo provided show default silhoutte photo */}
               {!image && (
                  <Icon
                     className='w-full h-full object-contain text-white'
                     icon='solar:user-circle-bold'
                  />
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
               className={`rounded-2xl w-[12rem] md:w-[15rem] bg-white border border-neutral-300 shadow-sm p-4 absolute z-30 bottom-0 right-0 translate-y-[105%] space-y-5 text-left cursor-default userpanel-focus ${
                  showInfoPanel ? 'block' : 'hidden'
               }`}
            >
               <p className='font-bold md:text-lg'>{name}</p>

               <Link href='/' className={optionsClasses}>
                  <Icon icon='icon-park-solid:home' /> <span>Home</span>
               </Link>

               <Link href='/settings' className={optionsClasses}>
                  <Icon icon='iconamoon:settings-fill' /> <span>Settings</span>
               </Link>

               <button onClick={logoutFunction} className={optionsClasses}>
                  <Icon icon='mdi:logout' /> <span>Sign Out</span>
               </button>
            </div>
         </div>
      );
   }
};

UserProfile.propTypes = {
   profileData: PropTypes.object,
   logoutFunction: PropTypes.func,
   modifyClasses: PropTypes.string,
};

export default UserProfile;
