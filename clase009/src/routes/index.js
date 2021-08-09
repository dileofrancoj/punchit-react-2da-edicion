import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "../pages/Login/";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import { useEffect, useState } from "react";

/*
1. Hacer un renderizado condicional 
2. Armar un layout
3. Armar un HoC
4. Armar un Layout disponible en una ruta privada
*/
const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
