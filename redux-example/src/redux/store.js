import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import count from "./counterDuck";
import characters from "./charactersDuck";
// createStore --> función encargada de crear store que servirá a nuestra aplicación
// applyMiddleware --> función encargada de aplicar middleware (redux-thunk) a nuestra aplicación
// compose --> dev tools redux
// combineReducers -> combinar todos los reducers que involucran nuestro state

const rootReducer = combineReducers({
  count,
  characters,
});

export const store = () => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};
