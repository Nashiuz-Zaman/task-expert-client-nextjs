'use client';

// axios
import axios from 'axios';

// server url
import { serverUrl } from '@/uiData/serverUrl';

export const axiosPublic = axios.create({
   baseURL: serverUrl,
   withCredentials: true,
});

export const axiosSecure = axios.create({
   baseURL: serverUrl,
   withCredentials: true,
});

axiosSecure.interceptors.request.use(
   config => {
      const token = localStorage.getItem('token');

      // Add token to headers
      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
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
      return response;
   },
   error => {
      return Promise.reject(error);
   }
);

