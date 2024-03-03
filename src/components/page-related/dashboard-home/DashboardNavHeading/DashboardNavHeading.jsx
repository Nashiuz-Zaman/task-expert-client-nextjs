import React from 'react';
import PropTypes from 'prop-types';

const DashboardNavHeading = ({ text, modifyClasses = '' }) => {
   return (
      <h3 className={`font-bold text-base lg:text-lg text-neutral-500 ${modifyClasses}`}>
         {text}
      </h3>
   );
};

DashboardNavHeading.propTypes = {
   text: PropTypes.any,
   modifyClasses: PropTypes.string,
};

export default DashboardNavHeading;
