import PropTypes from 'prop-types';

const curYear = new Date().getFullYear();

const DashboardFooter = ({ modifyClasses = '' }) => {
   return (
      <footer
         className={`mt-auto px-6 h-[5.5rem] flex items-center bg-blackLight ${modifyClasses}`}
      >
         <small className='text-right block text-lg font-medium text-white'>
            &copy; {curYear} Task Expert, developed by Nashiuz Zaman
         </small>
      </footer>
   );
};

DashboardFooter.propTypes = {
   modifyClasses: PropTypes.string,
};

export default DashboardFooter;
