import React, { createContext, useContext } from "react";
import axios from "axios";
import { useGlobalContext } from "./Provider";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import * as SecureStore from "expo-secure-store";
import { baseUrl } from "../Api/url";

const AxiosContext = createContext();

const AxiosProvider = ({ children }) => {
  const { globalState, dispatch, getToken } = useGlobalContext();

  const authAxios = axios.create({
    baseURL: `${baseUrl}/api`,
  });

  authAxios.interceptors.request.use(
    async (config) => {
      if (!config.headers.Authorization) {
        let token = await SecureStore.getItemAsync("token");
        config.headers.Authorization = `Bearer ${token}`;
        console.log(getToken());
      }

      return config;
    },
    (error) => {
      // console.log(error);
      // return Promise.reject(error);
    }
  );

  const refreshAuthLogic = async (failedRequest) => {
    const data = {
      refreshToken: globalState.refreshToken,
    };
    console.log(data);

    const options = {
      method: "POST",
      data,
      url: `${baseUrl}/account/refreshToken`,
    };

    try {
      const tokenRefreshResponse = await axios(options);
      failedRequest.response.config.headers.Authorization =
        "Bearer " + tokenRefreshResponse.data.accessToken;

      console.log(tokenRefreshResponse);
      dispatch({
        type: REFRESH_TOKEN,
        payload: {
          userToken: tokenRefreshResponse.data.accessToken,
        },
      });
      await SecureStore.setItemAsync(
        "token",
        tokenRefreshResponse.data.accessToken
      );
      await SecureStore.setItemAsync("refreshToken", globalState.refreshToken);
      return await Promise.resolve();
    } catch (e) {
      // dispatch("none");
      // console.log(e);
    }
  };

  createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {});

  return (
    <AxiosContext.Provider
      value={{
        authAxios,
      }}
    >
      {children}
    </AxiosContext.Provider>
  );
};

export { AxiosContext, AxiosProvider };
