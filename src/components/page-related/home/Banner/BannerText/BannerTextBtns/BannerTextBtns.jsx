'use client';

// react
import PropTypes from 'prop-types';

// components
import ButtonBtn from '@/components/buttons/ButtonBtn/ButtonBtn';
import LinkBtn from '@/components/buttons/LinkBtn/LinkBtn';

// hooks
import useFormVisiblity from '@/hooks/useFormVisiblity';

const BannerTextBtns = ({ modifyClasses = '' }) => {
   const { openSignupFormWithBackdrop } = useFormVisiblity();
   return (
      <div
         className={`flex flex-col xs:flex-row gap-2 justify-center items-center lg:justify-start lg:gap-3 ${modifyClasses}`}
      >
         <LinkBtn text="Let's Explore" url='#learn-more' />
         <ButtonBtn
            onClickFunction={openSignupFormWithBackdrop}
            text="Sign Up - It's Free!"
            colorTheme='outlinedPrimary'
            hashed={true}
         />
      </div>
   );
};

BannerTextBtns.propTypes = {
   modifyClasses: PropTypes.string,
};

export default BannerTextBtns;
