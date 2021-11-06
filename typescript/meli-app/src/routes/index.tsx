import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Search from "../components/Search";
import { ProductsProvider } from "../contexts/ProductsContext";

import ProductView from "../views/Product/Product";
import ProductsView from "../views/Products/Products";

const Routes = () => {
  return (
    <Router>
      <ProductsProvider>
        <Search />
        <Switch>
          <Route path="/products" exact component={ProductsView} />
          <Route path="/products/:id" component={ProductView} />
          <Redirect to="/products" />
        </Switch>
      </ProductsProvider>
    </Router>
  );
};

export default Routes;
