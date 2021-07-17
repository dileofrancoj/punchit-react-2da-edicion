import { fireEvent, render } from "@testing-library/react";
import TicketsTable from "../components/TicketsTable";

import { tickets } from "../../../mocks/tickets";

describe("TicketTable", () => {
  const renderTickets = () => render(<TicketsTable tickets={tickets} />);

  test("TicketTable should render properly for initialState", () => {
    const { getByText } = renderTickets();
    getByText(/tickets/i);
    // getByText("0");
    getByText("Total: $0");
  });

  test("Should increment ticket quantity and modify total", () => {
    const { getByRole, getByText } = renderTickets();
    fireEvent.click(getByRole("button", { name: "+" }));
    getByText("1");
    getByText("Total: $700");
  });
});
