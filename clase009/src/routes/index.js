import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "../pages/Login/";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default Routes;
