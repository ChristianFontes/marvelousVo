Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginByEmail = loginByEmail;
exports.authByGoogle = authByGoogle;
exports.logout = logout;

var _constants = require('./constants');

function loginByEmail(login, loginMessage, history, email, password) {
  _constants.auth.signInWithEmailAndPassword(email, password).then(function (firebaseUser) {
    login();
    history.replace('/dashboard');
  }).catch(function (error) {
    loginMessage(error.message);
  });
}

function authByGoogle() {
  _constants.auth.signInWithRedirect(_constants.google);
  _constants.auth.getRedirectResult().then(function (result) {
    if (result.credential) {
      var token = result.credential.accessToken;
      console.log(token);
    }

    var user = result.user;
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    var email = error.email;

    var credential = error.credential;
    console.log(errorMessage);
  });
}

function logout() {}