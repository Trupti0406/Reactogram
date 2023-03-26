// This file will be responsible to mnipulate the state, which in our case is user
const initialState = {
  user: {},
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGIN_ERROR":
      return initialState;
    default:
      return initialState;
  }
};
