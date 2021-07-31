import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";

const Dashboard = () => {
  const { getUserInformation } = useContext(AuthContext);

  const { name } = getUserInformation();
  // API.get("/dashboard", {headers : {Authorization : localStorage.getItem("auth"}}
  return <h3>Bienvenido: {name}</h3>;
};

export default Dashboard;
