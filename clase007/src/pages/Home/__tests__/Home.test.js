import { render } from "@testing-library/react";
import { renderWithRouterContext } from "../../../../tests/wrappedContexts";
import Home from "../Home";

describe("Products", () => {
  test("Should render properly", () => {
    const { getByText } = render(renderWithRouterContext(<Home />));
    getByText(/Home Page/i);
  });
});
