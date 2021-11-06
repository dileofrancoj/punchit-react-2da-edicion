import { API } from "../API";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
export const GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR";

const initialState = {
  characters: [],
  loading: false,
  error: false,
};
//action creator
export const getCharacters = () => {
  return async function (dispatch) {
    dispatch({ type: GET_CHARACTERS }); // loading
    const { data } = await API.get("/character");
    dispatch({ type: GET_CHARACTERS_SUCCESS, payload: data });
  };
};

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        loading: true,
      };
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload,
      };
    case GET_CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
