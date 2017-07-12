Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginByEmail = loginByEmail;
exports.authByGoogle = authByGoogle;
exports.logout = logout;

var _constants = require('./constants');

var _reactNativeGoogleSignin = require('react-native-google-signin');

function loginByEmail(login, loginMessage, history, email, password) {
  _constants.auth.signInWithEmailAndPassword(email, password).then(function (firebaseUser) {
    login();
    history.replace('/dashboard');
  }).catch(function (error) {
    loginMessage(error.message);
  });
}

function authByGoogle() {
  _reactNativeGoogleSignin.GoogleSignin.signIn().then(function (user) {
    console.log(user);
  }).catch(function (err) {
    console.log('WRONG SIGNIN', err);
  }).done();
}

function logout() {}