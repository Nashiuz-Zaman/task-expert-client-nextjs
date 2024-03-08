'use client';

// axios
import axios from 'axios';

// hooks
import useFirebaseMethods from './useFirebaseMethods';

// server url
import { serverUrl } from '@/uiData/serverUrl';

const axiosPublic = axios.create({
   baseURL: serverUrl,
});

const axiosSecure = axios.create({
   baseURL: serverUrl,
});

const useAxios = () => {
   const { logout } = useFirebaseMethods();

   // request
   axiosSecure.interceptors.request.use(
      config => {
         const token = localStorage.getItem('token');
         if (token) {
            config.headers.authorization = `Bearer ${token}`;
         }
         return config;
      },
      error => {
         return Promise.reject(error);
      }
   );

   // response
   axiosSecure.interceptors.response.use(
      response => {
         return response;
      },
      error => {
         const statusCode = error.response.status;

         if (statusCode === 401 || statusCode === 403) {
            logout(false);
            return;
         }

         return Promise.reject(error);
      }
   );

   return { axiosPublic, axiosSecure };
};

export default useAxios;
