import { createContext, useContext, useReducer } from "react";
import jwt_decode from "jwt-decode";
import { LOGOUT, SET_AUTH } from "../actions/auth";
import { authReducer, initialState } from "../reducers/auth";
import { API } from "../api";

export const AuthContext = createContext();
const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const logout = () => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  const isLoggedIn = () => {
    if (localStorage.getItem("auth")) return true;
    return false;
  };

  const getUserInformation = () => jwt_decode(state.jwt);

  const login = async ({ username, password }) => {
    const {
      data: { jwt },
    } = await API.post("auth", { username, password });
    if (jwt) {
      setAuth({ jwt });
      localStorage.setItem("auth", jwt);
      return jwt;
    } else {
      return null;
    }
  };

  const setAuth = ({ jwt }) => {
    dispatch({ type: SET_AUTH, payload: { jwt } });
  };

  return (
    <Provider
      value={{ setAuth, logout, login, getUserInformation, isLoggedIn }}
    >
      {children}
    </Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be wrapped witn AuthProvider");
  return context;
};
