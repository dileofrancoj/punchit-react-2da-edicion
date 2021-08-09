import { Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../contexts/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) window.location.href = "/login";

  return (
    <>
      <Layout />
      <Route {...rest} component={(props) => <Component {...props} />} />
    </>
  );
};

export default PrivateRoute;
