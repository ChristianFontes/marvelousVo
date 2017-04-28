import * as types from '../actions/actionTypes';

const initialState = {
  auth: false,
  message: '',
  email: '',
  password: ''
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        auth: state.auth = true
      };
    case types.LOGOUT:
      return {
        ...state,
        auth: state.auth = false
      };
    case types.LOGIN_MESSAGE:
      return {
        ...state,
        message: state.message = action.payload
      };
    case types.SET_EMAIL:
      return {
        ...state,
        email: state.email = action.payload
      };
    case types.SET_PASSWORD:
      return {
        ...state,
        password: state.password = action.payload
      };
    default:
      return state;
  }
}
