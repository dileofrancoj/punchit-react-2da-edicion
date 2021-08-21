import React, { Suspense } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const ProductsView = React.lazy(() => import("../views/Products/Products"));
const ProductView = React.lazy(() => import("../views/Product/Product"));

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Cargando...</div>}>
      <Switch>
        <Route path="/products" exact component={ProductsView} />
        <Route path="/products/:id" component={ProductView} />

        <Redirect to="/products" />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
