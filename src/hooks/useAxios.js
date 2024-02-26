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

const useAxios = () => {};

export default useAxios;
