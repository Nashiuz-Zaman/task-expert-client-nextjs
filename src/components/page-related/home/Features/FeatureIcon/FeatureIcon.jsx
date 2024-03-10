'use client';
// react
import PropTypes from 'prop-types';

// icon
import { Icon } from '@iconify/react';

const FeatureIcon = ({ icon, modifyClasses='' }) => {
   return (
      <div className={`aspect-square text-3xl text-white w-max p-4 bg-primaryLight rounded-full ${modifyClasses}`}>
         <Icon icon={icon} />
      </div>
   );
};

FeatureIcon.propTypes = {
   icon: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default FeatureIcon;
