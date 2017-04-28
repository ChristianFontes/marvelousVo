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

export function setEmail(email) {
  return {
    type: types.SET_EMAIL,
    payload: email
  };
}

export function setPassword(password) {
  return {
    type: types.SET_PASSWORD,
    payload: password
  };
}
