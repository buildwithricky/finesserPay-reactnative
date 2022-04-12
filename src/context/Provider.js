import React, { createContext, useReducer, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { LOGIN_USER, RESTORE_TOKEN, SIGN_OUT } from "./reducers/userReducer";
import { loginUser } from "../Api/login";

const GlobalContext = createContext({});

export const useGlobalContext = () => React.useContext(GlobalContext);
// context provider

const GlobalProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  const signOut = async () => {
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("refreshToken");
    await SecureStore.deleteItemAsync("userData");
    dispatch({
      type: SIGN_OUT,
    });
  };
  const login = async (data) => {
    try {
      const response = await loginUser(data);
      const responseData = await response?.data;
      
      
      // note edit backend to say FAIL
      
      if(responseData.status === "error" || responseData.status === 'fail'){
        return responseData
      }
      
      const { status, userToken, refreshToken } = await responseData;

      await SecureStore.setItemAsync("token", userToken);
      await SecureStore.setItemAsync("refreshToken", refreshToken);

      dispatch({
        type: LOGIN_USER,
        payload: {
          token: userToken,
          rToken: refreshToken,
        },
      });

      return status;
    } catch (e) {
      console.log("this is err ",e)
      dispatch({
        type: LOGIN_USER,
        payload: {
          err: e.message,
        },
      });
    }
  };
  useEffect(() => {
    const restoreToken = async () => {
      try {
        let token = await SecureStore.getItemAsync("token");
        let rToken = await SecureStore.getItemAsync("refreshToken");
        let userData = await SecureStore.getItemAsync("userData");

        dispatch({
          type: RESTORE_TOKEN,
          payload: {
            token,
            rToken,
            userData: JSON.parse(userData),
          },
        });
      } catch (e) {
        console.log(e);
      }
    };
    restoreToken();
  }, []);

  const getToken = () => {
    return globalState.userToken;
  };
  return (
    <GlobalContext.Provider
      value={{
        login,
        signOut,
        getToken,
        globalState,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
