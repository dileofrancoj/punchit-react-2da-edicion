// Entry point de todas las rutas de mi aplicación
// BrowserRouter -> Contexto (estado global) History
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// URL's amigables -> dafity
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Products from "../pages/Products/Products";
import Navbar from "../components/layout/Navbar";

const Routes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact render={Home} />
          <Route path="/products" exact>
            <Products search="custom state" />
            <Route path="/products/:id" component={Product} />
          </Route>
          <Route path="/error" render={Error} />
          <Redirect to="/error" />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
