'use client';

// react
import PropTypes from 'prop-types';

// redux
import { store } from './store';
import { Provider } from 'react-redux';

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

Providers.propTypes = {
  children: PropTypes.any,
};

export default Providers;
