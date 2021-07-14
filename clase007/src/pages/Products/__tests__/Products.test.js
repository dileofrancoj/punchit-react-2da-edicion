import { render } from "@testing-library/react";
import { renderWithRouterContext } from "../../../../tests/wrappedContexts";
import Products from "../Products";

describe("Products", () => {
  test("Should render properly", () => {
    const { getByText } = render(renderWithRouterContext(<Products />));
    getByText(/Products/i);
    getByText(/Producto 1/i);
    getByText(/Producto 2/i);
  });
});
