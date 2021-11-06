import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";

import Characters from "../pages/Characters";
import Counter from "../pages/Counter";

const AppRoutes = () => (
  <Routes>
    <Route path="/counter" component={Counter} />
    <Route path="/characters" component={Characters} />
  </Routes>
);

export default AppRoutes;
