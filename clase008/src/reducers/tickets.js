import { SET_TICKETS, ADD_QUANTITY } from "../actions/tickets";

export const initialState = {
  tickets: [],
  total: 0,
  resume: {}, // {buy_tickets : }
};

// action : {type : SET_TICKETS, payload : {}}
// no tiene que mutar datos y siempre tiene que retornar algo
const getTotal = (tickets) =>
  tickets
    .map((ticket) => +ticket.precio * +ticket.cantidad)
    .reduce((prev, current) => prev + current, 0);

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKETS: {
      return {
        tickets: action.payload.tickets,
        total: getTotal(state.tickets),
      };
    }

    case ADD_QUANTITY: {
      const tickets = state.tickets.map((ticket) =>
        ticket.id === action.payload.id
          ? { ...ticket, cantidad: ticket.cantidad + 1 }
          : ticket
      );
      return {
        tickets,
        total: getTotal(tickets),
      };
    }

    default:
      return state;
  }
};
