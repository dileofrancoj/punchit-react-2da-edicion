import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Loading from "../components/Loading";
import { UserProvider } from "../contexts/user";
// Require vs import
const Tickets = lazy(() => import("../pages/Tickets/Tickets"));
const Home = lazy(() => import("../pages/Home/Home")); // carga a demanda

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/tickets" component={Tickets} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
