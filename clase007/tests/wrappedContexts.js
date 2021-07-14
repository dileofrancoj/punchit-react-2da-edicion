import { BrowserRouter as Router } from "react-router-dom";

export const renderWithRouterContext = (children) => {
  return <Router>{children}</Router>;
};
