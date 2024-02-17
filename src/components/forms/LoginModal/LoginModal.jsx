// react
import PropTypes from 'prop-types';

// components
import LoginFormWithImage from '../LoginFormWithImage/LoginFormWithImage';
// import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';

// data
import loginImg from './../../../assets/forms/login.webp';

const LoginModal = ({ visible = false }) => {
   return (
      <div
         className={`fixed w-full transition-all duration-default opacity-100 visible top-1/2 left-1/2 -translate-y-full -translate-x-1/2 ${
            visible ? '!opacity-100 !visible !-translate-y-1/2' : ''
         }`}
      >
         {/* <InnerContainer> */}
         <LoginFormWithImage imageSource={loginImg} />
         {/* </InnerContainer> */}
      </div>
   );
};

LoginModal.propTypes = {
   visible: PropTypes.bool,
};

export default LoginModal;
