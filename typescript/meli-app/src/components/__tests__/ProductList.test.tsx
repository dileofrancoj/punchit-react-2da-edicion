import { render as baseRender, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "../../contexts/ProductsContext";
import { product } from "../../mocks/products";
import ProductList from "../ProductList";

describe("Products Component", () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = product;
  });

  const render = () =>
    baseRender(
      <Router>
        <ProductsProvider>
          <ProductList product={defaultProps} />
        </ProductsProvider>
      </Router>
    );

  test("Should render correctyly", () => {
    defaultProps = {
      ...defaultProps,
      title: "iPhone 8 64 Gb Gris Espacial",
    };
    render();
    screen.getByText(/iPhone 8 64 Gb Gris Espacial/i);
    screen.getByText(/ars \$105000/i);
  });
});
