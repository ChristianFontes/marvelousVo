import * as types from './actionTypes';

export function login() {
  return {
    type: types.LOGIN
  };
}

export function logout() {
  return {
    type: types.LOGOUT
  };
}

export function loginMessage(message) {
  return {
    type: types.LOGIN_MESSAGE,
    payload: message
  };
}
