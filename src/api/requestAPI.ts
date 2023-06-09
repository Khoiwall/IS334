import { mainApi } from "./endpoint";
import axios, { AxiosRequestConfig } from "axios";

const requestApi = ({ method = "GET", ...config }: AxiosRequestConfig) => {
  return axios({
    method,
    baseURL: mainApi,
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${
        typeof window === "undefined" ? "" : localStorage.getItem("is334")
      }`,
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};

export default requestApi;
