import {
  render as baseRender,
  screen,
  fireEvent,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "..";
import { ProductsProvider } from "../../../contexts/ProductsContext";

describe("Search component", () => {
  const render = (Component) => {
    baseRender(
      <Router>
        <ProductsProvider>{Component}</ProductsProvider>
      </Router>
    );
  };
  test("Should reset input after search", () => {
    render(<Search />);
    const searchBox = screen.getByTestId("search");
    screen.getByPlaceholderText(/buscar producto/i);
    fireEvent.change(searchBox, { target: { value: "producto prueba" } });
    fireEvent.keyDown(searchBox, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
      keyCode: 13,
    });

    screen.getByPlaceholderText(/buscar producto/i);
  });
});
