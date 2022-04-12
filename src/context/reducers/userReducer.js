export const LOGIN_USER = "LOGIN_USER";
export const RESTORE_TOKEN = "RESTORE_TOKEN";
export const REFRESH_TOKEN = "REFRESH_TOKEN";
export const GET_USER = "GET_USER";
export const SIGN_OUT = "SIGN_OUT";

export const initialState = {
  userData: null,
  userToken: null,
  isLoading: true,
  isSignOut: false,
  refreshToken: null,
};

export const login = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

// Login reducer
export const userLoginReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...prevState,
        userToken: action.payload.token,
        refreshToken: action.payload.rToken,
        isLoading: false,
      };
    case RESTORE_TOKEN:
      return {
        ...prevState,
        userToken: action.payload.token,
        refreshToken: action.payload.rToken,
        userData: action.payload.userData,
        isLoading: false,
      };
    case REFRESH_TOKEN:
      return {
        ...prevState,
        userToken: action.payload.token,
        isLoading: false,
      };
    case GET_USER:
      return {
        ...prevState,
        userData: action.payload.userData,
        isLoading: false,
      };
    case SIGN_OUT:
      return {
        ...prevState,
        userData: null,
        userToken: null,
        isLoading: false,
        isSignOut: true,
        refreshToken: null,
      };

    default:
      return {
        ...prevState,
        isLoading: false,
      };
  }
};
