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
   withCredentials: true,
});

const useAxios = () => {
   const { logout } = useFirebaseMethods();

   axiosSecure.interceptors.request.use(
      config => {
         const token = localStorage.getItem('token');         

         // Add token to headers
         if (token) {
            config.headers.authorization = `Bearer ${token}`;
         }

         return config;
      },
      error => {
         // Handle request error
         return Promise.reject(error);
      }
   );

   axiosSecure.interceptors.response.use(
      response => {
         console.log(response)
         return response;
      },
      error => {
         console.log(error);
      }
   );

   return { axiosPublic, axiosSecure };
};

export default useAxios;
