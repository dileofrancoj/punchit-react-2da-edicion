import { useContext, createContext } from "react";

export const UserContext = createContext(null);
const { Provider } = UserContext;

export const UserProvider = ({ children }) => {
  // login()
  // logout()
  // verifyUser()
  const userBackendData = {
    name: "franco",
    lastname: "di leo",
    nickname: "frantuko",
    points: 100,
  };
  return <Provider value={userBackendData}>{children}</Provider>;
};
