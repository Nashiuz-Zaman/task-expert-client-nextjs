'use client';

// hooks
import useAuth from '@/hooks/useAuth';

const AuthComponent = () => {
  useAuth();

  return true;
};

export default AuthComponent;
