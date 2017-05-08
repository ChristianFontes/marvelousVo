Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.logout = logout;
exports.loginMessage = loginMessage;
exports.setEmail = setEmail;
exports.setPassword = setPassword;

var _actionTypes = require('./actionTypes');

var types = babelHelpers.interopRequireWildcard(_actionTypes);
function login() {
  return {
    type: types.LOGIN
  };
}

function logout() {
  return {
    type: types.LOGOUT
  };
}

function loginMessage(message) {
  return {
    type: types.LOGIN_MESSAGE,
    payload: message
  };
}

function setEmail(email) {
  return {
    type: types.SET_EMAIL,
    payload: email
  };
}

function setPassword(password) {
  return {
    type: types.SET_PASSWORD,
    payload: password
  };
}