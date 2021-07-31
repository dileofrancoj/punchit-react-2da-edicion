import { LOGOUT, SET_AUTH } from "../actions/auth";

export const initialState = {
  isLoggedIn: false,
  jwt: null, // enviar en cada request HTTP (cabecera) + storage
};

// {payload : {jwt : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkZyYW5jbyBEaSBMZW8iLCJpYXQiOjE1MTYyMzkwMjJ9.A_tbNPFxSZrtLjJlNY6IDXUDR7wKnIjd49TOOlu_W-0}}
export const authReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTH: {
      const { jwt } = action.payload;
      return {
        isLoggedIn: true,
        jwt,
      };
    }
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
