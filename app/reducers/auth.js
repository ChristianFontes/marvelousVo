import * as types from '../actions/actionTypes';

const initialState = {
  auth: false,
  name_button: 'Iniciar Sesion',
  message: null
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
    default:
      return state;
  }
}
