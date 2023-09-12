import axios from "axios";
import apiConfig from "./apiConfig";

export const axiosAuth = axios.create({
  baseURL: apiConfig.authenUrl,
});

axiosAuth.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (error) {
    return Promise.reject(error);
  }
);

axiosAuth.interceptors.request.use(
  function (config) {
  
    
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const axiosSupsciption = axios.create({
  baseURL: apiConfig.hostUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosSupsciption.interceptors.response.use(
  function (response) {
    
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosSupsciption.interceptors.request.use(
  function (config) {
    
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const serverUpload = axios.create({
  baseURL: apiConfig.serverUpload,
});

serverUpload.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return error;
  }
);
