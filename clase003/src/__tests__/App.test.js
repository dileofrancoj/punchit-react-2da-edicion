/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("The Form should be render properly", () => {
    const { getByText } = render(<App />);
    getByText(/nombre de la tarea/i);
    getByText(/descripcion de la tarea/i);
  });
});
