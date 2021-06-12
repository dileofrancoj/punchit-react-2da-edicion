// ¿¿¿ Funcion Pura ??? -> Para una entrada X retorna una salida Y y siempre RETORNA ALGO
import { ACTIONS } from "../actions/fetch";

export const initialState = {
  loading: true,
  error: false,
  data: {},
};

// ...action: ({type : ACTIONS.SET_DATA, payload : {info : ... , results : ...}})
export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return {
        ...initialState,
        loading: false,
        data: {
          info: action.payload.info,
          results: action.payload.results,
        },
      };
    case ACTIONS.SET_ERROR:
      return {
        ...initialState,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
