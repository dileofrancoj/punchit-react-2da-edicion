import { createContext, useContext, useReducer } from "react";
import jwt_decode from "jwt-decode";

import { LOGOUT, SET_AUTH } from "../actions/auth";
import { authReducer, initialState } from "../reducers/auth";

export const AuthContext = createContext();
const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const logout = () => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("auth");
  };

  const getUserInformation = () => jwt_decode(state.jwt);

  const login = ({ username, password }) => {
    // Una vez se ejecuta el método del login del contexto este realiza una petición http (post) al backend /authentication
    // El backend verifica el usuario password enviado
    // Si el usuario y el password es correcto el backend crea un JWT (iat, nombre, id)
    // Si los datos de ingreso son incorrectos -> jwt : null
    // API.post("/auth", { username, password });
    if (username === "admin" && password === "1234") {
      const { jwt } = {
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkZyYW5jbyBEaSBMZW8iLCJpYXQiOjE1MTYyMzkwMjJ9.A_tbNPFxSZrtLjJlNY6IDXUDR7wKnIjd49TOOlu_W-0",
      };
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
    <Provider value={{ setAuth, logout, login, getUserInformation }}>
      {children}
    </Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be wrapped witn AuthProvider");
  return context;
};
