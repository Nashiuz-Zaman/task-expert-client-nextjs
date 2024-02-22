'use client';

// axios
import axios from 'axios';

// server url
import { serverUrl } from '@/uiData/serverUrl';

const axiosPublic = axios.create({
   baseURL: serverUrl,
   withCredentials: true,
});

const axiosSecure = axios.create({
   baseURL: serverUrl,
   withCredentials: true,
});

const useAxios = () => {
   return { axiosPublic, axiosSecure };
};

export default useAxios;
