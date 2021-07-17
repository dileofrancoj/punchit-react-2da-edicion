import { useContext, useEffect, useReducer } from "react";
import { Table } from "react-bootstrap";
import { ADD_QUANTITY, SET_TICKETS } from "../../../actions/tickets";
import { UserContext } from "../../../contexts/user";

import { initialState, ticketsReducer } from "../../../reducers/tickets";
import TicketRow from "./TicketRow";

const TicketsTable = ({ tickets }) => {
  const [state, dispatch] = useReducer(ticketsReducer, initialState);
  const addTicketQuantity = (id) => {
    dispatch({ type: ADD_QUANTITY, payload: { id } });
  };

  useEffect(() => {
    dispatch({ type: SET_TICKETS, payload: { tickets } });
  }, [tickets]);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Tickets</th>
            <th className="text-center">Cantidad</th>
            <th className="text-center">Precio</th>
          </tr>
        </thead>
        <tbody>
          {state.tickets?.length > 0 &&
            state.tickets.map((ticket) => (
              <TicketRow
                key={ticket.id}
                {...ticket}
                addTicketQuantity={addTicketQuantity}
              />
            ))}
        </tbody>
      </Table>
      Total: ${state.total}
    </>
  );
};

export default TicketsTable;
